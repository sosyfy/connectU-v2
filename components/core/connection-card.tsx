 "use client"

import useAxios from "@/lib/hooks/useAxios";
import useClientToken from "@/lib/hooks/useClientToken";
import { useState } from "react";
import Link from "next/link";

type CardProps = {
    cardData: User | any,
    loggedInUser:  User | any,
  };
  
  const ConnectionCard = ({
    cardData,
    loggedInUser
  }: CardProps) => {
     
     const [connections , setConnections] = useState<User | any>(loggedInUser?.connections);
   
     let token = useClientToken();
     const request = useAxios(token);
    

     const handleConnect = (id: string) => {
        if (token !== undefined) {
          request({
            method: "post",
            path: "/user/toggle-connection",
            pathData: JSON.stringify({ userId: loggedInUser._id , connectionId: id })
          }).then((response) => {
            setConnections(response.data.connections);
          }).catch((error) => {
            console.log(error);
            
          })
        }
      }
    return (
      <div className="overflow-hidden bg-white rounded-lg shadow-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cardData.userInfo.photo}
          alt=""
          className="mx-auto mt-4 rounded-full w-[6rem] h-[6rem] shadow"
        />
        <div className="mt-4 text-center">
          <h2 className="text-lg font-semibold">
            {cardData.userInfo.firstName} {cardData.userInfo.lastName}
          </h2>
          <p className="text-dimgray text-[0.8rem]">{cardData.email}</p>
        </div>
        <div className="flex justify-around px-3 py-4">
          <button 
          onClick={()=> handleConnect(cardData._id) }
          className={`px-4 py-1 text-[1rem]  rounded-lg ${!connections.some( (user:User) => user._id == cardData._id ) ? "text-white bg-deepskyblue" : "text-deepskyblue border border-deepskyblue bg-transparent"}`}>
          {connections.some((user:User) => user._id == cardData._id ) ? "Remove" : "Connect"}
          </button>
         
          <Link href={`/user/${cardData._id}`} className="px-4 py-1 text-white  text-[1rem] bg-gray-400 rounded-lg">
          Profile
        </Link>
        </div>
      </div>
    );
  };

  
  export default ConnectionCard 