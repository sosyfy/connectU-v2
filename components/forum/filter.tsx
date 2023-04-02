"use client";

import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import ReactQuill from "react-quill";

type Props = {
    buttonText: string;
    title: string;
    description: string;
    filterOpen: boolean;
    loading: boolean;
    sortLoading: boolean;

    setTitle: any;
    setDescription: any;
    handleSubmit: any;
    setFilterOpen: any;
    handleSort: any;
};

export default function Filter({
    buttonText,
    title,
    description,
    filterOpen,
    loading,
    setTitle,
    setDescription,
    handleSubmit,
    setFilterOpen,
    handleSort,
    sortLoading
}: Props) {


    const [filters, setFilters] = useState({
        mostLikes: false,
        mostViews: false,
        newPosts: false,
        recommended: true
    });

    const [filterName, setFilterName] = useState("recommended")

    const handleInputChange = (event: any, key: string) => {
        setFilters({
            ...filters,
            mostLikes: key !== "mostLikes" ? false : event.target.checked,
            mostViews: key !== "mostViews" ? false : event.target.checked,
            newPosts: key !== "newPosts" ? false : event.target.checked,
            recommended: key !== "recommended" ? false : event.target.checked,
        });
    };

    const handleCreateQueryString = (event: any , close: () => void ) => {
        event.preventDefault();
        let queryString = '';
         
        if (filters.mostLikes){
            queryString = "sortBy=mostLiked"
            setFilterName('Most Liked')
            handleSort(queryString , close );
        } else if (filters.mostViews){
            queryString = "sortBy=mostViewed"
            setFilterName('Most Viewed')
            handleSort(queryString , close );
        } else if (filters.newPosts){
            queryString = "sortBy=newPosts";
            setFilterName('New Posts');
            handleSort(queryString , close );
        } else {
            queryString = ""
            setFilterName('Recommended')
            handleSort(queryString , close );
        } 
    
    };


    return (
        <div className="flex items-center justify-between mb-6">
            <div>
                <Popover className="relative">
                    {({ open, close  }) => (
                        <>
                            <Popover.Button
                                className={`
                          ${ open ? "" : "text-opacity-90"}
                        group inline-flex items-center rounded-md bg-deepskyblue px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <span>{buttonText}</span>
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute z-10 w-screen max-w-sm px-2 mt-3 rounded-lg shadow-lg md:px-4 bg-gainsboro-200 sm:px-0 lg:max-w-3xl">
                                    <div className="px-2 py-6 bg-gainsboro-200">
                                        <div className="flex flex-col items-start justify-center gap-3 mb-4">
                                            <label className="relative leading-[125%] text-[0.9rem] font-roboto font-semibold">
                                                Title <strong className="font-bold text-red">*</strong>
                                            </label>
                                            <input
                                                type={"text"}
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                required
                                                placeholder="Title ... "
                                                className="rounded-3xs text-[0.9rem] bg-whitesmoke font-roboto font-medium box-border w-full flex flex-row md:py-[0.8rem] py-[0.6rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                                            />
                                        </div>
                                        <p className="relative leading-[125%] font-roboto font-semibold mb-3 text-[0.9rem]">
                                            Content{" "}
                                            <strong className="font-bold text-red text-[0.9rem]">
                                                *
                                            </strong>
                                        </p>
                                        <div className="overflow-hidden">
                                            <ReactQuill
                                                theme="snow"
                                                modules={{
                                                    toolbar: [
                                                        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
                                                        
                                                        ["bold", "italic", "underline", "strike"], // toggled buttons
                                                        ["blockquote", "code-block"],

                                                        [{ header: 1 }, { header: 2 }], // custom button values
                                                        [{ list: "ordered" }, { list: "bullet" }],
                                                        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

                                                        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                                                    ],
                                                }}
                                                style={{ width: "inherit", fontWeight: 500 }}
                                                className=" text-dimgray bg-whitesmoke shadow-lg text-[1.4rem] rounded min-h-[5rem]"
                                                value={description}
                                                onChange={(value) => setDescription(value)}
                                            />
                                        </div>

                                        <button
                                            disabled={loading}
                                            type="button"
                                            className="flex items-center whitespace-nowrap rounded-lg mt-5 bg-deepskyblue px-6 pt-2.5 pb-2 text-xs font-semibold uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none"
                                            onClick={(e) => handleSubmit(e, close)}
                                        >
                                            {loading ? (
                                                <svg
                                                    aria-hidden="true"
                                                    role="status"
                                                    className="inline w-5 h-5 mr-5 text-gray-200 animate-spin"
                                                    viewBox="0 0 100 101"
                                                    fill="#fff"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                        fill="#1C64F2"
                                                    />
                                                </svg>
                                            ): (
                                                <span> create post</span>
                                            )}
                                           
                                        </button>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
            {/* filter */}
            <Popover className="flex justify-end filter">
            {({ open, close  }) => (
                <div className="flex items-center gap-4 ">
                    <p className="font-medium text-[1rem] md:block hidden">Filter By</p>
                    <div className="relative">
                        <Popover.Button
                            className="flex items-center whitespace-nowrap rounded bg-deepskyblue/10 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none"
                            type="button"
                            onClick={() => setFilterOpen(!filterOpen)}
                        >
                            {filterName}
                            <span className="w-2 ml-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </Popover.Button>

                        <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                        <Popover.Panel
                            className={`block absolute z-[1000] mt-4 right-0 m-0 w-[14rem] list-none overflow-hidden px-3 rounded-lg border bg-gray-300 bg-clip-padding text-left text-base drop-shadow`}
                        >
                            <div className="flex flex-wrap gap-4 mt-3">

                                <div className="flex items-start gap-1">
                                    <input
                                        id="mostLikes"
                                        type="checkbox"
                                        name="filters"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                        checked={filters.mostLikes}
                                        onChange={(e) => handleInputChange(e,"mostLikes")}
                                    />
                                    <label htmlFor="mostLikes">Filter By Most Likes</label>
                                </div>
                                <div className="flex items-start gap-1">
                                    <input
                                        id="mostViews"
                                        type="checkbox"
                                        name="filters"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                        checked={filters.mostViews}
                                        onChange={(e) => handleInputChange(e,"mostViews")}

                                    />
                                    <label htmlFor="mostViews">Filter By Most Views</label>
                                </div>
                                <div className="flex items-start gap-1">
                                    <input
                                        id="newPosts"
                                        type="checkbox"
                                        name="filters"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                        checked={filters.newPosts}
                                        onChange={(e) => handleInputChange(e,"newPosts")}
                                    />
                                    <label htmlFor="newPosts">Filter By New Posts</label>
                                </div>
                                <div className="flex items-start gap-1">
                                    <input
                                        id="newPosts"
                                        type="checkbox"
                                        name="filters"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                                        checked={filters.recommended}
                                        onChange={(e) => handleInputChange(e,"recommended")}

                                    />
                                    <label htmlFor="newPosts">Filter By Recommended Posts</label>
                                </div>

                                <button
                                    disabled={sortLoading}
                                    onClick={(e) => handleCreateQueryString(e, close )}
                                    type="button"
                                    className="flex items-center text-center justify-center whitespace-nowrap rounded-lg mb-4 w-full bg-deepskyblue px-6 pt-2.5 pb-2 text-xs font-semibold uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none"
                                >
                                    { sortLoading ? (
                                        <svg
                                            aria-hidden="true"
                                            role="status"
                                            className="inline w-5 h-5 mr-5 text-gray-200 animate-spin"
                                            viewBox="0 0 100 101"
                                            fill="#fff"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="#1C64F2"
                                            />
                                        </svg>
                                    ): (
                                      <span>Apply </span> 
                                    )}

                                   
                                </button>
                            </div>
                        </Popover.Panel>
                        </Transition>
                    </div>
                </div>
            )}
            </Popover>
        </div>
    );
}
