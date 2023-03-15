"use client"
import useAxios from "@/lib/hooks/useAxios";
import useClientToken from "@/lib/hooks/useClientToken";
// import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";


const Resume = ({ userId }: any): JSX.Element => {
    // const { data }: any = useSession();

    const [userData, setUserData] = useState<User>()
    let token = useClientToken()
    const request = useAxios(token)


    useEffect(() => {
        if (token !== undefined) {
            request({
                method: "get",
                path: `/user/${userId}`
            }).then((response) => {
                setUserData(response.data)
            }).catch((error) => {
                console.log(error);
            })
        }
    }, [token])

    return (

        <div className="relative lg:col-span-9 md:col-span-8  w-full text-[1.25rem] text-dimgray font-roboto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {/* profile  */}
                <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="w-[13.5rem] h-[13.5rem] object-cover rounded-full"
                        alt="img"
                        src={`http://localhost:8000/images/${userData?.userInfo?.photo}`}
                    />
                </div>
                {/* info */}
                <div>
                    <div className="text-[3rem] leading-[3.25rem] font-medium text-deepskyblue">
                        {userData?.userInfo.firstName + " " + userData?.userInfo.lastName}
                    </div>
                    <div className="text-[1.75rem] leading-[2.25rem] font-light inline-block w-[19rem]">
                        {userData?.jobTitle}
                    </div>

                    <div className="leading-[2rem] font-light text-[1.2rem] mt-2 flex items-center gap-2">
                        <svg

                            width="22"
                            height="28"
                            className="h-4"
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
                        </svg> {userData?.location}
                    </div>

                    <div className="flex w-full gap-4 mt-3">
                        <button
                            className={`cursor-pointer w-full transition-colors duration-300 text-[0.8rem] p-0 bg-deepskyblue text-white h-[2rem] font-medium font-roboto  text-center rounded-lg px-3 border-[1px] border-solid border-deepskyblue`}>
                            Connect
                        </button>
                        <button
                            className={`cursor-pointer w-full transition-colors duration-300 text-[0.8rem] p-0 bg-green-500 text-white h-[2rem] font-medium font-roboto  text-center rounded-lg px-3 border-[1px] border-solid border-deepskyblue`}>
                            edit
                        </button>
                    </div>
                </div>
            </div>
            {/* about me  */}

            <div className="p-4 my-5 overflow-hidden bg-white rounded-lg shadow">
                <div className="text-[1.75rem] leading-[2.25rem] text-deepskyblue mb-4 font-semibold  border-b-4 border-deepskyblue inline-block">
                    About Me
                </div>
                <div className="leading-[2rem] font-light text-[1.2rem]">
                    {userData?.about}
                </div>

            </div>

            <div className="gap-10 mx-auto lg:columns-2">

                {/* experience  */}

                <div className="p-4 my-5 overflow-hidden bg-white rounded-lg shadow">
                    <div className="text-[1.75rem] leading-[2.25rem] text-deepskyblue mb-4 font-semibold  border-b-4 border-deepskyblue inline-block">
                        Experience
                    </div>
                    {userData?.experience.map((exp) => (
                        <div className="grid" key={exp._Id}>
                            <div className="leading-[2rem] font-semibold">
                                {exp.company}
                            </div>
                            <div className="leading-[2rem] font-medium inline-block text-[1.3rem]">
                                {exp.position}
                            </div>
                            <div className="leading-[2rem] font-light text-left text-base">
                                {exp.startDate} - {exp.endDate}
                            </div>
                            <div className="leading-[1.7rem] font-light pt-2 mt-3 text-[1.2rem]">
                                {exp.type}
                            </div>
                        </div>
                    ))}


                </div>


                {/* langauges */}
                <div className="p-4 my-5 overflow-hidden bg-white rounded-lg shadow">
                    <div className="text-[1.75rem] leading-[2.25rem] text-deepskyblue mb-4 font-semibold  border-b-4 border-deepskyblue inline-block">
                        contact
                    </div>

                    <div className="leading-[2rem]">
                        <span className="font-medium">Email</span>
                        <span className="font-light"> - {userData?.email}</span>
                    </div>
                    <div className="leading-[2rem]">
                        <span className="font-medium">Admission Number</span>
                        <span className="font-light"> - {userData?.userInfo.adminNo}</span>
                    </div>

                </div>

                {/* education  */}
                <div className="p-4 my-5 overflow-hidden bg-white rounded-lg shadow">
                    <div className="text-[1.75rem] leading-[2.25rem] text-deepskyblue mb-4 font-semibold  border-b-4 border-deepskyblue inline-block">
                        Education
                    </div>
                    <div>

                        {userData?.education.map((edu) => (
                            <div className="grid gap-1" key={edu._id}>
                                <div className="inline-block font-medium">
                                    {edu.schoolName}
                                </div>
                                <div className="inline-block text-lg font-normal">
                                    {edu.course}
                                </div>
                                <div className="inline-block text-base font-light">
                                    {edu.startDate} - {edu.endDate}
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

                {/* skills  */}
                <div className="p-4 my-5 overflow-hidden bg-white rounded-lg shadow">
                    <div className="text-[1.75rem] leading-[2.25rem] text-deepskyblue mb-4 font-semibold  border-b-4 border-deepskyblue inline-block">
                        Skills
                    </div>
                    <div className="grid gap-2">
                        {userData?.skills.map((skill) => (
                            <div className="leading-[2rem] font-light" key={skill}>
                               {skill}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Resume;
