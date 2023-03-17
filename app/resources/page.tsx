import LeftSide from "@/components/core/left-side"
import General from "./resources"
import useServerToken from "@/lib/hooks/useServerToken";
import useAxios from "@/lib/hooks/useAxios";


export default async function Page() {
  
  let token = await useServerToken();
  const request = await useAxios(token);

  let response  = await request({
        method: "get",
        path: `/forum/resources`,
     })

  return (
    <main className="grid max-w-7xl grid-cols-12 gap-x-4 mx-auto pt-[6.5rem] bg-whitesmoke text-dimgray font-roboto pb-5 px-5 md:px-16 lg:px-0">
         <LeftSide />
         <General posts={response.data}  token={token} />
    </main>
  )
}
