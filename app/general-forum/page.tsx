import { getServerSession } from 'next-auth/next';
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import useServerToken from "@/lib/hooks/useServerToken";
import useAxios from "@/lib/hooks/useAxios";
import General from "@/components/forum/general";


export default async function Page() {

  const session: any = await getServerSession(authOptions)

  let token = await useServerToken();
  const request = await useAxios(token);

  let response = await request({
    method: "get",
    path: `/forum/forum-posts?category=general`,
  })

  return (

    <General
      posts={response.data}
      token={token}
      category="general"
      headerTitle="General Discussion"
      headerSubTitle="Lets Connect"
      backLink="/general-forum/"
      filterButtonText="Create Something"
    />

  )
}

