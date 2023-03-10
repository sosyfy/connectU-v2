import type { NextPage } from "next";

type PostType = {
  profilePicture?: string;
  name?: string;
  jobTitle?: string;
  postText?: string;
  image?: string;
  liked?: boolean;
};

const Post: NextPage<PostType> = ({
  profilePicture,
  name,
  jobTitle,
  postText,
  image,
  liked,
}) => {


  return (
    <div
      className="relative text-left text-[1rem] text-dimgray font-roboto rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)]"
    >
      <div className="pt-3">
        <div className="flex items-center justify-between px-3 pb-5">
          <img
            className="w-[2.5rem] h-[2.5rem]"
            alt=""
            src={profilePicture}
          />
          <div
            className="basis-4/5"
          >
            <p className="font-medium font-roboto text-[1.2rem]">
              {name}
            </p>
            <p className="text-sm font-light">
              {jobTitle}
            </p>
          </div>
          <img
            className="w-[1.5rem] h-[1.5rem] "
            alt=""
            src="../more-square.svg"
          />
        </div>
        <div className="px-4 pb-4 font-light text-md text-dimgray font-roboto">
          {postText}
        </div>
        <div>
          <img
            className="w-full"
            alt=""
            src={image}
          />
        </div>
        <div
          className="text-center text-[0.69rem] text-dimgray flex items-center px-4 pt-4 pb-2"
        >
          <div className="flex items-center gap-2">
            { liked ? 
            (<img
              className="w-[1.5rem] h-[1.5rem] overflow-hidden"
              alt=""
              src="../heart1.svg"
            />):(
            <img
              className="hidden w-[1.5rem] h-[1.5rem] overflow-hidden"
              alt=""
              src="../heart.svg"
            />)
            }
            <p className="text-dimgray">
              99
            </p>
          </div>
          <div className="flex items-center gap-2 ml-8">
            <div>
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden"
                alt=""
                src="../chat.svg"
              />
            </div>
            <p className=" text-dimgray">
              99
            </p>
          </div>


          <div className="ml-auto">
            <img
              className="w-[1.5rem] h-[1.5rem] overflow-hidden"
              alt=""
              src="../bookmark.svg"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Post;
