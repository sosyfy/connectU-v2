"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import useAxios from '@/lib/hooks/useAxios';
import Link from 'next/link';
import { useState } from 'react'
import { format} from "timeago.js";
import parse from 'html-react-parser';

interface Props {
    forumId: string | null,
    post: ForumPost,
    token: string,
    postComments: CommentType[]
}


function ForumView({ forumId, post, token, postComments }: Props) {
    const [data, setData] = useState<ForumPost | any>(post)
    const [comments, setComments] = useState<CommentType[]>(postComments)
    const [comment, setComment] = useState<any>('')


    const request = useAxios(token)


    const handleSubmit = (e: any) => {
        e.preventDefault();

        request({
            method: "post",
            path: `/comment/forum/${forumId}`,
            pathData: JSON.stringify({ commentText: comment })
        }).then((response) => {
            setComments(response.data)
            setData({ ...data, comments: response.data })
            setComment('');
        }).catch((error) => {
            setComment('');
            console.log(error);
        })
    }
    return (
        <div className="relative lg:col-span-8 md:col-span-8 col-span-12 w-full text-[1.25rem] text-dimgray font-roboto">
            <Link href={"/jobs"}
                className={"flex items-center whitespace-nowrap rounded bg-deepskyblue/10 w-fit px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none"}
            >back</Link>
            {/* header */}
            <div className="h-[8.75rem] shrink-0 flex flex-col items-center justify-center gap-[0.5rem] text-left text-[1.13rem] text-darkseagreen font-poppins">
                <h2 className="relative font-semibold">Jobs</h2>
                <b className="relative text-center text-[1.5rem] inline-block text-dimgray">
                    Job Listing
                </b>
            </div>

            <ForumPost postData={data} trimPost={true} />

        </div>
    )
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
                    <div className="flex md:hidden mt-1 flex-row items-center justify-start text-[0.88rem] text-base-mid-gray">
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


export default ForumView