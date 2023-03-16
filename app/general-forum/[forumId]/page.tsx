import LeftSide from "@/components/core/left-side"
import General from "./general"



export default function page() {
  return (
    <main className="grid max-w-7xl grid-cols-12 gap-x-4 mx-auto pt-[6.5rem] bg-whitesmoke text-dimgray font-roboto pb-5 px-5 md:px-8 lg:px-0">
         <LeftSide />
         <ForumView />
    </main>
  )
}
