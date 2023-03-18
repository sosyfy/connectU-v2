"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import useAxios from '@/lib/hooks/useAxios';
import Link from 'next/link';
import { useState } from 'react'
import { format} from "timeago.js";
import parse from 'html-react-parser';
import JobPost from '@/components/forum/job-post';
import BackLink from '@/components/forum/back-link';
import Header from '@/components/forum/header';

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
            <BackLink title='Back to jobs' href='/jobs' />
            {/* header */}
            <Header title='Jobs' subTitle='  Job Listing' />
            <JobPost postData={data} trimPost={true} />

        </div>
    )
}






export default ForumView