import useServerToken from "@/lib/hooks/useServerToken";
import useAxios from "@/lib/hooks/useAxios";
import User from "./user";
{/* <Resume userId={userId} token={token} user={response?.data }  /> */ }

type Params = {
  params: {
    userId: string
  }
}




export default async function Page({ params: { userId } }: Params) {

  let token = await useServerToken();
  const request = await useAxios(token);

  let response = await request({
    method: "get",
    path: `/user/${userId}`
  })


  return (
    <User
      posts={response.data?.posts}
      user={response.data?.user}
      connections={response.data?.connections}
      connectionNo={response.data?.connectionNo}
      postNo={response.data?.postNo}
    />
  )
}
