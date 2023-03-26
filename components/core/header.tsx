"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

import { signOut } from "next-auth/react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import useUserStore from "@/lib/state/store";

const Header = () => {
    const { data }: any = useSession();
    let [user, setUser] = useState<string>();
    const userState = useUserStore((state) => state.user)
    const updateUser = useUserStore((state) => state.update)
    useEffect(() => {
        if (data?.user.user !== undefined) {
            // setUser(data?.user.user._id);
            if (userState === undefined) {
                setUser(data?.user.user._id);
                updateUser(data?.user.user);
            } else {
                if (userState?._id === data?.user.user._id) {
                    setUser(data?.user.user._id);  
                } else {
                    setUser(data?.user.user._id);
                    updateUser(data?.user.user);  
                }
            }
        }
    }, [data]);

    return (
        <div className="fixed z-40 top-0 left-0 w-full  bg-white md:text-[2.25rem] text-[1.5rem] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.14),_0px_0px_3px_rgba(0,_0,_0,_0.12)] font-roboto">
            <div className="flex items-center justify-between max-w-5xl px-6 py-4 mx-auto md:justify-between md:px-8 lg:px-0">
                <Link href="/" className="flex items-center text-deepskyblue">
                    <b className="inline-block">Connect</b>
                    <b className="ml-1 flex justify-center items-center rounded-md bg-deepskyblue text-white text-center w-[2rem] h-[2rem]">
                        U
                    </b>
                </Link>
                <button
                    onClick={() => signOut()}
                    className="hidden cursor-pointer md:flex items-center lg:flex justify-end gap-2 text-[0.75rem] text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"

                        className="w-[1.2rem] h-[1.2rem] text-dimgray cursor-pointer"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                    </svg>
                    <p className="text-dimgray text-[.9rem]">Sign out</p>
                </button>

                <Popover className="relative md:hidden">
                    {({ open }) => (
                        <>
                            <Popover.Button className={`cursor-pointer focus:outline-dimgray`}>
                                {open ?
                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-pulse">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                    </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    )}
                            </Popover.Button>
                            {open &&
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute z-50 right-2">
                                        <div className="relative w-[13rem] text-[1rem] px-6 text-dimgray font-roboto rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)]">
                                            <div className="grid gap-5 py-8">
                                                <Link href={"/"} className="flex items-center gap-x-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.5rem] h-[1.5rem]">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                                                    </svg>

                                                    <div className="">Home</div>
                                                </Link>
                                                <Link
                                                    href={"/general-forum"}
                                                    className="flex items-center gap-x-4"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.5rem] h-[1.5rem]">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                                    </svg>

                                                    <div className="">General Forum</div>
                                                </Link>
                                                <Link
                                                    href={"/resources"}
                                                    className="flex items-center gap-x-4"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.5rem] h-[1.5rem]">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                                    </svg>

                                                    <div className="">Resources</div>
                                                </Link>
                                                <Link
                                                    href={"/jobs"}
                                                    className="flex items-center gap-x-4"
                                                >

                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.5rem] h-[1.5rem]">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                                    </svg>

                                                    <div className="">Jobs</div>
                                                </Link>
                                                <Link
                                                    href={"/colleagues"}
                                                    className="flex items-center gap-x-4"
                                                >
                                                    <img
                                                        className="w-[1.5rem] h-[1.5rem]"
                                                        alt=""
                                                        src="../add-user.svg"
                                                    />
                                                    <div className="">Colleagues</div>
                                                </Link>

                                                <Link
                                                    href={`/user/${user}`}
                                                    className="flex items-center gap-x-4"
                                                >
                                                    <img
                                                        className="w-[1.5rem] h-[1.5rem]"
                                                        alt=""
                                                        src="../setting.svg"
                                                    />
                                                    <div className="">Profile</div>
                                                </Link>
                                                <button
                                                    onClick={() => signOut()}
                                                    className="cursor-pointer flex items-center  gap-x-4 text-[0.69rem] text-white">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"

                                                        className="w-[1.5rem] h-[1.5rem] text-dimgray cursor-pointer"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                                        />
                                                    </svg>
                                                    <p className="text-dimgray font-roboto text-[1rem]">Sign out</p>
                                                </button>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            }
                        </>
                    )}
                </Popover>
            </div>
        </div>
    );
};

export default Header;
