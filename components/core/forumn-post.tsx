"use client"
import React from 'react'
import { format } from "timeago.js";
import parse from 'html-react-parser';

interface ForumPostProps {
    postData: ForumPost,
    trimPost?: boolean
}

function ForumPost({ postData, trimPost }: ForumPostProps) {

    return (
        <div className="rounded-lg bg-white w-full overflow-hidden flex flex-col p-[1.25rem] mb-8 box-border items-start justify-start gap-[1.25rem]">
            <h1 className="relative text-[1.1rem] font-medium text-dimgray">
                {postData?.title}
            </h1>
            <div className="self-stretch border-y py-3 border-dimgray/10 flex flex-row items-start justify-start gap-[0.63rem] text-[1.25rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="relative w-[3.5rem] h-[3.5rem] shrink-0 object-cover rounded-full"
                    alt=""
                    src={postData?.userInfo.photo}
                />
                <div className="flex-1 h-[3.2rem] flex flex-col items-start justify-center">
                    <h2 className="relative font-medium text-[0.95rem]">{postData?.userInfo.firstName}  {postData?.userInfo.lastName}</h2>
                    <p className="relative font-medium hidden text-[0.78rem] text-base-mid-gray">
                        {postData?.userInfo.email}
                    </p>
                    <div className="flex md:hidden mt-2 flex-row items-center justify-start text-[0.88rem] text-base-mid-gray">
                        <p className="relative">{format(postData.createdAt)}</p>
                    </div>

                </div>
                <div className="md:flex hidden flex-row items-center justify-start text-[0.88rem] text-base-mid-gray">
                    <p className="relative">{format(postData.createdAt)}</p>
                </div>
            </div>
            <div className="relative self-stretch font-normal text-[1rem] text-base-mid-gray">
                <p className="m-0">
                    {!trimPost ? parse(postData.description.slice(0, 100) + "...") : parse(postData.description)}
                </p>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem] text-base-dark-gray">


                <svg className="relative w-[1.5rem] h-[1.5rem] shrink-0  text-dimgray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>

                <div className="relative text-base text-dimgray">{postData?.comments.length} Comments</div>
            </div>
        </div>
    )
}

export default ForumPost