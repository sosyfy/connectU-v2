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
      <html lang="en">
        <body className="h-screen bg-whitesmoke">
        <Header />
        <main className="grid max-w-5xl grid-cols-12 gap-x-7 mx-auto pt-[6.5rem] bg-whitesmoke text-dimgray font-roboto pb-5 px-5 md:px-8 lg:px-0">
         <LeftSide />
         {children}
        </main>
        </body>
      </html>
    )
  }
  