"use client"
import useAxios from "@/lib/hooks/useAxios";
import useClientToken from "@/lib/hooks/useClientToken";
import useUserStore from "@/lib/state/store";
import { useState } from "react";
/* eslint-disable @next/next/no-img-element */
import { format } from "timeago.js";

interface UserCardProp {
  commentData: CommentType
};

const CommentCard = ({ commentData }: UserCardProp) => {

  let token = useClientToken()
  const request = useAxios(token)
  const user = useUserStore((state) => state.user)

  const [isLiked, setIsLiked] = useState(commentData?.likes.some(like => like == user?._id))
  const [likesCount, setLikesCount] = useState(commentData?.likes.length)


  const handleLike = (id: string) => {

    if (token !== undefined) {
      request({
        method: "put",
        path: `/comment/toggle-like/${id}`
      }).then(res => {
        setIsLiked(!isLiked) 
        setLikesCount(res.data?.comment?.likes.length)
      })
    }
  }


  return (
    <div className="self-stretch rounded-3xs bg-base-white overflow-hidden flex flex-col bg-slate-50 p-[1.25rem] items-start justify-start gap-[1.25rem] text-left text-[1rem] text-dimgray font-roboto">
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.63rem] text-[1.25rem]">
        <img
          className="relative w-[3.5rem] h-[3.5rem] shrink-0 object-cover rounded-full"
          alt=""
          src={commentData.userInfo.photo}
        />
        <div className="flex-1 h-[3.5rem] flex flex-col items-start justify-start">
          <h2 className="relative font-semibold text-dimgray text-[1rem]">{commentData.userInfo.firstName} {commentData.userInfo.lastName}</h2>
          <p className="relative text-[0.88rem] text-base-mid-gray hidden">
            {commentData.userInfo.email}
          </p>
        </div>
        <div className="flex flex-row items-center justify-start text-[0.88rem] text-base-mid-gray">
          <p className="relative text-[0.8rem]"> {format(commentData.createdAt)} </p>
        </div>
      </div>
      <h3 className="relative self-stretch font-normal text-base-mid-gray">
        {commentData.commentText}
      </h3>
      <div className="flex flex-row items-start justify-start gap-[1.25rem] text-base-dark-gray">
        <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
          {!isLiked ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer" onClick={()=>handleLike(commentData._id)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>

          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer text-red" onClick={()=>handleLike(commentData._id)}>
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          )

          }

          <p className="relative">{likesCount}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
