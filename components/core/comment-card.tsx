"use client"
/* eslint-disable @next/next/no-img-element */
import { format} from "timeago.js";

interface UserCardProp {
  commentData: CommentType
};

const CommentCard = ({ commentData }: UserCardProp) => {

  return (
    <div className="self-stretch rounded-3xs bg-base-white overflow-hidden flex flex-col bg-slate-50 p-[1.25rem] items-start justify-start gap-[1.25rem] text-left text-[1rem] text-black font-poppins">
      <div className="self-stretch flex flex-row items-start justify-start gap-[0.63rem] text-[1.25rem]">
        <img
          className="relative w-[3.5rem] h-[3.5rem] shrink-0 object-cover"
          alt=""
          src={commentData.userInfo.photo}
        />
        <div className="flex-1 h-[3.5rem] flex flex-col items-start justify-center">
          <div className="relative font-semibold">{commentData.userInfo.firstName} {commentData.userInfo.lastName}</div>
          <div className="relative text-[0.88rem] text-base-mid-gray">
            {commentData.userInfo.email}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start text-[1.13rem] text-base-mid-gray">
          <div className="relative"> {format(commentData.createdAt)} </div>
        </div>
      </div>
      <div className="relative self-stretch font-medium text-base-mid-gray">
        {commentData.commentText}
      </div>
      <div className="flex flex-row items-start justify-start gap-[1.25rem] text-base-dark-gray">
        <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
          <svg
            width="24"
            height="24"
            // onClick={() => handleLike(id._id)}
            className="w-[1.5rem] h-[1.5rem] overflow-hidden"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M8.2798 2.50055C8.9098 2.51971 9.5198 2.62971 10.1108 2.83071H10.1698C10.2098 2.84971 10.2398 2.87071 10.2598 2.88971C10.4808 2.96071 10.6898 3.04071 10.8898 3.15071L11.2698 3.32071C11.4198 3.40071 11.5998 3.54971 11.6998 3.61071C11.7998 3.66971 11.9098 3.73071 11.9998 3.79971C13.1108 2.95071 14.4598 2.49071 15.8498 2.50055C16.4808 2.50055 17.1108 2.58971 17.7098 2.79071C21.4008 3.99071 22.7308 8.04071 21.6198 11.5807C20.9898 13.3897 19.9598 15.0407 18.6108 16.3897C16.6798 18.2597 14.5608 19.9197 12.2798 21.3497L12.0298 21.5007L11.7698 21.3397C9.4808 19.9197 7.3498 18.2597 5.4008 16.3797C4.0608 15.0307 3.0298 13.3897 2.3898 11.5807C1.2598 8.04071 2.5898 3.99071 6.3208 2.76971C6.6108 2.66971 6.9098 2.59971 7.2098 2.56071H7.3298C7.6108 2.51971 7.8898 2.50055 8.1698 2.50055H8.2798ZM17.1898 5.66071C16.7798 5.51971 16.3298 5.74071 16.1798 6.16071C16.0398 6.58071 16.2598 7.04071 16.6798 7.18971C17.3208 7.42971 17.7498 8.06071 17.7498 8.75971V8.79071C17.7308 9.01971 17.7998 9.24071 17.9398 9.41071C18.0798 9.58071 18.2898 9.67971 18.5098 9.70071C18.9198 9.68971 19.2698 9.36071 19.2998 8.93971V8.82071C19.3298 7.41971 18.4808 6.15071 17.1898 5.66071Z" fill="#FF1930" />
          </svg>
          <div className="relative">{ commentData.likes.length }</div>
          <div className="relative">Likes</div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
