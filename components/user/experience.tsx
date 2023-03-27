"use client";

import { useState } from "react";
import ExperienceFormComponent from "./experience-edit";

type Props = {
    user: User,
    loggedInUser: User | undefined
}

export default function Experience({ user, loggedInUser }: Props) {
    const [showModal, setShowModal] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [editData, setEditData] = useState<ExperienceData>({
        position: '',
        company: '',
        summary: '',
        startDate: '',
        endDate: '',
        location: '',
        _id: ''
    })

    const openEditModal = (data: ExperienceData) => {
        setShowModal(true);
        setEdit(true);
        setEditData(data)
    }
    const openCreateModal = () => {
        setShowModal(true);
        setEdit(false);
    }

    const handleSubmit = (skillsList: any) => {
        setShowModal(false);

    }
    return (
        <section className='pb-2 bg-white rounded-lg shadow border-dimgray'>
            {/* top part  */}
            <div className="p-[1.2rem] pb-[2.2rem]">
                <div className="flex items-center justify-between">
                    <h2 className="flex-1 font-semibold text-textblack-100">Experience</h2>
                    <div className="flex items-center gap-2 icons">

                        {loggedInUser?._id === user?._id && (
                            <button onClick={openCreateModal} className="grid p-2 rounded-full focus:outline-none hover:bg-zinc-200 place-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* things    */}
            {user.experience?.map(exp => (
                <div className="grid p-[1.2rem] relative" key={exp._id}>
                    <h1 className='text-[1.2rem] text-textblack-200/70 font-semibold tracking-loose'>{exp.position}</h1>
                    <h2 className='text-[1rem]  font-medium mt-1 text-textblack-200'>{exp.company}</h2>
                    <p className='text-[0.88rem] mt-1 font-normal tracking-looser'> <span>{exp.startDate}</span> - <span>{exp.endDate}</span>  <span>20 months</span> </p>
                    <p className='text-[0.97rem] mt-1 font-normal tracking-looser'> {exp.location} </p>
                    <p className='mt-3 text-dimgray text-[1.08rem] font-normal'>{exp.summary}</p>
                    {loggedInUser?._id === user?._id && (
                        <button onClick={() => openEditModal(exp)} className="absolute grid p-2 rounded-full top-2 right-5 focus:outline-none hover:bg-zinc-200 place-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </button>
                    )}
                </div>

            ))}


            {showModal &&
                <div onClick={() => setShowModal(false)} className="fixed inset-0 z-20 flex items-center justify-center mt-20 overflow-hidden outline-none bg-whitesmoke/10 focus:outline-none">
                    <div className="relative w-4/5 px-4 mt-[12%] py-6 mx-auto bg-gray-300 rounded-lg shadow overflow-y-auto lg:w-2/5">
                        <ExperienceFormComponent
                            edit={edit}
                            prevExperience={editData}
                            loading={loading}
                            onSave={handleSubmit}
                            closeModal={() => setShowModal(false)}
                        />
                    </div>
                </div>
            }
        </section>
    )
}
