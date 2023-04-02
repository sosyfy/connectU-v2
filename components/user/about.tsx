"use client"

import { useState } from "react";

type Props = {
    user: User,
    loggedInUser: User | undefined
}

export default function About({ user, loggedInUser }: Props) {
    const [aboutData, setAboutData] = useState<string>('')
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);


    const openEditModal = (data: string) => {
        setShowModal(true);
        setAboutData(data)
    }
    const openCreateModal = () => {
        setShowModal(true);
        setAboutData('')
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setShowModal(false);

    };
    return (
        <section className='pb-2 bg-white rounded-lg shadow border-dimgray'>
            {/* top part  */}
            <div className="p-[1.2rem] pb-0">
                <div className="flex items-center justify-between">
                    <h2 className="flex-1 font-semibold text-textblack-100">About</h2>
                    {loggedInUser?._id === user?._id && (
                        <div className="flex items-center gap-2 icons">
                            <button onClick={openCreateModal} className="grid p-2 rounded-full focus:outline-none hover:bg-zinc-200 place-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </button>
                            <button onClick={() => openEditModal(user?.about)} className="grid p-2 rounded-full focus:outline-none hover:bg-zinc-200 place-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {/* things    */}
            <div className="grid p-[1.2rem] relative">
                <div className="">
                    {user?.about && <p className='mt-3 text-dimgray text-[1.08rem] font-normal'> {user?.about} </p>}
                </div>
            </div>



            {showModal &&
                <div className="fixed inset-0 z-20 overflow-y-auto outline-none bg-whitesmoke/90 focus:outline-none">
                    <div className="px-4 py-6 mx-auto overflow-auto mt-[18%] bg-gray-300 rounded-lg shadow w-fit lg:w-2/5">
                        <form onSubmit={handleSubmit} className="w-full mx-auto overflow-auto">
                            <h2 className="mb-4 text-[1.2rem] font-semibold">About Info:</h2>
                            <div className="flex flex-col mb-2">
                                <textarea
                                    id="summary"
                                    rows={4}
                                    style={{ resize: "vertical" }}
                                    value={aboutData}
                                    onChange={(event) =>
                                        setAboutData(event.target.value)
                                    }
                                    className="rounded-3xs bg-white font-serif font-medium box-border w-full flex flex-row  py-[0.9rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
                                />
                            </div>
                            <div className="flex justify-end w-full gap-3">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="flex items-center justify-center whitespace-nowrap rounded-lg mt-5 bg-gray-500 px-6 pt-2.5 pb-2 text-xs font-semibold uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none"
                                >
                                    close
                                </button>
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="flex items-center justify-center whitespace-nowrap rounded-lg mt-5 bg-deepskyblue px-6 pt-2.5 pb-2 text-xs font-semibold uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none"
                                >
                                    {loading ? (
                                        <svg
                                            aria-hidden="true"
                                            role="status"
                                            className="inline w-5 h-5 mr-5 text-gray-200 animate-spin"
                                            viewBox="0 0 100 101"
                                            fill="#fff"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="#1C64F2"
                                            />
                                        </svg>
                                    ) : (
                                        <span> submit </span>
                                    )}

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }

        </section>
    )
}
