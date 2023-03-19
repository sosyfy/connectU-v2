export default function HomeLoadingSkeleton() {
    return (
        <div className="relative col-span-12 lg:col-span-6 md:col-span-8 animate-pulse">

            <div className="w-full rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)]">
                <div className="px-6 pb-4">
                    <div className="relative flex w-full pt-4 mt-4 mb-2">
                        <div className="rounded-full h-[2rem]  bg-slate-100 w-[2rem]" />
                        <div className="rounded ml-3 h-[1.5rem] w-full basis-4/5 bg-slate-100" />
                    </div>

                </div>
                <div className="rounded h-[3.5rem] w-[85%] mx-auto mb-3 bg-slate-100 border-y-[1.4px]" />
                <div className="rounded-full h-[2px] w-full bg-slate-100" />
                <div className="flex items-center justify-between px-6 pb-3 my-3">
                    <div className="rounded-lg h-[2rem]  bg-slate-100 w-[5rem]" />
                    <div className="rounded-lg h-[2rem]  bg-slate-100 w-[5rem]" />
                </div>

            </div> 

            <div className="grid gap-3 pt-6">
                {Array(4)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            className="w-full rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)]"
                            key={index}>
                            <div className="pt-3">
                                <div className="flex items-center justify-between px-3 pb-5">
                                    <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-slate-100" />
                                    <div className="ml-2 basis-4/5">
                                        <div className="flex gap-2">
                                            <div className="rounded-lg h-[1.3rem] w-[7rem] bg-slate-100" />
                                            <div className="rounded-lg h-[1.3rem] w-[7rem] bg-slate-100" />
                                        </div>
                                        <div className="rounded-lg h-[0.8rem] mt-1 w-[5rem] bg-slate-100" />
                                    </div>
                                </div>
                                <div className="grid w-full gap-2 px-4 pb-4">
                                    <div className="rounded-lg h-[1.2rem] w-full bg-slate-100" />
                                    <div className="rounded-lg h-[1.2rem] w-full bg-slate-100" />
                                </div>
                                <div className="rounded-lg h-[10rem] w-full bg-slate-50 animate-pulse" />
                                <div className="flex items-center justify-between px-4 pt-4 pb-2">
                                    <div className="rounded-lg h-[2rem]  bg-slate-100 w-[5rem]" />
                                    <div className="rounded-lg h-[2rem]  bg-slate-100 w-[5rem]" />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};