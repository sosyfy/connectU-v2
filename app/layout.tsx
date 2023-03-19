import './globals.css'
import type { Metadata } from "next"
import Provider from './Provider'
import RightSide from '@/components/core/right-side'
import Header from '@/components/core/header'
import LeftSide from '@/components/core/left-side'

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
    <html lang="en">
      <body>
        <Provider>
          <div className="relative w-full bg-whitesmoke">
            <Header />
            <main className="grid max-w-7xl grid-cols-12 gap-x-4 mx-auto pt-[6.5rem] pb-5 px-5 md:px-8 lg:px-0">
              <LeftSide />
              {children}
              <RightSide />
            </main>
          </div>

        </Provider>

      </body>
    </html>
  )
}
