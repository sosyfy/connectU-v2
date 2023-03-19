
import TimelineContainer from '@/components/core/timeline-container'
import useAxios from '@/lib/hooks/useAxios';
import useServerToken from '@/lib/hooks/useServerToken';




export default async function Home() {
  let token = await useServerToken();
  const request = await useAxios(token);

  let response = await request({
    method: "get",
    path: "/post/timeline/posts"
  })

  return (
    <TimelineContainer token={token} initialPosts={response?.data} />
  )
}
