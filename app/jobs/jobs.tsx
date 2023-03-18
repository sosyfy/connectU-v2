"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import useAxios from "@/lib/hooks/useAxios";
import Link from "next/link";
import { useState, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { format } from "timeago.js";
import parse from 'html-react-parser';

type GeneralProps ={
    posts: ForumPost[],
    token: string | any 
}

function General({ posts , token }: GeneralProps) {
    const [filterOpen, setFilterOpen] = useState(false);
    const [data, setData] = useState<ForumPost[]>(posts);
    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string | any>();

    const request = useAxios(token);

   
    const handleSort = (sortBy: string) => {
        setFilterOpen(false);

        request({
            method: "get",
            path: `/forum/filter/job/${sortBy}`,
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
            pathData: JSON.stringify({ title, description, category: "job" })
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
                <h2 className="relative font-semibold">Jobs</h2>
                <b className="relative text-center text-[1.5rem] inline-block text-dimgray">
                    Career building and sharing opportunities
                </b>
            </div>
            <div className="flex items-center justify-between mb-6">
                <div>
                <Popover className="relative">
                        {({ open, close }) => (
                            <>
                                <Popover.Button
                                    className={`
                                      ${open ? "" : "text-opacity-90"}
                                    group inline-flex items-center rounded-md bg-deepskyblue px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                >
                                    <span>Add New Resource</span>
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
                                        <div
                                            className="px-2 py-6 bg-gainsboro-200"

                                        >
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
                                                    className="rounded-3xs text-[0.9rem] bg-whitesmoke font-roboto font-medium box-border w-full flex flex-row md:py-[1.13rem] py-2 px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                                                />
                                            </div>
                                            <p className="relative leading-[125%] font-roboto font-semibold mb-3 text-[0.9rem]">
                                                Content <strong className="font-bold text-red text-[0.9rem]">*</strong>
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
                                                className="flex items-center whitespace-nowrap rounded-lg mt-5 bg-deepskyblue px-6 pt-2.5 pb-2 text-xs font-semibold uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none"
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
                <div className="flex justify-end filter">
                    <div className="flex items-center gap-4">
                        <p className="font-medium text-[1rem] md:block hidden">Filter By</p>
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
                <Link href={"/jobs/" + post._id} key={post._id}>
                    <ForumPost postData={post} />
                </Link>
            ))}
        </div>
    );
}



interface ForumPostProps {
    postData: ForumPost,
    trimPost?: boolean
}

function ForumPost({ postData, trimPost }: ForumPostProps) {

    return (
        <div className="rounded-lg bg-white w-full overflow-hidden flex flex-col p-[1.25rem] mb-8 box-border items-start justify-start gap-[1.25rem]">
            <h1 className="relative text-[1.2rem] font-semibold text-dimgray">
                {postData?.title}
            </h1>
            <div className="self-stretch border-y py-3 border-dimgray/10 flex flex-row items-start justify-start gap-[0.63rem] text-[1.25rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="relative w-[3.5rem] h-[3.5rem] shrink-0 object-cover rounded-full"
                    alt=""
                    src={postData?.userInfo.photo}
                />
                <div className="flex-1 h-[3.5rem] flex flex-col items-start justify-center">
                    <div className="relative font-medium">{postData?.userInfo.firstName}  {postData?.userInfo.lastName}</div>
                    <div className="relative font-medium text-[0.88rem] text-base-mid-gray">
                        {postData?.userInfo.email}
                    </div>
                    <div className="md:hidden mt-2 flex flex-row items-center justify-start text-[0.88rem] text-base-mid-gray">
                    <div className="relative">{format(postData.createdAt)}</div>
                </div>
                </div>
                <div className="md:flex hidden flex-row items-center justify-start text-[0.88rem] text-base-mid-gray">
                    <div className="relative">{format(postData.createdAt)}</div>
                </div>
            </div>
            <div className="relative self-stretch font-normal text-[1rem] text-base-mid-gray">
                <p className="m-0">
                    {!trimPost ? parse(postData.description.slice(0, 100) + "...") : parse(postData.description)}
                </p>
            </div>
        </div>
    )
}



export default General;
