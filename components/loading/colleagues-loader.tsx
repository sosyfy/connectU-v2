
export default function ColleaguesSkeleton() {
  return (
    <div className="relative w-full col-span-12 lg:col-span-8 md:col-span-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array(12).fill(0).map((loader, index) => (
          <div className='px-2 py-6 rounded-lg shadow-md animate-pulse bg-slate-50' key={index}>
              <div className="rounded-full h-[6rem] mx-auto w-[6rem] bg-slate-100"  />
              <div className="grid gap-1 mt-4 text-center">
                <div className="rounded-lg h-[1.5rem] w-full bg-slate-100" />
                <div className="rounded-lg h-[1.5rem]  w-full bg-slate-100" />
              </div>
              <div className="flex justify-around gap-1 py-4">
                <div className="rounded-lg h-[2rem] w-full bg-slate-100" />
                <div className="rounded-lg h-[2rem] w-full bg-slate-100" />
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}
