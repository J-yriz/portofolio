import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { ArrowLeft } from '@phosphor-icons/react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

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

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ),
  notFoundComponent: NotFound,
})
