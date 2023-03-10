{/* eslint-disable @next/next/no-img-element */ }

const SuggestedContainer = (): JSX.Element => {
  return (
    <div className="text-left overflow-hidden  text-[1rem] w-full text-dimgray font-roboto rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)]">
      <div className="px-5 py-6 font-medium">
        People you may know:
      </div>
      <div className="grid gap-3 px-5 pb-2">
       
        <div className="flex justify-between items-center h-[2.5rem]">
          <img
            className="h-[2.5rem]"
            alt=""
            src="../profile-picture8.svg"
          />
          <div className="grid gap-1 ml-3 basis-3/5">
            <div className="font-medium">
              Dylan Field
            </div>
            <div className="text-[0.69rem] font-light">
              CEO of Figma
            </div>
          </div>
          <button className="cursor-pointer hover:bg-deepskyblue hover:text-white transition-colors duration-300 text-[0.8rem] p-0 bg-white h-[2rem] font-medium font-roboto text-deepskyblue text-center rounded-lg px-3 border-[1px] border-solid border-deepskyblue">
            Connect
          </button>
        </div>
        <div className="flex justify-between items-center h-[2.5rem]">
          <img
            className="h-[2.5rem]"
            alt=""
            src="../profile-picture8.svg"
          />
          <div className="grid gap-1 ml-3 basis-3/5">
            <div className="font-medium">
              Dylan Field
            </div>
            <div className="text-[0.69rem] font-light">
              CEO of Figma
            </div>
          </div>
          <button className="cursor-pointer hover:bg-deepskyblue hover:text-white transition-colors duration-300 text-[0.8rem] p-0 bg-white h-[2rem] font-medium font-roboto text-deepskyblue text-center rounded-lg px-3 border-[1px] border-solid border-deepskyblue">
            Connect
          </button>
        </div>
        <div className="flex justify-between items-center h-[2.5rem]">
          <img
            className="h-[2.5rem]"
            alt=""
            src="../profile-picture8.svg"
          />
          <div className="grid gap-1 ml-3 basis-3/5">
            <div className="font-medium">
              Dylan Field
            </div>
            <div className="text-[0.69rem] font-light">
              CEO of Figma
            </div>
          </div>
          <button className="cursor-pointer hover:bg-deepskyblue hover:text-white transition-colors duration-300 text-[0.8rem] p-0 bg-white h-[2rem] font-medium font-roboto text-deepskyblue text-center rounded-lg px-3 border-[1px] border-solid border-deepskyblue">
            Connect
          </button>
        </div>
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
