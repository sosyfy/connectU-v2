import useServerToken from "@/lib/hooks/useServerToken";
import useAxios from "@/lib/hooks/useAxios";
import General from "@/components/forum/general";


export default async function Page() {

  let token = await useServerToken();
  const request = await useAxios(token);

  let response = await request({
    method: "get",
    path: `/forum/forum-posts?category=job`,
  })

  return (

    <General
      posts={response.data}
      token={token}
      category="job"
      headerTitle="Jobs"
      headerSubTitle="Career building and sharing opportunities"
      backLink="/jobs/" 
      filterButtonText="Post New Job"
    />
  )
}
