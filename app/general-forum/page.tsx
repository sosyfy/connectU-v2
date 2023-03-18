import LeftSide from "@/components/core/left-side"
import General from "./general"
import { getServerSession } from 'next-auth/next';
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import useServerToken from "@/lib/hooks/useServerToken";
import useAxios from "@/lib/hooks/useAxios";


export default async function Page() {

  const session: any = await getServerSession(authOptions)

  let token = await useServerToken();
  const request = await useAxios(token);

  let response = await request({
    method: "get",
    path: `/forum/general`,
  })

  return (

    <General posts={response.data} token={token} />

  )
}

