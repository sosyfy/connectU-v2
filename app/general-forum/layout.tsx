import Header from "@/components/core/header"
import LeftSide from "@/components/core/left-side"

export const metadata = {
  title: 'ConnectU',
  description: "Built for the people by the people",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
      <div className="h-screen bg-whitesmoke">
        <Header />
        <main className="grid max-w-7xl grid-cols-12 gap-x-4 mx-auto pt-[6.5rem] bg-whitesmoke text-dimgray font-roboto pb-5 px-5 md:px-16 lg:px-0">
          <LeftSide />
          {children}
        </main>
      </div>
  )
}
