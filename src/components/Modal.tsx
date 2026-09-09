import { useEffect, useRef, type ReactNode } from 'react'
import { X } from '@phosphor-icons/react'
import { getLenis } from '../hooks/useLenis'
import './Modal.css'

interface ModalProps {
  label: string
  onClose: () => void
  children: ReactNode
}

/* Centered dialog: closes on backdrop click or Escape,
   locks body scroll while open, focuses the close button. */
export function Modal({ label, onClose, children }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    getLenis()?.stop()
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      getLenis()?.start()
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onClick={(e) => e.stopPropagation()}
        /* Lets wheel/touch scroll natively inside the panel while
           Lenis is stopped for the page behind. */
        data-lenis-prevent
      >
        <button
          ref={closeRef}
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} weight="bold" aria-hidden />
        </button>
        {children}
      </div>
    </div>
  )
}
