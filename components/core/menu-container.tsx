
{/* eslint-disable @next/next/no-img-element */ }

const MenuContainer = () : JSX.Element=> {
  return (
    <div className="relative text-[1rem] px-6 text-dimgray font-roboto rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)]">
      <div className="grid gap-5 py-8">
        <div className="flex items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../play.svg"
          />
          <div className="">General Forum</div>
        </div>
        <div className="flex items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../chart.svg"
          />
          <div className="">Resources</div>
        </div>
        <div className="flex items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../add-user.svg"
          />
          <div className="">
            Colleagues
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../bookmark2.svg"
          />
          <div className="">Bookmarks</div>
        </div>
        <div className="flex items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../game.svg"
          />
          <div className="">Jobs</div>

        </div>
        <div className="flex items-center gap-x-4">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            alt=""
            src="../setting.svg"
          />
          <div className="">Profile</div>
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
