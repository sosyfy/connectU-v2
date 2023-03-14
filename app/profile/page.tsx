import LeftSide from "@/components/core/left-side";

const Resume = () => {
    return (
        <main className="grid max-w-7xl grid-cols-12 gap-x-4 mx-auto pt-[6.5rem] pb-5 px-5 md:px-8 lg:px-0">
            <LeftSide />


            <div className="relative lg:col-span-9 md:col-span-8 bg-white w-full text-[1.25rem] text-black font-roboto">
                <div className="grid grid-cols-2">
                    {/* profile  */}
                    <div>
                        <img
                            className="w-[16.5rem] h-[16.5rem] object-cover"
                            alt="img"
                            src="/img@2x.png"
                        />
                    </div>
                    {/* info */}
                    <div>
                    <div className="text-[3rem] leading-[3.25rem] font-medium">
                            Ava Gregoraci
                        </div>
                        <div className="text-[1.75rem] leading-[2.25rem] font-light inline-block w-[19rem]">
                            UX UI Designer
                        </div>
                       
                        <div className="leading-[2rem] font-light flex">
                            <svg
                                className=""
                                width="22"
                                height="28"
                                viewBox="0 0 22 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M11 1C16.3848 1 21 5.61522 21 11C21 16.3848 11 27 11 27C11 27 1 16.3848 1 11C1 5.61522 5.61522 1 11 1Z"
                                    stroke="#464646"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>  San Francisco. California.
                        </div>
                    </div>
                </div>
                <div className="mx-auto columns-2">
                     {/* contact */}
                     <div className="overflow-hidden">
                        <div className="leading-[2rem] font-light inline-block w-[18.5rem]">
                            www.ava.gregoraci.com
                        </div>
                        <svg
                            className="max-w-full max-h-full overflow-hidden"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="16"
                                cy="16"
                                r="12"
                                stroke="#464646"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <ellipse
                                cx="16"
                                cy="16"
                                rx="6"
                                ry="12"
                                stroke="#464646"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M27 21L5 21"
                                stroke="#464646"
                                stroke-width="2"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M27 11L5 11"
                                stroke="#464646"
                                stroke-width="2"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <div className=" leading-[2rem] font-light inline-block w-[18.5rem]">
                            ava.gregoraci@gmail.com
                        </div>
                        <div className="">

                            <div className="rounded-sm box-border border-[2px] border-solid border-darkslategray" />
                            <svg
                                width="18"
                                height="8"
                                className="overflow-hidden"
                                viewBox="0 0 18 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L9 7L17 1"
                                    stroke="#464646"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="leading-[2rem] font-light inline-block w-[18.5rem]">
                            +1 415 844 4278
                        </div>
                        <div className="">
                            <svg
                                width="27"
                                height="27"
                                className="max-w-full max-h-full overflow-hidden"
                                viewBox="0 0 27 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M4.24049 1.94601L5.46792 1.70053C6.32077 1.52996 7.18609 1.93011 7.60847 2.6904L9.70237 6.45942C10.136 7.24001 9.99969 8.2135 9.36827 8.84492L7.95858 10.2546C7.30977 10.9042 7.18657 11.9121 7.66039 12.6985C8.45555 14.0206 9.38117 15.2096 10.4373 16.2657C11.4933 17.3218 12.6816 18.2466 14.0019 19.0401C14.7884 19.5118 15.795 19.388 16.4439 18.7399L17.8535 17.3302C18.485 16.6988 19.4585 16.5624 20.239 16.9961L24.0081 19.09C24.7684 19.5124 25.1685 20.3777 24.9979 21.2305L24.7525 22.458C24.6351 23.0442 24.2617 23.5472 23.7337 23.8275C18.7799 26.468 13.4042 24.8895 7.60658 19.0919C1.80898 13.2943 0.230442 7.91858 2.87098 2.96478C3.1513 2.43674 3.65429 2.06335 4.24049 1.94601Z"
                                    stroke="#464646"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div className=" leading-[2.25rem] font-medium">
                            Contact
                        </div>
                    </div>
                    {/* experience  */}

                    <div className="relative overflow-hidden">
                        <div className="leading-[2rem] font-light">
                            The word résume comes from the French word résumer meaning to
                            summarize. Leonardo da Vinci is credited with the first résumé, though
                            his résume takes the form of a letter written about 1481–1482 to a
                            potential employer, Ludovico Sforza.
                        </div>
                        <div className="leading-[2rem] font-light">
                            Company Name
                        </div>
                        <div className="leading-[2rem] font-medium inline-block">
                            UX UI Designer
                        </div>
                        <div className="leading-[2rem] font-light text-right">
                            Yan 2022 - Yan 2022
                        </div>
                        <div className="bg-black rounded-lg" />
                        <div className="leading-[2rem] font-light inline-block">
                            The word résume comes from the French word résumer meaning to
                            summarize. Leonardo da Vinci is credited with the first résumé, though
                            his résume takes the form of a letter written about 1481–1482 to a
                            potential employer, Ludovico Sforza.
                        </div>
                        <div className="leading-[2rem] font-light">
                            Company Name
                        </div>
                        <div className="leading-[2rem] font-medium inline-block">
                            UX UI Designer
                        </div>
                        <div className="leading-[2rem] font-light text-right">
                            Yan 2022 - Yan 2022
                        </div>
                        <div className="bg-black rounded-lg" />
                        <div className="leading-[2rem] font-light">
                            The word résume comes from the French word résumer meaning to
                            summarize. Leonardo da Vinci is credited with the first résumé, though
                            his résume takes the form of a letter written about 1481–1482 to a
                            potential employer, Ludovico Sforza.
                        </div>
                        <div className="leading-[2rem] font-light">
                            Company Name
                        </div>
                        <div className="leading-[2rem] font-medium inline-block w-[21rem]">
                            UX UI Designer
                        </div>
                        <div className="leading-[2rem] font-light text-right">
                            Yan 2022 - Yan 2022
                        </div>
                        <div className="bg-black rounded-lg" />
                        <div className="text-[1.75rem] leading-[2.25rem] font-medium">
                            Experience
                        </div>
                    </div>


                    {/* about me  */}
                    <div className="overflow-hidden">
                        <div className="leading-[2rem] font-light">
                            The word résume comes from the French word résumer meaning to
                            summarize. Leonardo da Vinci is credited with the first résumé, though
                            his résume takes the form of a letter written about 1481–1482 to a
                            potential employer, Ludovico Sforza.
                        </div>
                        <div className="text-[1.75rem] leading-[2.25rem] font-medium inline-block w-[39rem]">
                            About Me
                        </div>
                    </div>




                    {/* langauges */}
                    <div className="overflow-hidden">
                        <div className="leading-[2rem]">
                            <span className="font-medium">German</span>
                            <span className="font-light"> - Native</span>
                        </div>
                        <div className="leading-[2rem]">
                            <span className="font-medium">English</span>
                            <span className="font-light"> - Conversational</span>
                        </div>
                        <div className="text-[1.75rem] leading-[2.25rem] font-medium">
                            Languages
                        </div>
                    </div>

                    {/* education  */}
                    <div className="overflow-hidden">
                        <div className="font-light inline-block w-[17rem]">
                            University name
                        </div>
                        <div className="font-medium inline-block w-[17rem]">
                            Animation
                        </div>
                        <div className="font-light inline-block w-[17rem]">
                            2022 - 2023
                        </div>
                        <div className="bg-black rounded-lg" style={{ height: "1.9%", width: "2.63%" }} />
                        <div className="font-light inline-block w-[17rem]">
                            University name
                        </div>
                        <div className="font-medium inline-block w-[17rem]">
                            Animation
                        </div>
                        <div className="font-light inline-block w-[17rem]">
                            2022 - 2023
                        </div>
                        <div className="bg-black rounded-lg" style={{ height: "1.9%", width: "2.63%" }} />
                        <div className="font-light inline-block w-[17rem]">
                            University name
                        </div>
                        <div className="font-medium inline-block w-[17rem]">
                            Branding
                        </div>
                        <div className="font-light inline-block w-[17rem]">
                            2022 - 2023
                        </div>
                        <div className="bg-black rounded-lg" style={{ height: "1.9%", width: "2.63%" }} />
                        <div className="text-[1.75rem] leading-[2.25rem] font-medium">
                            Education
                        </div>
                    </div>

                    {/* skills  */}
                    <div className="overflow-hidden">
                        <div className="leading-[2rem] font-light">
                        <span className="w-3 h-3 bg-black rounded-full"/>  Animation
                        </div>
                        
                        <div className="leading-[2rem] font-light inline-block w-[17rem]">
                            Graphic Design
                        </div>
                        <div className="leading-[2rem] font-light inline-block w-[17rem]">
                            Branding
                        </div>
                        <div className="leading-[2rem] font-light inline-block w-[17rem]">
                            Web Design
                        </div>
                        <div className="leading-[2rem] font-light inline-block w-[17rem]">
                            UX UI Design
                        </div>
                        <div className="text-[1.75rem] leading-[2.25rem] font-medium">
                            Skills
                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
};

export default Resume;
