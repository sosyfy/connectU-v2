import type { NextPage } from "next";

const MobileNav: NextPage = () => {
  return (
    <div className="fixed bottom-1 hidden md:hidden text-[1rem] left-6 right-6 px-6 text-dimgray font-roboto rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)]">
      <div className="flex items-center justify-around w-full py-5 mx-auto">
        <div className="flex flex-col items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../play.svg"
          />

        </div>
        <div className="flex flex-col items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../chart.svg"
          />
        
        </div>
        <div className="flex flex-col items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../add-user.svg"
          />
         
        </div>
        <div className="flex flex-col items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../bookmark2.svg"
          />
        
        </div>
       
        <div className="flex flex-col items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../setting.svg"
          />
          
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
