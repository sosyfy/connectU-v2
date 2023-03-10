"use client"
{/* eslint-disable @next/next/no-img-element */}
import { signIn } from 'next-auth/react';
import React, { useState } from 'react'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default function Login(){
    const [ email,setEmail] = useState("");
    const [ password,setPassword] = useState("");
    
    const handleSubmit = async (event: any)=>{
          event.preventDefault();
      
          const results = await signIn("credentials", {
            email: email,
            password: password,
            redirect: true ,
            callbackUrl: "/"
          } )
          const session = await getServerSession(authOptions)

          console.log(session);
          
    }

    return (
        <div className="px-3 md:px-8 bg-white w-full sm:w-[25rem] md:h-fit md:mx-auto rounded-xl">
            <div className="relative py-20 text-left text-[0.88rem] text-black font-roboto">
                <svg
                    width="46"
                    height="44"
                    viewBox="0 0 46 44"
                    fill="none"
                    className="absolute md:top-[2.94rem] top-6 right-2 w-[2.88rem] h-[2.75rem]"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 0L23.823 3.36707C25.109 8.62855 25.752 11.2593 27.1233 13.3821C28.336 15.2593 29.9527 16.8418 31.8554 18.0139C34.0071 19.3395 36.651 19.926 41.9388 21.0991L46 22L41.9388 22.9009C36.651 24.074 34.0071 24.6605 31.8554 25.9861C29.9527 27.1582 28.336 28.7407 27.1233 30.6179C25.752 32.7407 25.109 35.3714 23.823 40.6329L23 44L22.177 40.6329C20.891 35.3714 20.248 32.7407 18.8767 30.6179C17.664 28.7407 16.0473 27.1582 14.1446 25.9861C11.9929 24.6605 9.34897 24.074 4.06116 22.9009L0 22L4.06116 21.0991C9.34897 19.926 11.9929 19.3395 14.1446 18.0139C16.0473 16.8418 17.664 15.2593 18.8767 13.3821C20.248 11.2593 20.891 8.62855 22.177 3.36707L23 0Z" fill="black" />
                </svg>

                <h1 className="text-[1.88rem] font-bold flex tracking-[-0.01em] leading-[130%] font-serif">
                    Hi, Welcome!
                   
                    <img
                        className="ml-3 w-[1.88rem] h-[1.88rem] object-cover"
                        alt=""
                        src="../image-296@2x.png"
                    />

                </h1>
                <form className="pt-6" onSubmit={ e => handleSubmit(e)}>
                    <div className="flex flex-col items-start justify-center gap-3">
                        <label className="relative leading-[125%] font-roboto font-semibold">Email</label>
                        <input
                            type={"email"}
                            value={email}
                            onChange={ e => setEmail(e.target.value)}
                            required
                            placeholder="Your email"
                            className="rounded-3xs bg-white font-roboto font-medium box-border w-full flex flex-row py-[1.13rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                        />
                    </div>

                    <div className="flex flex-col items-start justify-center gap-3 mt-4">
                        <label className="relative leading-[125%] font-roboto font-semibold">Password</label>
                        <input
                            type={"password"}
                            placeholder="Password"
                            value={password}
                            required
                            onChange={ e => setPassword(e.target.value)}
                            className="rounded-3xs bg-white font-roboto  box-border w-full flex flex-row py-[1.13rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                        />
                    </div>

                    <div className="items-center justify-end hidden py-3">
                        <a href="#" className="leading-[125%] text-dimgray font-serif font-semibold decoration-transparent">
                            Forgot password?
                        </a>
                    </div>

                    <button type="submit" className="leading-[125%] mt-8 font-semibold cursor-pointer rounded-3xs bg-black hover:bg-black/90 w-full py-[1.06rem]  text-center text-[1rem] text-white">
                        Log in
                    </button>
                </form>


                <p className="mt-16 font-serif font-semibold text-center text-dimgray">
                    <span>
                        <span>Don’t have an account?</span>

                    </span>
                    <span className="ml-3 text-black font-roboto">
                        <a href="#" className="font-semibold decoration-transparent text-blue-500">Sign up</a>
                    </span>
                </p>
            </div>
        </div>
    )
}
