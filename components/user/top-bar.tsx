"use client";


type TopBarProps = {
  user: User,
  connectionNo: number,
  postNo: number
}

export default function TopBar({
  user,
  connectionNo,
  postNo
}: TopBarProps) {
  const date = new Date(user?.createdAt);
  const formattedDate = date.toLocaleDateString('en-US');

  return (
    <>
      <div className="grid h-[10.5rem] w-full bg-zinc-50 drop-shadow-[0_4px_8px_rgba(0,172,255,0.2)] rounded-t-md grid-cols-12 gap-4 lg:gap-16 lg:px-16 pt-3 px-4">
        {/* intro */}
        <div className="md:col-span-5 col-span-6 lg:col-span-4 h-[12rem] mt-2 bg-white rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={user?.userInfo.photo} alt="img" className="object-cover h-full rounded-lg" />
        </div>
        <div className="col-span-6 md:col-span-7 lg:col-span-8 font-roboto">
          <div className="grid text-dimgray">
            <h2 className="text-[1.4rem] font-medium capitalize">{user?.userInfo.firstName} {user?.userInfo.lastName}</h2>
            <h3 className="text-[0.95rem] mt-1">{user?.jobTitle}</h3>
            <p className="text-[0.75rem] mt-2">member since {formattedDate}</p>
            <h2 className="text-[0.75rem] mt-2">Class of 2019</h2>
            <div className="flex hidden gap-5 mt-2">
              <button className="bg-green-500 rounded w-[6rem] text-[1rem] text-whitesmoke py-1">connect</button>
              <button className="bg-green-500 rounded w-[6rem] text-[1rem] text-whitesmoke py-1">edit</button>
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
