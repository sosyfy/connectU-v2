"use client";

import useAxios from "@/lib/hooks/useAxios";
import useUserStore from "@/lib/state/store";
import { useState } from "react";
import LeftSide from "../core/left-side";


type TopBarProps = {
  user: User,
  connectionNo: number,
  postNo: number,
  loggedInUser: User | undefined,
  token: string
}

export default function TopBar({
  user,
  connectionNo,
  postNo,
  loggedInUser,
  token
}: TopBarProps) {
  const date = new Date(user?.createdAt);
  const formattedDate = date.toLocaleDateString('en-US');
  const [loading, setLoading] = useState(false);
  const updateUser = useUserStore((state) => state.update)
  const [connections, setConnections] = useState<User | any>(loggedInUser?.connections);

  const request = useAxios(token);


  const handleConnect = (id: string) => {
    if (token !== undefined) {
      setLoading(true);
      request({
        method: "post",
        path: "/user/toggle-connection",
        pathData: JSON.stringify({ userId: loggedInUser?._id, connectionId: id })
      }).then((response) => {
        setConnections(response.data.connections);
        updateUser(response.data);
        setLoading(false)
      }).catch((error) => {
        console.log(error);
        setLoading(false)
      })
    }
  }
  return (
    <>
      <div className="grid h-[10.5rem] w-full bg-zinc-50 drop-shadow-[0_4px_8px_rgba(0,172,255,0.2)] rounded-t-md grid-cols-12 gap-4 lg:gap-16 lg:px-16 pt-3 px-4">
        {/* intro */}
        <div className="md:col-span-5 col-span-6 lg:col-span-4 h-[12rem] mt-2 bg-white rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={user?.userInfo.photo} alt="img" className="object-cover w-full h-full rounded-lg" />
        </div>
        <div className="col-span-6 md:col-span-7 lg:col-span-8 font-roboto">
          <div className="grid text-dimgray">
            <h2 className="text-[1.4rem] font-medium capitalize">{user?.userInfo.firstName} {user?.userInfo.lastName}</h2>
            <h3 className="text-[0.95rem] mt-1">{user?.jobTitle}</h3>
            <p className="text-[0.75rem] mt-2">member since {formattedDate}</p>
            <h2 className="text-[0.75rem] mt-2">Class of 2019</h2>
            <div className="flex gap-5 mt-3">

              {loggedInUser?._id !== user?._id && (
                <button
                  onClick={() => handleConnect(user._id)}
                  className={`px-4 py-1 text-[1rem]  rounded-lg ${!connections?.some((userA: User) => userA._id == user._id) ? "text-white bg-deepskyblue" : "text-deepskyblue border border-deepskyblue bg-transparent"}`}>
                  {loading &&
                    <svg aria-hidden="true" role="status" className="inline w-5 h-5 mr-5 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                    </svg>
                  }
                  {connections?.some((userA: User) => userA._id == user._id) ? "Remove" : "Connect"}
                </button>
              )}

              {loggedInUser?._id === user?._id && (
                <button className="grid p-2 rounded-full focus:outline-none hover:bg-zinc-200 place-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* stats */}
      <div className="flex justify-end h-[4rem] box-border w-full">
        <div className="flex items-center justify-around lg:justify-start lg:gap-20 md:w-[55%] w-[45%] border-b-2 stats border-dimgray/20 fot-roboto text-dimgray/90">
          <div className="grid gap-1 text-center">
            <h3 className="text-[0.85rem] tracking-tight">connections</h3>
            <p className="font-bold text-[1rem]">{connectionNo}</p>
          </div>
          <div className="grid gap-1 text-center">
            <h3 className="text-[0.85rem] tracking-tight">posts</h3>
            <p className="font-bold text-[1rem]">{postNo}</p>
          </div>
        </div>
      </div>
    </>
  )
}
