"use client"
{/* eslint-disable @next/next/no-img-element */ }

import { useSession } from "next-auth/react";

import { useEffect, useState } from 'react';
import useAxios from './../../lib/hooks/useAxios';
import useClientToken from './../../lib/hooks/useClientToken';



const SuggestedContainer = () => {
  const { data }: any = useSession();
  const [user, setUser] = useState<User | any >()
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([])
  let token = useClientToken()
  const request = useAxios(token)

  useEffect(() => {
    if (token !== undefined) {
      request({
        method: "get",
        path: "/user/find/suggested-connections"
      }).then((response) => {
        setSuggestedUsers(response.data)
      }).catch((error) => {
        console.log(error);
      })
      setUser(data?.user.user)
    }


  }, [token])

  useEffect(() => {
    if (data !== undefined) {
      setUser(data?.user?.user)
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
      <div className="grid gap-3 px-5 pb-2">
        {suggestedUsers && suggestedUsers?.map((con: User) => (
          <div
            key={con._id}
            className="flex justify-between items-center h-[2.5rem] pb-3">

            <img
              className="h-[2.5rem] w-[2.5rem] rounded-full"
              alt=""
              src={`http://localhost:8000/images/${con.userInfo.photo}`}
            />
            <div className="grid ml-3 basis-2/5">
              <div className="font-medium">
                {con.userInfo.firstName}
              </div>
              <div className="font-medium">
                {con.userInfo.lastName}
              </div>
            </div>
            <button
              onClick={() => handleConnect(con._id)}
              className={`px-2 py-2 text-[1rem]  rounded-lg ${! user.connections.some((user: User) => user._id == con._id) ? "text-white bg-deepskyblue" : "text-deepskyblue border border-deepskyblue bg-transparent"}`}>
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
      <button className="w-full [border:none] py-4 bg-white text-center font-medium text-[0.75rem] text-deepskyblue">
        See All
      </button>
    </div>
  );
};

export default SuggestedContainer;
