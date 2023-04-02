"use client"

import useAxios from "@/lib/hooks/useAxios"
import useUserStore from "@/lib/state/store"
import { useState } from "react"
import { EditSkills } from "./skills-edit"

type Props = {
    user: User,
    loggedInUser: User
    token: string 
}

export default function Skills({ user, loggedInUser , token }: Props) {
    const [skills, setSkills] = useState<string[]>(user.skills)
    const [showModal, setShowModal] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const updateUser = useUserStore((state) => state.update)

    const request = useAxios(token);

    
    const openEditModal = () => {
        setShowModal(true);
        setEdit(true);
    }
    const openCreateModal = () => {
        setShowModal(true);
        setEdit(false);
    }
    const handleSubmit =  ( skillsList: any) => {
        
        if (token !== undefined) {
          setLoading(true);
         
          request({
            method: "post",
            path: `/user/update-user/${user._id}`,
            pathData: JSON.stringify({...user, skills: skillsList, _id : undefined })
          }).then((response) => {
            setSkills(response.data.skills);
            setShowModal(false);
            updateUser(response.data);
            setLoading(false);
            
          }).catch((error) => {
            console.log(error);
            setLoading(false)
          })
        }
      };

    return (
        <section className='pb-2 bg-white rounded-lg shadow border-dimgray'>
            {/* top part  */}
            <div className="p-[1.2rem] pb-0">
                <div className="flex items-center justify-between">
                    <h2 className="flex-1 font-semibold text-textblack-100">SKills</h2>

                    {loggedInUser?._id === user?._id && (
                        <div className="flex items-center gap-2 icons">

                            <button onClick={openCreateModal} className="grid p-2 rounded-full focus:outline-none hover:bg-zinc-200 place-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </button>
                            <button onClick={openEditModal} className="grid p-2 rounded-full focus:outline-none hover:bg-zinc-200 place-content-center">
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
                <div className="flex flex-wrap gap-4">
                    {skills.map((skill, index) => (
                        <div key={skill + index} className='bg-transparent border-2 border-black/60 shadow-inner text-black/60 px-[1.6rem] py-1 rounded-full'>
                            {skill}
                        </div>
                    ))}
                </div>

                {showModal &&
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                        <div className="relative w-auto max-w-sm px-4 py-6 mx-auto bg-gray-300 rounded-lg shadow">
                            
                            <EditSkills
                                edit={edit}
                                prevSkills={loggedInUser.skills}
                                loading={loading}
                                onSave={handleSubmit}
                                closeModal={()=> setShowModal(false)}
                            />
                        </div>
                    </div>
                }
            </div>

        </section>
    )
}
