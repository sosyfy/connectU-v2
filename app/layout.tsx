import './globals.css'
import type { Metadata } from "next"
import Provider from './Provider'


export const metadata: Metadata = {
  title: 'ConnectU',
  description: "Built for the people by the people",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className='bg-whitesmoke'>
      <body className="h-screen bg-whitesmoke">
        <Provider>
          {children}
        </Provider>

      </body>
    </html>
  )
}
