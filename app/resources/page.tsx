
import useServerToken from "@/lib/hooks/useServerToken";
import useAxios from "@/lib/hooks/useAxios";
import General from "@/components/forum/general";


export default async function Page() {

  let token = await useServerToken();
  const request = await useAxios(token);

  let response = await request({
    method: "get",
    path: `/forum/forum-posts?category=resources`,
  })

  return (
    <General
      posts={response.data}
      token={token}
      category="resources"
      headerTitle="Resources"
      headerSubTitle="Share any useful material on any topics"
      backLink="/resources/"
      filterButtonText="Add New Resource" 
    />
  )
}
