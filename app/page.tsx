
import Header from '@/components/core/header';
import LeftSide from '@/components/core/left-side';
import RightSide from '@/components/core/right-side';
import TimelineContainer from '@/components/core/timeline-container'
import HomeLoadingSkeleton from '@/components/loading/homepage-skeleton';
import useAxios from '@/lib/hooks/useAxios';
import useServerToken from '@/lib/hooks/useServerToken';
import { Suspense } from "react";



export default async function Home() {
  let token = await useServerToken();
  const request = await useAxios(token);

  let response = await request({
    method: "get",
    path: "/post/timeline/posts"
  })

  return (
    <div className='bg-whitesmoke'>
      <div className="relative w-full h-screen bg-whitesmoke">
        <Header />
        <main className="grid max-w-5xl grid-cols-12 bg-whitesmoke gap-x-4 mx-auto pt-[6.5rem] pb-5 px-5 md:px-8 lg:px-0">
          <LeftSide />
          <Suspense fallback={<HomeLoadingSkeleton />}>
            <TimelineContainer token={token} initialPosts={response?.data} />
          </Suspense>
          <RightSide />
        </main>
      </div>
    </div>
  )
}

