import LeftSide from "@/components/core/left-side"
import Resume from "./resume"

type Params = {
    params: {
        userId: string
    }
}


export default function Page({ params: { userId } }: Params) {
  return (
        <Resume userId={userId} />
  )
}
