"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import CommentCard from '@/components/core/comment-card';
import ForumPost from '@/components/core/forumn-post'
import useAxios from '@/lib/hooks/useAxios';
import useClientToken from '@/lib/hooks/useClientToken';
import Link from 'next/link';
import { useEffect, useState } from 'react'
interface Props {
    forumId: string
}

function ForumView({ forumId }: Props) {
    const [data, setData] = useState<ForumPost | any>()
    const [comments, setComments] = useState<CommentType[]>()
    const [comment, setComment] = useState<any>('')
    const [loading, setLoading] = useState(true)

    let token = useClientToken()
    const request = useAxios(token)


    useEffect(() => {
        if (token !== undefined) {
            request({
                method: "get",
                path: `/forum/single/${forumId}`
            }).then((response) => {
                let forum = response.data
                request({
                    method: "get",
                    path: `/comment/${forumId}`
                }).then((response) => {
                    setComments(response.data)
                    forum.comments = response.data
                    setData(forum)
                    setLoading(false)
                }).catch((error) => {
                    console.log(error);
                })

            }).catch((error) => {
                console.log(error);
            })



        }
    }, [token])


    const handleSubmit = (e: any) => {
        e.preventDefault();

        request({
            method: "post",
            path: `/comment/forum/${forumId}`,
            pathData : JSON.stringify({ commentText: comment })
        }).then((response) => {
            setComments(response.data)
            setData({ ...data , comments: response.data})
            setComment('');      
        }).catch((error) => {
            setComment('');
            console.log(error);
        })
    }
    return (
        <div className="relative lg:col-span-8 md:col-span-8 col-span-12 w-full text-[1.25rem] text-dimgray font-roboto">
            <Link href={"/general-forum"}
                className={"flex items-center whitespace-nowrap rounded bg-deepskyblue/10 w-fit px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none"}
            >back</Link>
            {/* header */}
            <div className="h-[8.75rem] shrink-0 flex flex-col items-center justify-center gap-[0.5rem] text-left text-[1.13rem] text-darkseagreen font-poppins">
                <h2 className="relative font-semibold">General Discussion</h2>
                <b className="relative text-center text-[1.5rem] inline-block text-dimgray">
                    Lets Connect
                </b>
            </div>
            {!loading &&
                <>
                    <ForumPost postData={data} trimPost={true} />

                    <form onSubmit={e => handleSubmit(e)}>
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <input
                                type="search"
                                id="default-search"
                                value={comment}
                                onChange={(e: any) => setComment(e.target.value)}
                                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Post a comment"
                                required />
                            <button
                                type="submit"
                                className="text-white absolute right-2.5 bottom-2.5 bg-deepskyblue hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                                post
                            </button>
                        </div>
                    </form>

                    <div className='grid gap-5 mt-5'>
                        { comments?.map(comment => (
                            <CommentCard commentData={comment} key={comment._id} />
                        ))}
                    </div>
                </>
            }
        </div>
    )
}

export default ForumView