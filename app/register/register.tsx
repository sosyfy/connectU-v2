"use client";
{/* eslint-disable @next/next/no-img-element */ }
import useAxios from '@/lib/hooks/useAxios';
import Link from 'next/link';
import React, { useState, useRef } from 'react'

export default function RegisterForm(): JSX.Element {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [adminNo, setAdminNo] = useState('');
    const [photo, setPhoto] = useState<any>();
    const [success, setSuccess] = useState(false);

    const request = useAxios()


    const handleCreateUser = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        try {
            let filename = null

            if (photo) {
                const formData = new FormData()
                filename = crypto.randomUUID() + photo.name
                formData.append("filename", filename)
                formData.append("image", photo)
                console.log(photo);


                await fetch(`http://localhost:8000/v1/upload/image`, {
                    method: 'POST',
                    body: formData
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })

            }


            await request({
                method: "post",
                path: "/auth/register",
                pathData: JSON.stringify({ photo : filename, password, lastName, firstName, email,adminNo })

            }).then((response) => {
                console.log(response.data);
                setSuccess(true)
            }).catch((error) => {
                console.log(error);

            })

        } catch (error) {
            console.error(error)
        }
    }

    const [photoName, setPhotoName] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const photoRef: any = useRef(null);

    const handleFileInputChange = () => {
        const file: any = photoRef?.current?.files[0] as any;
        setPhotoName(file.name);
        setPhoto(file);

        const reader = new FileReader();
        reader.onload = (e: any) => {
            setPhotoPreview(e?.target?.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <form className={`${ success ? "hidden" : "block" }`} onSubmit={e => handleCreateUser(e)}>
                <div className="col-span-6 ml-2 sm:col-span-4 md:mr-3" x-data="{photoName: null, photoPreview: null}">
                    {/* Photo File Input */}
                    <input
                        type="file"
                        className="hidden"
                        ref={photoRef}
                        onChange={handleFileInputChange}
                    />

                    <label
                        className="block mb-2 text-sm font-bold text-center text-gray-700"
                        htmlFor="photo"
                    >
                        Profile Photo <span className="text-red-600"> </span>
                    </label>

                    <div className="text-center">
                        {/* Current Profile Photo */}
                        <div className={`mt-2 ${!photoPreview ? 'block' : "hidden"}`}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <img
                                src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                                className="w-20 h-20 m-auto rounded-full shadow"
                            />
                        </div>

                        {/* New Profile Photo Preview */}
                        <div
                            className={`mt-2 ${photoPreview ? 'block' : "hidden"}`}
                        >
                            <span
                                className="block w-20 h-20 m-auto rounded-full shadow"
                                style={{
                                    backgroundImage: `url(${photoPreview})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center center',
                                }}
                            ></span>
                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 mt-2 ml-3 text-xs font-semibold tracking-widest text-gray-700 uppercase transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-400 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50"
                            onClick={() => photoRef?.current?.click()}
                        >
                            Select New Photo
                        </button>
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
                    <label className="relative leading-[125%] font-serif font-semibold">last name </label>
                    <input
                        value={adminNo}
                        onChange={e => setAdminNo(e.target.value)}
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

             { success && <Link href="/login"
                className="rounded-3xs my-32 bg-green-500 text-white box-border w-full flex flex-row py-[1.13rem] px-[1rem] items-center justify-center border-[1px] border-solid border-gainsboro-200"
                >
                 Account created Please click login
                </Link>
}
        </div>
    )
}
