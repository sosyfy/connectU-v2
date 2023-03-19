import Resume from "./resume"
import useServerToken from "@/lib/hooks/useServerToken";
import useAxios from "@/lib/hooks/useAxios";

type Params = {
    params: {
        userId: string
    }
}




export default async function Page({ params: { userId } }: Params) {

  let token = await useServerToken();
  const request = await useAxios(token);

  let response  = await request({
    method: "get",
    path: `/user/${userId}`
})


  return (
        <Resume userId={userId} token={token} user={response?.data }  />
  )
}
