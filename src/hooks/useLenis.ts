import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

let instance: Lenis | null = null

/* Module-level access for imperative calls (route changes, modal lock). */
export function getLenis(): Lenis | null {
  return instance
}

/* Single Lenis smooth-scroll instance for the whole app.
   Mount once in the root route — it survives route changes.
   autoRaf runs its own loop; reduced-motion users are honored by
   Lenis itself (respectReducedMotion defaults to true). */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true })
    instance = lenis
    return () => {
      if (instance === lenis) instance = null
      lenis.destroy()
    }
  }, [])
}
