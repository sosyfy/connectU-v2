"use client";
import ForumPost from "@/components/core/forumn-post";
import useAxios from "@/lib/hooks/useAxios";
import useClientToken from "@/lib/hooks/useClientToken";
import Link from "next/link";
import { useEffect, useState, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function General() {
    const [filterOpen, setFilterOpen] = useState(false);
    const [data, setData] = useState<ForumPost[]>();
    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string | any>();

    let token = useClientToken();
    const request = useAxios(token);

    useEffect(() => {
        if (token !== undefined) {
            request({
                method: "get",
                path: `/forum/general`,
            })
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [token]);

    const handleSort = (sortBy: string) => {
        setFilterOpen(false);

        request({
            method: "get",
            path: `/forum/filter/general/${sortBy}`,
        })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSubmit = (e: any, close: () => void) => {
        e.preventDefault();

        request({
            method: "post",
            path: `/forum`,
            pathData: JSON.stringify({ title, description, category: "general" })
        })
            .then((response) => {
                setData(response.data);
                setDescription('')
                setTitle('')
                close();
            })
            .catch((error) => {
                console.log(error);
            });


    };

    return (
        <div className="relative lg:col-span-8 md:col-span-8 col-span-12 w-full text-[1.25rem] text-dimgray font-roboto">
            {/* header */}
            <div className="h-[8.75rem] shrink-0 flex flex-col items-center justify-center gap-[0.5rem] text-left text-[1.13rem] text-darkseagreen font-poppins">
                <h2 className="relative font-semibold">General Discussion</h2>
                <b className="relative text-[1.5rem] inline-block text-dimgray">
                    Lets Connect
                </b>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <Popover className="relative">
                        {({ open, close }) => (
                            <>
                                <Popover.Button
                                    className={`
                                      ${open ? "" : "text-opacity-90"}
                                    group inline-flex items-center rounded-md bg-deepskyblue px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                >
                                    <span>Add New</span>
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
                                    <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 rounded-lg shadow-lg bg-gainsboro-200 sm:px-0 lg:max-w-3xl">
                                        <div
                                            className="px-5 py-6 bg-gainsboro-200"

                                        >
                                            <div className="flex flex-col items-start justify-center gap-3 mb-6">
                                                <label className="relative leading-[125%] font-roboto font-semibold">
                                                    Title <strong className="font-bold text-red">*</strong>
                                                </label>
                                                <input
                                                    type={"text"}
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    required
                                                    placeholder="Title ... "
                                                    className="rounded-3xs bg-whitesmoke font-roboto font-medium box-border w-full flex flex-row py-[1.13rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                                                />
                                            </div>
                                            <p className="relative leading-[125%] font-roboto font-semibold pb-2 mb-3">
                                                Content <strong className="font-bold text-red">*</strong>
                                            </p>
                                            <div className="overflow-hidden">
                                                <ReactQuill
                                                    theme="snow"
                                                    modules={{
                                                        toolbar: [
                                                            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                                                            ['blockquote', 'code-block'],

                                                            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
                                                            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent


                                                            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

                                                            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                                                            [{ 'font': [] }],
                                                            [{ 'align': [] }],

                                                            ['clean']                                         // remove formatting button
                                                        ],
                                                    }}
                                                    style={{ width: "inherit", fontWeight: 500 }}
                                                    className=" text-dimgray bg-whitesmoke shadow-lg text-[1.4rem] rounded min-h-[5rem]"
                                                    value={description}
                                                    onChange={(value) => setDescription(value)}
                                                />
                                            </div>

                                            <button
                                                type="button"
                                                className="flex items-center whitespace-nowrap rounded-lg mt-5 bg-deepskyblue px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none"
                                                onClick={(e) => handleSubmit(e, close)}
                                            >
                                                create post
                                            </button>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                </div>
                {/* filter */}
                <div className="flex justify-end mb-5 filter">
                    <div className="flex items-center gap-4">
                        <p className="font-medium text-[1rem]">Filter By</p>
                        <div className="relative">
                            <button
                                className="flex items-center whitespace-nowrap rounded bg-deepskyblue/10 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none"
                                type="button"
                                onClick={() => setFilterOpen(!filterOpen)}
                            >
                                Select Filter
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
                            </button>
                            <ul
                                className={`${filterOpen ? "block" : "hidden"
                                    } absolute z-[1000] mt-4 float-left m-0 w-full list-none overflow-hidden rounded-lg border-none bg-deepskyblue bg-clip-padding text-left text-base shadow-xl`}
                            >
                                <li>
                                    <button
                                        onClick={() => handleSort("latest")}
                                        className="block w-full px-6 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                                    >
                                        latest
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleSort("most-liked")}
                                        className="block w-full px-6 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                                    >
                                        most liked
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleSort("trending")}
                                        className="block w-full px-6 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                                    >
                                        trending
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {data?.map((post) => (
                <Link href={"/general-forum/" + post._id} key={post._id}>
                    <ForumPost postData={post} />
                </Link>
            ))}
        </div>
    );
}

export default General;
