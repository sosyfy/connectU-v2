
import type { NextPage } from "next";
import MenuContainer from "./menu-container";
import ProfileNameContainer from './profile-name-container';
import SuggestedContainer from "./suggested-users";

const LeftSide: NextPage = () => {
  return (
    <div className="lg:col-span-3 md:col-span-4 hidden md:block  relative text-[1rem] text-dimgray font-roboto">
      <div className="sticky top-[6.5rem]">
        <div className="grid gap-8">
           {/* @ts-expect-error Async Server Component */}
          <ProfileNameContainer />
           {/* @ts-expect-error Async Server Component */}
          <MenuContainer />
          <div className="hidden md:block lg:hidden">
            <SuggestedContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;