"use client"
import React from 'react'

function ForumPost() {
    return (
        <div className="rounded-lg bg-white w-full overflow-hidden flex flex-col p-[1.25rem] box-border items-start justify-start gap-[1.25rem]">
            <h1 className="relative text-[1.2rem] font-semibold text-dimgray">
                Bagaimana cara menginstall NextJS versi 13?
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.63rem] text-[1.25rem]">
                <img
                    className="relative w-[3.5rem] h-[3.5rem] shrink-0 object-cover"
                    alt=""
                    src="/picture@2x.png"
                />
                <div className="flex-1 h-[3.5rem] flex flex-col items-start justify-center">
                    <div className="relative font-medium">Ervalsa Dwi Nanda</div>
                    <div className="relative font-medium text-[0.88rem] text-base-mid-gray">
                        Android Developer
                    </div>
                </div>
                <div className="flex flex-row items-center justify-start text-[0.88rem] text-base-mid-gray">
                    <div className="relative">2 hari yang lalu</div>
                </div>
            </div>
            <div className="relative self-stretch font-normal text-[1rem] text-base-mid-gray">
                <p className="m-0">Halo teman-teman semuanya.</p>
                <p className="m-0">
                    Saya punya pertanyaan, tentang cara untuk menginstall NextJS versi
                    13, yang dimana NextJS 13 adalah versi terbaru. Saya mempunyai
                    masalah dengan instalasi yang terbaru, saya menda.....
                </p>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem] text-base-dark-gray">

                <svg
                    className="relative w-[2rem] h-[2rem] shrink-0  text-dimgray"
                    width="32" height="32" viewBox="0 0 32 32" fill="#666" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 18.6667H18.6667V16H8V18.6667ZM8 14.6667H24V12H8V14.6667ZM8 10.6667H24V8.00002H8V10.6667ZM2.66666 29.3334V5.33335C2.66666 4.60002 2.928 3.97202 3.45066 3.44935C3.97244 2.92758 4.6 2.66669 5.33333 2.66669H26.6667C27.4 2.66669 28.028 2.92758 28.5507 3.44935C29.0724 3.97202 29.3333 4.60002 29.3333 5.33335V21.3334C29.3333 22.0667 29.0724 22.6947 28.5507 23.2174C28.028 23.7391 27.4 24 26.6667 24H8L2.66666 29.3334Z" fill="#34364A" />
                </svg>
                <div className="relative text-base">10 Jawaban</div>
            </div>
        </div>
    )
}

export default ForumPost