import { type LinksFunction } from '@remix-run/node'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import faviconAssetUrl from '~/assets/favicon.svg?url'
import tailwindStylesheetLink from '~/styles/tailwind.css?url'

export const links: LinksFunction = () => {
  return [
    { rel: 'icon', type: 'image/svg+xml', href: faviconAssetUrl },
    { rel: 'stylesheet', href: tailwindStylesheetLink }
  ]
}

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='bg-blue-700 text-gray-200'>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

const App = () => {
  return <Outlet />
}

export default App
