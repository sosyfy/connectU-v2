"use client"

import useAxios from "@/lib/hooks/useAxios";
import useClientToken from "@/lib/hooks/useClientToken";
import { useState } from "react";
import Link from "next/link";
import useUserStore from "@/lib/state/store";

type CardProps = {
  cardData: User | any,
};

const ConnectionCard = ({
  cardData,
}: CardProps) => {
  const userState = useUserStore((state) => state.user)
  const updateUser = useUserStore((state) => state.update)
  const [connections, setConnections] = useState<User | any>(userState?.connections);
  const [loading, setLoading] = useState(false);

  let token = useClientToken();
  const request = useAxios(token);


  const handleConnect = (id: string) => {
    if (token !== undefined) {
      setLoading(true);
      request({
        method: "post",
        path: "/user/toggle-connection",
        pathData: JSON.stringify({ userId: userState?._id, connectionId: id })
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
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cardData.userInfo.photo}
        alt=""
        className="mx-auto mt-4 rounded-full w-[6rem] h-[6rem] drop-shadow"
      />
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold">
          {cardData.userInfo.firstName} {cardData.userInfo.lastName}
        </h2>
        <p className="text-dimgray text-[0.8rem] hidden">{cardData.email}</p>
      </div>
      <div className="flex justify-around px-3 py-4">
        <button
          onClick={() => handleConnect(cardData._id)}
          className={`px-4 py-1 text-[1rem]  rounded-lg ${!connections?.some((user: User) => user._id == cardData._id) ? "text-white bg-deepskyblue" : "text-deepskyblue border border-deepskyblue bg-transparent"}`}>
          {loading &&
            <svg aria-hidden="true" role="status" className="inline w-5 h-5 mr-5 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
            </svg>
          }
          {connections?.some((user: User) => user._id == cardData._id) ? "Remove" : "Connect"}
        </button>

        <Link href={`/user/${cardData._id}`} className="px-4 py-1 text-white  text-[1rem] bg-gray-400 rounded-lg">
          Profile
        </Link>
      </div>
    </div>
  );
};


export default ConnectionCard 