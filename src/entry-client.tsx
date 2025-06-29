import React from 'react'
import { createRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import { getPage } from 'vite-plugin-ssr/client'

hydrate()

async function hydrate() {
  const pageContext = await getPage()
  const container = document.getElementById('root')!
  createRoot(container).render(<PageShell pageContext={pageContext} />)
}
