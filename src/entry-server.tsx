import React from 'react'
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import { PageShell } from './PageShell'

export { render }
export { passToClient }

const passToClient = ['pageProps']

async function render(pageContext) {
  const { Page } = pageContext

  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page />
    </PageShell>
  )

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>E&P Events</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}
