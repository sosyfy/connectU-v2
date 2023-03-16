import Header from "@/components/core/header"

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
        <body className="bg-whitesmoke">
        <Header />
          {children}
        </body>
      </html>
    )
  }
  