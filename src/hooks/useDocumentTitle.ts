import { useEffect } from 'react'

/* Sets document.title per route. Call at the top of each route component. */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title
  }, [title])
}
