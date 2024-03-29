"use client"
import type { NextPage } from "next";
import { format, TDate } from "timeago.js";
import useAxios from './../../lib/hooks/useAxios';
import useClientToken from './../../lib/hooks/useClientToken';
import { useState } from 'react';
import Link from "next/link";

type PostType = {
    profilePicture?: string;
    name?: string;
    date: TDate
    postText?: string;
    image?: string | any;
    liked?: boolean;
    likes?: string[] | [];
    comments?: string[] | [];
    key: any,
    id: Post
};

const Post: NextPage<PostType> = ({
    profilePicture,
    name,
    date,
    postText,
    image,
    likes,
    comments,
    key,
    id
}) => {

    let token = useClientToken()
    const request = useAxios(token)
    const [isLiked, setIsLiked] = useState(likes?.some(like => like == id.user.toString()))
    const [likesCount, setLikesCount] = useState(likes?.length)


    const handleLike = (id: string) => {

        if (token !== undefined) {
            request({
                method: "put",
                path: `/post/toggle-like/${id}`
            }).then(res => {
                setLikesCount(res.data?.post?.likes.length)
                setIsLiked(!isLiked)
            })
        }
    }



    return (
        <div
            key={key}
            className="relative text-left text-[1rem] text-dimgray font-roboto rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)]"
        >
            <div className="pt-3">
                <div className="flex items-center justify-between px-3 pb-5">
                    <Link href={`/user/${id.user}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="w-[2.5rem] h-[2.5rem] rounded-full"
                            alt=""
                            src={profilePicture}
                        />
                    </Link>
                    <div
                        className="ml-2 basis-4/5"
                    > 
                        <Link href={`/user/${id.user}`} className="font-medium font-roboto text-[1.2rem]">
                            {name}
                        </Link>
                        <p className="text-sm font-light">
                            {format(date)}
                        </p>
                    </div>
                    <svg
                        width="24"
                        height="24"
                        className="w-[1.5rem] h-[1.5rem] hidden"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="2" fill="#666666" />
                        <circle cx="12" cy="4" r="2" fill="#666666" />
                        <circle cx="12" cy="20" r="2" fill="#666666" />
                    </svg>

                </div>
                <div className="px-4 pb-4 font-light text-md text-dimgray font-roboto">
                    {postText}
                </div>
                <div>
                    {image &&
                        <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="w-full max-h-[450px]"
                                alt="post image"
                                src={image}
                            />
                        </>
                    }
                </div>
                <div
                    className="text-center text-[0.69rem] text-dimgray flex items-center px-4 pt-4 pb-2"
                >
                    <div className="flex items-center gap-2">
                        {isLiked ?
                            (
                                <svg
                                    width="24"
                                    height="24"
                                    onClick={() => handleLike(id._id)}
                                    className="w-[1.5rem] h-[1.5rem] overflow-hidden cursor-pointer"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.2798 2.50055C8.9098 2.51971 9.5198 2.62971 10.1108 2.83071H10.1698C10.2098 2.84971 10.2398 2.87071 10.2598 2.88971C10.4808 2.96071 10.6898 3.04071 10.8898 3.15071L11.2698 3.32071C11.4198 3.40071 11.5998 3.54971 11.6998 3.61071C11.7998 3.66971 11.9098 3.73071 11.9998 3.79971C13.1108 2.95071 14.4598 2.49071 15.8498 2.50055C16.4808 2.50055 17.1108 2.58971 17.7098 2.79071C21.4008 3.99071 22.7308 8.04071 21.6198 11.5807C20.9898 13.3897 19.9598 15.0407 18.6108 16.3897C16.6798 18.2597 14.5608 19.9197 12.2798 21.3497L12.0298 21.5007L11.7698 21.3397C9.4808 19.9197 7.3498 18.2597 5.4008 16.3797C4.0608 15.0307 3.0298 13.3897 2.3898 11.5807C1.2598 8.04071 2.5898 3.99071 6.3208 2.76971C6.6108 2.66971 6.9098 2.59971 7.2098 2.56071H7.3298C7.6108 2.51971 7.8898 2.50055 8.1698 2.50055H8.2798ZM17.1898 5.66071C16.7798 5.51971 16.3298 5.74071 16.1798 6.16071C16.0398 6.58071 16.2598 7.04071 16.6798 7.18971C17.3208 7.42971 17.7498 8.06071 17.7498 8.75971V8.79071C17.7308 9.01971 17.7998 9.24071 17.9398 9.41071C18.0798 9.58071 18.2898 9.67971 18.5098 9.70071C18.9198 9.68971 19.2698 9.36071 19.2998 8.93971V8.82071C19.3298 7.41971 18.4808 6.15071 17.1898 5.66071Z" fill="#FF1930" />
                                </svg>
                            ) : (
                                <svg
                                    width="24"
                                    height="24"
                                    onClick={() => handleLike(id._id)}
                                    className="w-[1.5rem] h-[1.5rem] overflow-hidden cursor-pointer"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.48311 2.81529C8.2404 2.25003 10.1419 2.45344 11.733 3.35623L11.9964 3.51429L12.2645 3.35535C13.773 2.5013 15.5624 2.27309 17.2463 2.73623L17.512 2.81535C21.1847 3.9978 22.8291 8.00801 21.5937 11.8452C20.9743 13.6301 19.9584 15.2485 18.6174 16.5824C16.7927 18.3545 14.7812 19.9194 12.6218 21.2473L12.3926 21.3897C12.1598 21.5344 11.8656 21.5369 11.6304 21.3961L11.3849 21.2491C9.22254 19.9194 7.21101 18.3545 5.38004 16.5762C4.04534 15.2485 3.02947 13.6301 2.40482 11.8295C1.17386 8.00569 2.81152 3.99738 6.48311 2.81529ZM11.3746 4.85427C10.0706 3.96289 8.43331 3.72339 6.93153 4.20646C4.08746 5.12212 2.79808 8.27801 3.79207 11.3664C4.33877 12.9417 5.23505 14.3696 6.40582 15.5343C8.15375 17.2319 10.0805 18.7308 12.144 19.9998L12.0013 19.9098L12.4691 19.6156C14.1026 18.561 15.641 17.3642 17.0636 16.0421L17.5916 15.5405C18.7687 14.3696 19.665 12.9417 20.2064 11.382C21.2047 8.28096 19.9097 5.12284 17.0641 4.20669C15.4873 3.70082 13.766 3.99057 12.436 4.98625C12.1806 5.17742 11.8307 5.18111 11.5714 4.99538L11.3746 4.85427ZM15.8703 6.48374C17.1917 6.90551 18.1288 8.08859 18.2457 9.47853C18.2796 9.8807 17.9807 10.2341 17.5782 10.2679C17.1757 10.3017 16.822 10.0031 16.7881 9.60096C16.7206 8.79803 16.1814 8.11735 15.4252 7.87597C15.0404 7.75316 14.8281 7.34194 14.951 6.95749C15.0739 6.57304 15.4855 6.36093 15.8703 6.48374Z" fill="#200E32" />
                                </svg>
                            )
                        }
                        <p className="text-dimgray">
                            {likesCount}
                        </p>
                    </div>
                    <div className="items-center hidden gap-2 ml-8">
                        <div>
                            <svg
                                width="24"
                                height="24"
                                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.3588 2C19.7501 2 22 4.41665 22 7.89317V16.1068C22 19.5833 19.7501 22 16.3588 22H7.6412C4.24992 22 2 19.5833 2 16.1068V7.89317C2 4.4199 4.25586 2 7.6412 2H16.3588ZM16.3588 3.39535H7.6412C5.04923 3.39535 3.39535 5.16949 3.39535 7.89317V16.1068C3.39535 18.8341 5.04372 20.6047 7.6412 20.6047H16.3588C18.9563 20.6047 20.6047 18.8341 20.6047 16.1068V7.89317C20.6047 5.16587 18.9563 3.39535 16.3588 3.39535ZM7.69435 9.6295C8.04756 9.6295 8.33946 9.89197 8.38566 10.2325L8.39203 10.3272V16.7087C8.39203 17.094 8.07967 17.4064 7.69435 17.4064C7.34115 17.4064 7.04924 17.1439 7.00305 16.8034L6.99668 16.7087V10.3272C6.99668 9.94186 7.30904 9.6295 7.69435 9.6295ZM12.0354 6.57593C12.3886 6.57593 12.6805 6.8384 12.7267 7.17893L12.7331 7.2736V16.7087C12.7331 17.094 12.4208 17.4064 12.0354 17.4064C11.6822 17.4064 11.3903 17.1439 11.3441 16.8034L11.3378 16.7087V7.2736C11.3378 6.88829 11.6501 6.57593 12.0354 6.57593ZM16.3056 13.0017C16.6589 13.0017 16.9508 13.2642 16.997 13.6047L17.0033 13.6994V16.7087C17.0033 17.094 16.691 17.4064 16.3056 17.4064C15.9524 17.4064 15.6605 17.1439 15.6143 16.8034L15.608 16.7087V13.6994C15.608 13.3141 15.9203 13.0017 16.3056 13.0017Z" fill="#666666" />
                            </svg>

                        </div>
                        <p className=" text-dimgray">
                            {comments?.length}
                        </p>
                    </div>


                    <div className="hidden ml-auto">
                        <svg
                            width="24"
                            height="24"
                            className="w-[1.5rem] h-[1.5rem] overflow-hidden"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9857 2C18.0482 2 20 3.43503 20 6.25765V20.3309C20 20.7736 19.8285 21.1982 19.5232 21.5112C19.2179 21.8242 18.8038 22 18.3608 22C18.0965 21.9957 17.8368 21.9291 17.5863 21.7971L11.974 18.6635L6.38442 21.8037C5.7112 22.1624 4.89545 21.9969 4.38431 21.3975L4.28627 21.2719L4.19263 21.1174C4.07042 20.8782 4.00448 20.613 4 20.3309V6.43434C4 3.49929 5.90915 2 9.01434 2H14.9857ZM14.9857 3.44775H9.01434C6.61925 3.44775 5.41205 4.39579 5.41205 6.43434L5.41195 20.3189C5.41267 20.3631 5.42346 20.4065 5.41172 20.3897L5.44919 20.4519C5.51373 20.5421 5.63485 20.5715 5.71962 20.5265L11.3068 17.3883C11.7233 17.1576 12.225 17.1576 12.6435 17.3894L18.2463 20.5173C18.2887 20.5397 18.3355 20.5517 18.372 20.5523C18.4293 20.5523 18.4842 20.529 18.5247 20.4875C18.5652 20.446 18.5879 20.3897 18.5879 20.3309V6.25765C18.5879 4.35788 17.35 3.44775 14.9857 3.44775ZM15.4079 8.31663C15.7978 8.31663 16.1139 8.64072 16.1139 9.0405C16.1139 9.40697 15.8483 9.70984 15.5037 9.75777L15.4079 9.76438H8.54042C8.1505 9.76438 7.8344 9.44029 7.8344 9.0405C7.8344 8.67404 8.10001 8.37117 8.44462 8.32324L8.54042 8.31663H15.4079Z" fill="#200E32" />
                        </svg>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Post;
