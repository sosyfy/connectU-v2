'use client';
/* eslint-disable react-hooks/exhaustive-deps */

import MenuContainer from "./menu-container";
import ProfileNameContainer from './profile-name-container';
import SuggestedContainer from "./suggested-users";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useUserStore from "@/lib/state/store";

const LeftSide = () => {

  const { data }: any = useSession();
  let [user, setUser] = useState<User>();
  const userState = useUserStore((state) => state.user)
  const updateUser = useUserStore((state) => state.update)

  useEffect(() => {
    if (userState === undefined) {
      if (data?.user.user !== undefined) {
        setUser(data?.user.user);
        updateUser(data?.user.user)
      }
    } else {
      setUser(userState)
    }
  }, [data]);

  return (
    <div className="lg:col-span-3 md:col-span-4 hidden md:block  relative text-[1rem] text-dimgray font-roboto">
      <div className="sticky md:-top-[2.5rem] lg:top-[6.5rem]">
        <div className="grid gap-8">
          <ProfileNameContainer user={user} />
          <MenuContainer user={user} />
          <div className="hidden md:block lg:hidden">
            <SuggestedContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;