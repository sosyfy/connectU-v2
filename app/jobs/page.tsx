import LeftSide from "@/components/core/left-side"
import General from "./general"



export default function Page() {
  return (
    <main className="grid max-w-7xl grid-cols-12 gap-x-4 mx-auto pt-[6.5rem] bg-whitesmoke text-dimgray font-roboto pb-5 px-5 md:px-16 lg:px-0">
         <LeftSide />
         <General />
    </main>
  )
}
