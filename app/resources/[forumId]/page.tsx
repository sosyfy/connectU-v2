
import LeftSide from "@/components/core/left-side"
import ForumView from "./forum-view-post"
import useServerToken from "@/lib/hooks/useServerToken";
import useAxios from "@/lib/hooks/useAxios";


type Params = {
  params: {
    forumId: string | null
  }
}


export default async function Page({ params: { forumId } }: Params) {

  let token = await useServerToken();
  const request = await useAxios(token);

  let postResponse = await request({
    method: "get",
    path: `/forum/single/${forumId}`
  })

  let commentsResponse = await request({
    method: "get",
    path: `/comment/${forumId}`
  })

 postResponse.data.comments = commentsResponse.data


  return (
   
      <ForumView
        forumId={forumId}
        token={token}
        post={postResponse.data}
        postComments={commentsResponse.data}
      />
  
  )
}
