export default function ForumLoadingSkeleton() {
  return (
    <div className="relative w-full col-span-12 lg:col-span-8 md:col-span-8 animate-pulse">
      {/* header */}
      <div className="h-[4.75rem] shrink-0 flex flex-col items-center justify-center gap-[0.5rem]">
        <div className="rounded-lg h-[2rem] w-3/5 bg-slate-200" />
        <div className="rounded-lg h-[1.5rem] w-2/5 bg-slate-200" />
      </div>
      <div className="flex items-center justify-between mx-3 mt-4 mb-6">
        <div className="rounded-lg h-[2rem]  bg-slate-200 w-[7rem]" />
        {/* filter */}
        <div className="rounded-lg h-[2rem] w-[7rem] bg-slate-200" />
      </div>
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="rounded-lg bg-white w-full flex flex-col p-[1.25rem] mb-8 box-border items-start justify-start gap-[1.25rem]"
          >
            <div className="rounded-lg h-[2rem] w-full bg-slate-100" />

            <div className="self-stretch border-y py-3 border-dimgray/10 flex flex-row items-start justify-start gap-[0.63rem] text-[1.25rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="bg-slate-100 w-[3.5rem] h-[3.5rem] shrink-0 object-cover rounded-full" />

              <div className="h-[3.5rem] flex flex-col items-start justify-center">
                <div className="rounded-lg h-[1.3rem] w-[7rem] bg-slate-100" />
                <div className="rounded-lg h-[1.3rem] mt-2 w-[5rem] bg-slate-100" />

                <div className="flex mt-2 md:hidden">
                  <div className="rounded-lg h-[1.3rem] w-[7rem] bg-slate-100" />
                </div>
              </div>

              <div className="md:flex hidden flex-row items-center justify-start text-[0.88rem] text-base-mid-gray">
                <div className="rounded-lg h-[1.3rem] w-[7rem] bg-slate-100" />
              </div>

            </div>
            <div className="relative grid self-stretch gap-1">
              <div className="rounded-lg h-[1.2rem] w-full bg-slate-100" />
              <div className="rounded-lg h-[1.2rem] w-full bg-slate-100" />
              <div className="rounded-lg h-[1.2rem] w-full bg-slate-100" />
              <div className="rounded-lg h-[1.2rem] w-full bg-slate-100" />
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
              <div className="rounded-lg h-[1.2rem] w-[5rem] bg-slate-100" />
            </div>
          </div>
        ))}
    </div>
  );
}
