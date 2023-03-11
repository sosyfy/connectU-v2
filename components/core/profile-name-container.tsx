{/* eslint-disable @next/next/no-img-element */ }

const ProfileNameContainer = (): JSX.Element => {
  return (
    <div className="text-[1rem] flex text-gray-100 font-roboto rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)] w-full h-[6rem]">
      <div className="flex items-center pl-6 gap-x-3">
        <div className="rounded-full w-[3rem] h-[3rem]">
          <img
            className="w-[3rem] h-[3rem] object-cover"
            alt=""
            src="../profile-picture2@2x.png"
          />
        </div>
        <div className="grid">
          <p className="font-medium">
            Dariush Habibpour
          </p>
          <p className="text-[0.73rem] mt-2 font-light">
            Product Designer
          </p>
        </div>

      </div>
      {/* <img
        className="absolute top-[1.81rem] left-[16rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
        alt=""
        src="../arrow--down-2.svg"
      /> */}
    </div>
  );
};

export default ProfileNameContainer;
