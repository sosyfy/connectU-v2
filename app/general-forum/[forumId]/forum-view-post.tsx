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
    const [loading, setLoading] = useState<boolean>(false);

    const request = useAxios(token)

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        request({
            method: "post",
            path: `/comment/forum/${forumId}`,
            pathData: JSON.stringify({ commentText: comment })
        }).then((response) => {
            setComments(response.data)
            setData({ ...data, comments: response.data })
            setComment('');
            setLoading(false);

        }).catch((error) => {
            setComment('');
            console.log(error);
            setLoading(false);

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
                         {loading && <svg aria-hidden="true" role="status" className="inline w-5 h-5 mr-5 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                        </svg>} post
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