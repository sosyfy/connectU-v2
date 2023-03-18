"use client";
/* eslint-disable @next/next/no-img-element */

import { signOut } from "next-auth/react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";

const Header = () => {
    const { data }: any = useSession();
    let [user, setUser] = useState<string>();
    useEffect(() => {
        if (data?.user.user !== undefined) {
            setUser(data?.user.user._id);
        }
    }, [data]);

    return (
        <div className="fixed z-10 top-0 left-0 w-full  bg-white md:text-[2.25rem] text-[1.75rem] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.14),_0px_0px_3px_rgba(0,_0,_0,_0.12)] font-roboto">
            <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto md:justify-between md:px-8 lg:px-0">
                <Link href="/" className="flex text-deepskyblue">
                    <b className="inline-block">Connect</b>
                    <b className="ml-1 inline-block rounded-md bg-deepskyblue text-white text-center w-[2.5rem]">
                        U
                    </b>
                </Link>
                <button
                    onClick={() => signOut()}
                    className="hidden cursor-pointer md:flex items-center lg:flex justify-end gap-2 text-[0.69rem] text-white">
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
                    <p className="text-dimgray text-[.75rem]">Sign out</p>
                </button>

                <Popover className="relative md:hidden">
                    {({ open }) => (
                        <>
                            <Popover.Button className={`cursor-pointer`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
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
                                                    <img
                                                        className="w-[1.5rem] h-[1.5rem]"
                                                        alt=""
                                                        src="../play.svg"
                                                    />
                                                    <div className="">Home</div>
                                                </Link>
                                                <Link
                                                    href={"/general-forum"}
                                                    className="flex items-center gap-x-4"
                                                >
                                                    <img
                                                        className="w-[1.5rem] h-[1.5rem]"
                                                        alt=""
                                                        src="../play.svg"
                                                    />
                                                    <div className="">General Forum</div>
                                                </Link>
                                                <Link
                                                    href={"/resources"}
                                                    className="flex items-center gap-x-4"
                                                >
                                                    <img
                                                        className="w-[1.5rem] h-[1.5rem]"
                                                        alt=""
                                                        src="../chart.svg"
                                                    />
                                                    <div className="">Resources</div>
                                                </Link>
                                                <Link
                                                    href={"/jobs"}
                                                    className="flex items-center gap-x-4"
                                                >
                                                    <img
                                                        className="w-[1.5rem] h-[1.5rem]"
                                                        alt=""
                                                        src="../game.svg"
                                                    />
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
