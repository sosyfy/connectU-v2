"use client";
{/* eslint-disable @next/next/no-img-element */ }
import Link from 'next/link';
import React, { useState, useRef } from 'react'
import axios from "axios";


export default function RegisterForm(): JSX.Element {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [adminNo, setAdminNo] = useState('');
    const [photo, setPhoto] = useState<any>();
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const handleCreateUser = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setLoading(true)
        try {

            if (photo) {
                const formData = new FormData();
                formData.append('media', photo);
                formData.append('firstName', firstName);
                formData.append('email', email);
                formData.append('password', password);
                formData.append('adminNo', adminNo);
                formData.append('lastName', lastName);

                axios.post(`${process.env.BACKEND_LOCAL_URL}/auth/register`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((response) => {
                    console.log(response.data);
                    setSuccess(true)
                    setLoading(false)
                }).catch((error) => {
                    console.log(error);
                    setLoading(false)
                })
            } else {
                setLoading(false)
                setError(true)
            }

        } catch (error) {
            console.error(error)
            setLoading(false)
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
            <form className={`${success ? "hidden" : "block"}`} onSubmit={e => handleCreateUser(e)}>
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
                            <div
                                // src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                                className="flex items-center justify-center font-[900] w-20 h-20 mx-auto my-auto rounded-full shadow-2xl"
                            >
                                JD
                            </div>
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

                <div className="flex flex-col items-start justify-center gap-2">
                    <label className="relative leading-[125%] font-serif font-semibold">Email</label>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type={"email"}
                        required
                        placeholder="example@gmail.com"
                        className="rounded-3xs bg-white font-serif font-medium box-border w-full flex flex-row  py-[0.9rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                    />
                </div>

                <div className="flex flex-col items-start justify-center gap-2 mt-3">
                    <label className="relative leading-[125%] font-serif font-semibold">First name </label>
                    <input
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        type={"text"}
                        required
                        placeholder="John"
                        className="rounded-3xs bg-white box-border w-full flex flex-row  py-[0.9rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                    />
                </div>

                <div className="flex flex-col items-start justify-center gap-2 mt-3">
                    <label className="relative leading-[125%] font-serif font-semibold">last name </label>
                    <input
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        type={"text"}
                        required
                        placeholder="Doe"
                        className="rounded-3xs bg-white box-border w-full flex flex-row  py-[0.9rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                    />
                </div>

                <div className="flex flex-col items-start justify-center gap-2 mt-3">
                    <label className="relative leading-[125%] font-serif font-semibold">Admission No</label>
                    <input
                        value={adminNo}
                        onChange={e => setAdminNo(e.target.value)}
                        type="text"
                        required
                        placeholder="CIT-223-232/2021"
                        className="rounded-3xs bg-white box-border w-full flex flex-row py-[0.9rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                    />
                </div>

                <div className="flex flex-col items-start justify-center gap-2 mt-3">
                    <label className="relative leading-[125%] font-serif font-semibold">Password</label>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type={"password"}
                        required
                        placeholder="Password"
                        className="rounded-3xs bg-white box-border w-full flex flex-row  py-[0.9rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                    />
                </div>
                {error &&
                    <div
                        className="rounded-3xs bg-transparent text-red font-bold text-center my-3  w-full py-[0.73rem] px-[1rem] items-center justify-end border-[1px] border-solid border-red"
                    >
                        All fields are required
                    </div>
                }
                <button type="submit" className="leading-[125%] mt-4 font-semibold cursor-pointer rounded-3xs bg-black hover:bg-black/90 w-full py-[0.9rem]  text-center text-[1rem] text-white">
                    {loading && <svg aria-hidden="true" role="status" className="inline w-5 h-5 mr-5 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                    </svg>}
                    Register
                </button>


            </form>

            {success && <Link href="/login"
                className="rounded-3xs my-32 bg-green-500 text-white box-border w-full flex flex-row py-[1.13rem] px-[1rem] items-center justify-center border-[1px] border-solid border-gainsboro-200"
            >
                Account created Please click login
            </Link>
            }
        </div>
    )
}
