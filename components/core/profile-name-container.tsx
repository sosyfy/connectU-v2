{/* eslint-disable @next/next/no-img-element */ }
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]';



const ProfileNameContainer = async ()=> {
  const session: any = await getServerSession(authOptions)
  let user:User = session.user.user
  
  

  return (
    <div className="text-[1rem] flex text-gray-100 font-roboto rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)] w-full h-[6rem]">
      <div className="flex items-center pl-6 gap-x-3">
        <div className="rounded-full w-[3rem] h-[3rem]">
          <img
            className="w-[3rem] h-[3rem] rounded-full object-cover"
            alt=""
            src={`http://localhost:8000/images/${user.userInfo.photo}`}
          />
        </div>
        <div className="grid">
          <p className="font-medium">
            {user.userInfo.firstName + " " + user.userInfo.lastName}
          </p>
          <p className="text-[0.73rem] mt-2 font-light">
            {user.jobTitle}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProfileNameContainer;
