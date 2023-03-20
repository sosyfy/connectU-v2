"use client";
import { format } from "timeago.js";
import parse from 'html-react-parser';
import Link from "next/link";

interface ForumPostProps {
    postData: ForumPost,
    trimPost?: boolean
}

export default function JobPost({ postData, trimPost }: ForumPostProps) {

    return (
        <div className="rounded-lg bg-white w-full overflow-hidden flex flex-col p-[1.25rem] mb-8 box-border items-start justify-start gap-[1.25rem]">
            <h1 className="relative text-[1.2rem] font-semibold text-dimgray">
                {postData?.title}
            </h1>
            <div className="self-stretch border-y py-3 border-dimgray/10 flex flex-row items-start justify-start gap-[0.63rem] text-[1.25rem]">
                <Link href={`/user/${postData.creator}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="relative w-[3.5rem] h-[3.5rem] shrink-0 object-cover rounded-full"
                        alt=""
                        src={postData?.userInfo.photo}
                    />
                </Link>
                <div className="flex-1 h-[3.5rem] flex flex-col items-start justify-center">
                    <Link href={`/user/${postData.creator}`} className="relative font-medium">{postData?.userInfo.firstName}  {postData?.userInfo.lastName}</Link>
                    <div className="relative font-medium hidden text-[0.88rem] text-base-mid-gray">
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