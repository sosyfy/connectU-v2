"use client";
{/* eslint-disable @next/next/no-img-element */ }
import React, { useState } from 'react'

export default function RegisterForm(): JSX.Element {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()

    }
    return (
        <form className="pt-16 md:pt-20" onSubmit={e => handleSubmit(e)}>
            <div className="flex justify-center">
                <div className="rounded-full w-[5rem] h-[5rem] pb-4">
                    <img
                        className="w-[5rem] h-[5rem] object-cover"
                        alt=""
                        src="../profile-picture2@2x.png"
                    />
                </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
                <label className="relative leading-[125%] font-serif font-semibold">Email</label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type={"email"}
                    required
                    placeholder="example@gmail.com"
                    className="rounded-3xs bg-white font-serif font-medium box-border w-full flex flex-row py-[1.13rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                />
            </div>

            <div className="flex flex-col items-start justify-center gap-3 mt-4">
                <label className="relative leading-[125%] font-serif font-semibold">First name </label>
                <input
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    type={"text"}
                    required
                    placeholder="John"
                    className="rounded-3xs bg-white box-border w-full flex flex-row py-[1.13rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                />
            </div>

            <div className="flex flex-col items-start justify-center gap-3 mt-4">
                <label className="relative leading-[125%] font-serif font-semibold">last name </label>
                <input
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    type={"text"}
                    required
                    placeholder="Doe"
                    className="rounded-3xs bg-white box-border w-full flex flex-row py-[1.13rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                />
            </div>

            <div className="flex flex-col items-start justify-center gap-3 mt-4">
                <label className="relative leading-[125%] font-serif font-semibold">Password</label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={"password"}
                    required
                    placeholder="Password"
                    className="rounded-3xs bg-white box-border w-full flex flex-row py-[1.13rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                />
            </div>

            <button type="submit" className="leading-[125%] mt-8 font-semibold cursor-pointer rounded-3xs bg-black hover:bg-black/90 w-full py-[1.06rem]  text-center text-[1rem] text-white">
                Register
            </button>
        </form>
    )
}
