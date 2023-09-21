"use client"
{/* eslint-disable @next/next/no-img-element */ }
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react'


export default function Login() {
    const [email, setEmail] = useState("edwin@gmail.com");
    const [password, setPassword] = useState("123456");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true)
        const results = await signIn("credentials", {
            email: email,
            password: password,
            redirect: true,
            callbackUrl: "/"
        })

        console.log(results);


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
                    Hi, Welcome Back!

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-3 w-[1.88rem] h-[1.88rem] mt-1 object-cover">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>


                </h1>
                <form className="pt-6" onSubmit={e => handleSubmit(e)}>
                    <div className="flex flex-col items-start justify-center gap-3">
                        <label className="relative leading-[125%] font-roboto font-semibold">Email</label>
                        <input
                            type={"email"}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                            onChange={e => setPassword(e.target.value)}
                            className="rounded-3xs bg-white font-roboto  box-border w-full flex flex-row py-[1.13rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                        />
                    </div>

                    <div className="items-center justify-end hidden py-3">
                        <a href="#" className="leading-[125%] text-dimgray font-serif font-semibold decoration-transparent">
                            Forgot password?
                        </a>
                    </div>

                    <button  disabled={loading}  type="submit" className="leading-[125%] mt-8 font-semibold cursor-pointer rounded-3xs bg-black hover:bg-black/90 w-full py-[1.06rem]  text-center text-[1rem] text-white">
                        {loading ? ( <svg aria-hidden="true" role="status" className="inline w-5 h-5 mr-5 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                        </svg> ): (
                            <span> Log in </span>
                        )  
                    }
                       
                    </button>
                </form>


                <p className="mt-16 font-serif font-semibold text-center text-dimgray">
                    <span>
                        <span>Don’t have an account?</span>

                    </span>
                    <span className="ml-3 text-black font-roboto">
                        <Link href="/register" className="font-semibold text-blue-500 decoration-transparent">Sign up</Link>
                    </span>
                </p>
            </div>
        </div>
    )
}
