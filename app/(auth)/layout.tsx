


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
      <div className="relative h-screen min-h-full overflow-hidden bg-deepskyblue">
            <div className="flex items-center justify-center h-screen px-6 md:px-12">
              { children }
            </div>
        </div>
  )
}
