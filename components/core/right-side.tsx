'use client';

import type { NextPage } from "next";
import SuggestedContainer from "./suggested-users";


const RightSide: NextPage = () => {
  return (
    <div className="lg:col-span-3 lg:block hidden relative text-[1rem] text-gray-100 font-roboto">
      <div className="sticky top-[6.5rem] grid gap-8">
        <SuggestedContainer />
        {/* <SuggestedContainer /> */}
      </div>
    </div>
  );
};

export default RightSide;
