"use client"
import React, { useState } from 'react'
import { format } from "timeago.js";
import parse from 'html-react-parser';
import Link from 'next/link';
import useClientToken from '@/lib/hooks/useClientToken';
import useAxios from '@/lib/hooks/useAxios';
import useUserStore from '@/lib/state/store';
import {FaRegEye } from "react-icons/fa"
interface ForumPostProps {
    postData: ForumPost,
    trimPost?: boolean,
    key: string,
    postLink?: string
}

function ForumPost({ postData, trimPost, postLink, key }: ForumPostProps) {

    const loggedInUser = useUserStore(state => state.user)
    let token = useClientToken()
    const request = useAxios(token)
    const [isLiked, setIsLiked] = useState(postData.likes?.some(like => like == loggedInUser?._id.toString()))
    const [likesCount, setLikesCount] = useState(postData.likes?.length)


    const handleLike = (id: string) => {

        if (token !== undefined) {
            request({
                method: "put",
                path: `/forum/toggle-like/${id}`
            }).then(res => {
                setLikesCount(res.data?.likes.length)
                setIsLiked(!isLiked)
            })
        }
    }


    return (
        <div key={key} className="rounded-lg bg-white w-full overflow-hidden flex flex-col p-[1.25rem] mb-8 box-border items-start justify-start gap-[1.25rem]">
            {postLink ? (
                <Link href={postLink} className="relative text-[1.1rem] font-medium text-dimgray">
                    {postData?.title}
                </Link>) : (
                <h2 className="relative text-[1.1rem] font-medium text-dimgray">
                    {postData?.title}
                </h2>
            )}
            <div className="self-stretch border-y py-3 border-dimgray/10 flex flex-row items-start justify-start gap-[0.63rem] text-[1.25rem]">
                <Link href={`/user/${postData.creator}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="relative w-[3.5rem] h-[3.5rem] shrink-0 object-cover rounded-full"
                        alt=""
                        src={postData?.userInfo.photo}
                    />
                </Link>
                <div className="flex-1 h-[3.2rem] flex flex-col items-start justify-center">
                    <Link href={`/user/${postData.creator}`} className="relative font-medium text-[0.95rem]">{postData?.userInfo.firstName}  {postData?.userInfo.lastName}</Link>
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
                    <div className="m-0">
                        {!trimPost ? parse(postData.description.slice(0, 100) + "...") : parse(postData.description)}
                    </div>

            </div>
            <div className="flex items-center justify-between w-full">
                 <div className="flex items-center gap-12">
                
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem] text-base-dark-gray">
                    <svg className="relative w-[1.5rem] h-[1.5rem] shrink-0  text-dimgray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    <div className="relative text-base text-dimgray">{postData?.comments.length}</div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.5rem]  text-dimgray">
                    <div className="self-stretch flex  text-dimgray flex-row items-center justify-start gap-[0.5rem]">
                        {!isLiked ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.5rem] h-[1.5rem] cursor-pointer  text-dimgray" onClick={() => handleLike(postData._id)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>

                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[1.5rem]  h-[1.5rem] cursor-pointer text-red" onClick={() => handleLike(postData._id)}>
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                        )

                        }

                        <p className="relative text-base text-dimgray">{likesCount}</p>
                    </div>
                </div>
                </div>
                
                <div className="basis-1 ml-auto flex flex-row items-center justify-start gap-[0.5rem] text-base-dark-gray">
                    <FaRegEye className="relative w-[1rem] h-[1rem] shrink-0  text-dimgray" />
                    <div className="relative text-base text-dimgray">{postData?.views}</div>
                </div>
            </div>
        </div>
    )
}

export default ForumPost