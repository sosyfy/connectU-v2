import RightSide from '@/components/core/right-side'
import TimelineContainer from '@/components/core/timeline-container'
import Header from '@/components/core/header'
import LeftSide from '@/components/core/left-side'



export default async function Home() {


  return (
      <div className="relative w-full bg-whitesmoke">
        <Header />
        <main className="grid max-w-7xl grid-cols-12 gap-x-4 mx-auto pt-[6.5rem] pb-5 px-5 md:px-8 lg:px-0">
          <LeftSide />
          <TimelineContainer />
          <RightSide />
        </main>
      </div>
  )
}
