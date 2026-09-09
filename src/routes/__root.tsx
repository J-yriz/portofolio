import { useEffect, useRef } from 'react'
import { Link, Outlet, createRootRoute, useLocation } from '@tanstack/react-router'
import { ArrowLeft } from '@phosphor-icons/react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { getLenis, useLenis } from '../hooks/useLenis'

function NotFound() {
  return (
    <main className="page container not-found">
      <p className="not-found-code">404</p>
      <h1>Page not found.</h1>
      <p className="not-found-body">
        The page you are looking for moved or never existed. Back to safety:
      </p>
      <Link to="/" className="btn btn-primary">
        <ArrowLeft size={17} weight="bold" aria-hidden />
        Back home
      </Link>
    </main>
  )
}

function RootComponent() {
  useLenis()
  const pathname = useLocation({ select: (s) => s.pathname })
  const isFirst = useRef(true)

  /* Jump to top on route change through Lenis so smooth state stays in
     sync. Skipped on first mount to preserve browser scroll restoration. */
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    getLenis()?.scrollTo(0, { immediate: true })
  }, [pathname])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
})
