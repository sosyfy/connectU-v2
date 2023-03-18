
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
         <General posts={response.data}  token={token} />
  )
}
