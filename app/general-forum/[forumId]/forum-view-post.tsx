"use client"
import ForumPost from '@/components/core/forumn-post'
import { useState } from 'react'

function ForumView() {
    const [filterOpen , setFilterOpen] = useState(false);

    const handleSort =()=>{
        setFilterOpen(false)  
    }
    return (
        <div className="relative lg:col-span-8 md:col-span-8 col-span-12 w-full text-[1.25rem] text-dimgray font-roboto">
            {/* header */}
            <div className="h-[8.75rem] shrink-0 flex flex-col items-center justify-center gap-[0.5rem] text-left text-[1.13rem] text-darkseagreen font-poppins">
                <h2 className="relative font-semibold">General Discussion</h2>
                <b className="relative text-[1.5rem] inline-block text-dimgray">
                    Lets Connect
                </b>
            </div>
            <div className="flex justify-end mb-5 filter">
                <div className="flex items-center gap-4">
                    <p className='font-medium text-[1rem]'>Filter By</p>
                    <div className="relative">
                        <button
                            className="flex items-center whitespace-nowrap rounded bg-deepskyblue/10 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none"
                            type="button"
                            onClick={()=>setFilterOpen(true)}
                          >
                            Select Filter
                            <span className="w-2 ml-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5">
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        <ul
                            className={`${filterOpen ? "block" : "hidden"} absolute z-[1000] float-left m-0 w-full list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg`}   
                            >
                            <li>
                                <button 
                                onClick={()=>handleSort()}
                                className="block w-full px-6 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400">
                                    Action
                                </button>
                                
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <ForumPost />
        </div>
    )
}

export default ForumView