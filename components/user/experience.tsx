"use client";

export default function Experience() {
    return (
        <section className='pb-2 bg-white rounded-lg shadow border-dimgray'>
            {/* top part  */}
            <div className="p-[1.2rem] pb-0">
                <div className="flex items-center justify-between">
                    <h2 className="flex-1 font-semibold text-textblack-100">Experience</h2>
                    <div className="flex items-center gap-2 icons">

                        <button className="grid p-2 rounded-full focus:outline-none hover:bg-zinc-200 place-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
            {/* things    */}
            <div className="grid p-[1.2rem] relative">
                <h1 className='text-[1.2rem] text-textblack-200/70 font-semibold tracking-loose'>Frontend Developer</h1>
                <h2 className='text-[1rem]  font-medium mt-1 text-textblack-200'>Company name</h2>
                <p className='text-[0.88rem] mt-1 font-normal tracking-looser'> <span>Jul 20</span> - <span>Jul 20</span>  <span>Jul 20</span> </p>
                <p className='text-[0.97rem] mt-1 font-normal tracking-looser'> Kenya </p>
                <p className='mt-3 text-dimgray text-[1.08rem] font-normal'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut animi, alias quisquam magni laboriosam reprehenderit corporis. Sint, est eos. </p>
                <button className="absolute grid p-2 rounded-full top-2 right-5 focus:outline-none hover:bg-zinc-200 place-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                </button>
            </div>

        </section>
    )
}