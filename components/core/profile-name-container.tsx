'use client';

import Link from "next/link";

{/* eslint-disable @next/next/no-img-element */ }


interface Props {
  user: User | any
}

const ProfileNameContainer = ({ user}: Props)=> {


  return (
    <div className="text-[1rem] flex text-gray-100 font-roboto rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)] w-full h-[6rem]">
      <div className="flex items-center pl-3 gap-x-3">
        <div className="rounded-full w-[3rem] h-[3rem]">
          <img
            className="w-[3rem] h-[3rem] rounded-full object-cover"
            alt=""
            src={user?.userInfo.photo}
          />
        </div>
        <div className="grid">
          <Link href={"/user/" + user?._id} className="font-medium cursor-pointer">
            {user?.userInfo.firstName + " " + user?.userInfo.lastName}
          </Link>
          <p className="text-[0.73rem] mt-2 font-light">
            {user?.jobTitle}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProfileNameContainer;
