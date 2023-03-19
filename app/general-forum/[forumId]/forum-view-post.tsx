"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import CommentCard from '@/components/core/comment-card';
import ForumPost from '@/components/core/forumn-post'
import BackLink from '@/components/forum/back-link';
import Header from '@/components/forum/header';
import useAxios from '@/lib/hooks/useAxios';

import { useState } from 'react'
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
            
            <BackLink title='Back to General' href='/general-forum' />
          
            <Header title='General Discussion' subTitle='Engage and Lets Connect' />
           
            <ForumPost postData={data} trimPost={true} />

            <form onSubmit={e => handleSubmit(e)}>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only">comment</label>
                <div className="relative">
                    <input
                        type="search"
                        id="default-search"
                        value={comment}
                        onChange={(e: any) => setComment(e.target.value)}
                        className="block w-full p-4 pl-3 pr-20 text-base font-medium border border-gray-300 rounded-md text-dimgray focus:ring-deepskyblue focus:border-deepskyblue focus:outline-none"
                        placeholder="Post a comment"
                        required />
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2 bg-deepskyblue hover:bg-blue-400 focus:outline-none focus:ring-blue-300 font-medium rounded text-[0.95rem] px-5 py-2">
                        post
                    </button>
                </div>
            </form>

            <div className='grid gap-5 mt-5'>
                {comments?.map(comment => (
                    <CommentCard commentData={comment} key={comment._id} />
                ))}
            </div>

        </div>
    )
}

export default ForumView