"use client"
/* eslint-disable react-hooks/exhaustive-deps */
{/* eslint-disable @next/next/no-img-element */ }

import useUserStore from "@/lib/state/store";
import { useSession } from "next-auth/react";
import Link from "next/link";


import { useEffect, useState } from 'react';
import useAxios from './../../lib/hooks/useAxios';
import useClientToken from './../../lib/hooks/useClientToken';



const SuggestedContainer = () => {
  const { data }: any = useSession();
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const userState = useUserStore((state) => state.user)
  const updateUser = useUserStore((state) => state.update)
  const [user, setUser] = useState<User | any >({});

  let token = useClientToken()
  const request = useAxios(token)

  useEffect(() => {
    if (token !== undefined) {
      setLoading(true);
      request({
        method: "get",
        path: "/user/find/suggested-connections"
      }).then((response) => {
        setSuggestedUsers(response.data)
        setLoading(false);
      }).catch((error) => {
        console.log(error);
        setLoading(false);
      })
    }


  }, [token])

  useEffect(() => {
    if (userState === undefined) {
      if (data !== undefined) {
        setUser(data?.user?.user);
        updateUser(data?.user.user);
      }
    } else {
      setUser({...userState})
    }
  }, [data])

  const handleConnect = (id: string) => {

    if (token !== undefined) {
      request({
        method: "post",
        path: "/user/toggle-connection",
        pathData: JSON.stringify({ userId: user?._id, connectionId: id })
      }).then((response) => {
        setUser(response.data);
        updateUser(response.data)
        setSuggestedUsers(suggestedUsers);
      }).catch((error) => {
        console.log(error);
      })
    }
    // console.log(isConnected)
  }

  return (
    <div className="text-left overflow-hidden  text-[1rem] w-full text-dimgray font-roboto rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)]">
      <div className="px-5 py-6 font-medium">
        People you may know:
      </div>
      {loading ? (
        <div className="h-[7rem] w-full grid place-items-center">
          <svg aria-hidden="true" role="status" className="inline w-8 h-8 mr-3 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
          </svg>
        </div>
      ) : (
        <>
          <div className="grid gap-3 px-3 pb-2">
            {suggestedUsers && suggestedUsers?.map((con: User) => (
              <div
                key={con._id}
                className="flex justify-between items-center h-[2.5rem] pb-3">

                <img
                  className="h-[2.5rem] w-[2.5rem] rounded-full"
                  alt=""
                  src={con.userInfo.photo}
                />
                <div className="grid ml-3 basis-2/5 text-[0.8rem]">
                  <div className="font-medium">
                    {con.userInfo.firstName}
                  </div>
                  <div className="font-medium">
                    {con.userInfo.lastName}
                  </div>
                </div>
                <button
                  onClick={() => handleConnect(con._id)}
                  className={`px-2 py-2 text-[0.6rem]  rounded-lg ${!user.connections.some((user: User) => user._id == con._id) ? "text-white bg-deepskyblue" : "text-deepskyblue border border-deepskyblue bg-transparent"}`}>
                  {user.connections.some((user: User) => user._id == con._id) ? "Remove" : "Connect"}
                </button>
              </div>
            ))}

          </div>
          <img
            className="w-full h-[0.06rem]"
            alt=""
            src="../line1.svg"
          />
          <Link href="/colleagues" className="w-full [border:none] py-4 bg-white text-center font-medium text-[0.75rem] text-deepskyblue">
            See All
          </Link>
        </>
      )}
    </div>
  );
};

export default SuggestedContainer;
