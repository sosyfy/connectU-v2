'use client';

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
{/* eslint-disable @next/next/no-img-element */ }

const MenuContainer = ()=> {
  const { data }: any = useSession();
  let [user, setUser] = useState<User | any>();
  useEffect(() => {
      if (data?.user.user !== undefined) {
          setUser(data?.user.user);
      }
  }, [data]);


  return (
    <div className="relative text-[1rem] px-6 text-dimgray font-roboto rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)]">
      <div className="grid gap-5 py-8">
        <Link href={"/"} className="flex items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../play.svg"
          />
          <div className="">Home</div>
        </Link>
        <Link href={"/general-forum"} className="flex items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../play.svg"
          />
          <div className="">General Forum</div>
        </Link>
        <Link href={"/resources"} className="flex items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../chart.svg"
          />
          <div className="">Resources</div>
        </Link>
        <Link href={"/jobs"} className="flex items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../game.svg"
          />
          <div className="">Jobs</div>
        </Link>
        <Link href={"/colleagues"} className="flex items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../add-user.svg"
          />
          <div className="">
            Colleagues
          </div>
        </Link>
        
        <Link href={`/user/${user?._id}`} className="flex items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../setting.svg"
          />
          <div className="">Profile</div>
        </Link>
      </div>
    </div>
  );
};

export default MenuContainer;
