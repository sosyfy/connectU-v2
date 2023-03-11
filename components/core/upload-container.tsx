import type { NextPage } from "next";

const WriteNewPost: NextPage = () => {
  return (
    <div className="sticky top-[4.5rem] overflow-hidden text-[1rem] text-dimgray font-roboto rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)] w-full">
      <div className="relative w-full pt-4">
        <input
          placeholder="Write something"
          className="w-full pl-16 border-0 outline-none focus:border-0 focus:outline-none"
        />
        <img
          className="absolute top-3 left-[1.5rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
          alt=""
          src="../edit.svg"
        />
      </div>
      <img
        className="w-full h-[0.06rem]"
        alt=""
        src="../line.svg"
      />
      <div className="flex items-center justify-around py-4">
        <div className="flex items-center gap-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../image.svg"
          />
          <div className="">Photo</div>
        </div>
        <div className="flex items-center gap-4">
          <img
            className="w-[1.5rem] h-[1.5rem] overflow-hidden"
            alt=""
            src="../video.svg"
          />
          <div className="">Video</div>
        </div>

        <div className="flex items-center gap-4">
          <img
            className="w-[1.5rem] h-[1.5rem] overflow-hidden"
            alt=""
            src="../document.svg"
          />
          <div className="">Article</div>
        </div>
      </div>
    </div>
  );
};

export default WriteNewPost;
