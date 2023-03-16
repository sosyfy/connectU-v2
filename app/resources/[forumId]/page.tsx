import LeftSide from "@/components/core/left-side"
import ForumView from "./forum-view-post"


type Params = {
    params: {
        forumId: string
    }
}


export default function page({ params: { forumId } }: Params) {
    console.log(forumId);
    
  return (
    <main className="grid max-w-7xl grid-cols-12 gap-x-4 mx-auto pt-[6.5rem] bg-whitesmoke text-dimgray font-roboto pb-5 px-5 md:px-8 lg:px-0">
         <LeftSide />
         <ForumView forumId={forumId}  />
    </main>
  )
}
