import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './HoverPreview.css'

interface HoverPreviewProps {
  /** Preview artwork. Omit to render a monogram tile instead. */
  image?: string
  /** Accessible name for the preview card. */
  alt: string
  children: ReactNode
  /** Card width in px (square card, logo fills it). */
  previewWidth?: number
  /** Delay before the card appears — avoids flicker on quick pass-overs. */
  showDelay?: number
  /** Delay before the card disappears after pointer leave. */
  hideDelay?: number
  /** Gap in px between cursor/trigger and the card. */
  offset?: number
}

interface FollowTarget {
  x: number
  y: number
  placement: 'above' | 'below'
  /** Lean in degrees: negative on the left, 0 center, positive on the right. */
  tilt: number
}

const EDGE_MARGIN = 12
const EXIT_DURATION = 200
/* Max lean at the trigger word edges. */
const MAX_TILT = 7
/* Per-frame catch-up rates for the follow loop (1 = instant). */
const POSITION_LERP = 0.2
const TILT_LERP = 0.3

function monogram(label: string): string {
  const letters = label
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
  return letters.toUpperCase() || '?'
}

/* Floating image preview for an inline keyword. The trigger keeps the
   `.skill-mark` underline look; the card renders in a portal on
   `document.body` (position:fixed) so transformed ancestors like
   `.reveal` can't offset it, and viewport clamping keeps it on-screen.
   Follow motion runs in a rAF lerp loop writing straight to the DOM —
   no React re-renders while the cursor moves, and positioning uses the
   compositor-friendly `transform` instead of `left`/`top`. */
export function HoverPreview({
  image,
  alt,
  children,
  previewWidth = 150,
  showDelay = 120,
  hideDelay = 160,
  offset = 14,
}: HoverPreviewProps) {
  const [mounted, setMounted] = useState(false)
  const [shown, setShown] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)

  const triggerRef = useRef<HTMLButtonElement>(null)
  const floatRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const showTimer = useRef(0)
  const hideTimer = useRef(0)
  const unmountTimer = useRef(0)
  const rafRef = useRef(0)
  const loopRaf = useRef(0)
  const activeRef = useRef(false)
  const suppressFocusRef = useRef(false)
  const targetRef = useRef<FollowTarget>({ x: 0, y: 0, placement: 'below', tilt: 0 })
  const currentRef = useRef<FollowTarget>({ x: 0, y: 0, placement: 'below', tilt: 0 })
  const reduceMotionRef = useRef(false)
  const cardId = useId()

  /* Reset a previous load failure if the artwork source changes. */
  const [prevImage, setPrevImage] = useState(image)
  if (prevImage !== image) {
    setPrevImage(image)
    setImgFailed(false)
  }

  useEffect(
    () => () => {
      window.clearTimeout(showTimer.current)
      window.clearTimeout(hideTimer.current)
      window.clearTimeout(unmountTimer.current)
      cancelAnimationFrame(rafRef.current)
      cancelAnimationFrame(loopRaf.current)
    },
    [],
  )

  /* Square card: height follows previewWidth + padding + border. */
  const estimatedHeight = previewWidth + 18

  /* Tilt maps to the cursor inside the trigger word itself:
     left edge of the word leans left, word center stays upright. */
  const tiltInTrigger = (clientX: number, rect: DOMRect | null): number => {
    if (!rect || rect.width <= 0) return 0
    const ratio = ((clientX - rect.left) / rect.width) * 2 - 1
    return Math.min(Math.max(ratio, -1), 1) * MAX_TILT
  }

  const computeTarget = (clientX: number, clientY: number, rect: DOMRect | null): FollowTarget => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const half = previewWidth / 2
    const minX = half + EDGE_MARGIN
    const x = Math.min(Math.max(clientX, minX), Math.max(vw - minX, minX))
    const fitsAbove = clientY - offset - estimatedHeight > EDGE_MARGIN
    const placement: FollowTarget['placement'] = fitsAbove ? 'above' : 'below'
    const rawY = fitsAbove ? clientY - offset - estimatedHeight : clientY + offset
    const maxY = Math.max(vh - estimatedHeight - EDGE_MARGIN, EDGE_MARGIN)
    const y = Math.min(Math.max(rawY, EDGE_MARGIN), maxY)
    return { x, y, placement, tilt: tiltInTrigger(clientX, rect) }
  }

  const triggerRect = (): DOMRect | null =>
    triggerRef.current?.getBoundingClientRect() ?? null

  const reveal = () => {
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => setShown(true))
    })
  }

  const show = (clientX: number, clientY: number) => {
    window.clearTimeout(hideTimer.current)
    window.clearTimeout(unmountTimer.current)
    window.clearTimeout(showTimer.current)
    activeRef.current = true
    reduceMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (image && !imgFailed) {
      const preload = new Image()
      preload.src = image
    }
    /* Snap to the cursor on open so the card never flies in from afar. */
    targetRef.current = computeTarget(clientX, clientY, triggerRect())
    currentRef.current = { ...targetRef.current }
    if (mounted) {
      setShown(true)
      return
    }
    showTimer.current = window.setTimeout(() => {
      setMounted(true)
      reveal()
    }, showDelay)
  }

  const hide = (immediate = false) => {
    window.clearTimeout(showTimer.current)
    window.clearTimeout(hideTimer.current)
    window.clearTimeout(unmountTimer.current)
    activeRef.current = false
    if (immediate) {
      setShown(false)
      setMounted(false)
      return
    }
    hideTimer.current = window.setTimeout(() => {
      setShown(false)
      unmountTimer.current = window.setTimeout(() => setMounted(false), EXIT_DURATION)
    }, hideDelay)
  }

  const anchorFromTrigger = (): { x: number; y: number } => {
    const rect = triggerRef.current?.getBoundingClientRect()
    if (!rect) return { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    return { x: rect.left + rect.width / 2, y: rect.top }
  }

  const isTouch = () =>
    window.matchMedia('(hover: none)').matches

  /* Dismiss an open card on scroll, resize, or Escape.
     Self-contained (no outer callbacks) so the effect only runs per mount. */
  useEffect(() => {
    if (!mounted) return
    const dismiss = () => {
      window.clearTimeout(showTimer.current)
      window.clearTimeout(hideTimer.current)
      window.clearTimeout(unmountTimer.current)
      activeRef.current = false
      setShown(false)
      setMounted(false)
    }
    const onScroll = () => dismiss()
    const onResize = () => dismiss()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dismiss()
        triggerRef.current?.blur()
      }
    }
    window.addEventListener('scroll', onScroll, { capture: true, passive: true })
    window.addEventListener('resize', onResize)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true })
      window.removeEventListener('resize', onResize)
      window.removeEventListener('keydown', onKey)
    }
  }, [mounted])

  /* Follow loop: ease the card toward the cursor every frame, writing
     straight to the DOM. Reduced-motion users get instant tracking. */
  useEffect(() => {
    if (!mounted) return
    const step = () => {
      const floatEl = floatRef.current
      const cardEl = cardRef.current
      if (floatEl && cardEl) {
        const t = targetRef.current
        const c = currentRef.current
        const pLerp = reduceMotionRef.current ? 1 : POSITION_LERP
        const tLerp = reduceMotionRef.current ? 1 : TILT_LERP
        c.x += (t.x - c.x) * pLerp
        c.y += (t.y - c.y) * pLerp
        c.tilt += (t.tilt - c.tilt) * tLerp
        if (Math.abs(t.x - c.x) < 0.05) c.x = t.x
        if (Math.abs(t.y - c.y) < 0.05) c.y = t.y
        if (Math.abs(t.tilt - c.tilt) < 0.01) c.tilt = t.tilt
        floatEl.style.transform = `translate3d(${c.x.toFixed(1)}px, ${c.y.toFixed(1)}px, 0)`
        cardEl.style.setProperty('--hp-tilt', `${c.tilt.toFixed(2)}deg`)
        if (cardEl.dataset.placement !== t.placement) {
          cardEl.dataset.placement = t.placement
        }
      }
      loopRaf.current = requestAnimationFrame(step)
    }
    loopRaf.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(loopRaf.current)
  }, [mounted])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="skill-mark hover-preview-trigger"
        aria-describedby={mounted ? cardId : undefined}
        onMouseEnter={(e) => {
          if (isTouch()) return
          suppressFocusRef.current = true
          show(e.clientX, e.clientY)
        }}
        onMouseMove={(e) => {
          if (isTouch() || !activeRef.current) return
          targetRef.current = computeTarget(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect())
        }}
        onMouseLeave={() => {
          if (isTouch()) return
          hide()
        }}
        onFocus={() => {
          /* Mouse users already opened the card on enter; this path
             serves keyboard focus and touch taps. */
          if (suppressFocusRef.current) return
          const anchor = anchorFromTrigger()
          show(anchor.x, anchor.y)
        }}
        onBlur={() => {
          suppressFocusRef.current = false
          hide()
        }}
        onClick={() => {
          /* Tap-to-toggle fallback for touch; hover owns desktop. */
          if (!isTouch()) return
          if (mounted) {
            hide(true)
            triggerRef.current?.blur()
          }
        }}
      >
        {children}
      </button>
      {mounted &&
        createPortal(
          <div ref={floatRef} className="hover-preview-float">
            <div
              ref={cardRef}
              id={cardId}
              role="tooltip"
              aria-label={alt}
              data-placement="below"
              className={`hover-preview-card${shown ? ' is-visible' : ''}`}
              style={{ width: previewWidth }}
            >
              {image && !imgFailed ? (
                <img
                  src={image}
                  alt={alt}
                  draggable={false}
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="hover-preview-fallback" aria-hidden>
                  {monogram(alt)}
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
