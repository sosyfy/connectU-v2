"use client";

import { useState } from "react";
import useAxios from "@/lib/hooks/useAxios";
import useUserStore from "@/lib/state/store";
import EducationFormComponent from "./education-edit";

type Props = {
    user: User,
    loggedInUser: User | undefined
    token: string 
}

export default function Education({ user, loggedInUser, token }: Props) {
    const [showModal, setShowModal] = useState(false);
    const [ education , setEducation ] = useState(user.education)
    const [edit, setEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [editData, setEditData] = useState<EducationData>({
        schoolName: "",
        course: "",
        summary: "",
        _id: ""
    })


const updateUser = useUserStore((state) => state.update)

const request = useAxios(token);

    const openEditModal = (index : number ) => {
        setShowModal(true);
        setEdit(true);
        setEditIndex(index)
        setEditData(education[index])
    }


    const openCreateModal = () => {
        setShowModal(true);
        setEdit(false);
    }
 
    const handleSubmit =  ( list: any) => {
        let editData 
        if(!edit) {
          delete(list._id)
          editData = [list, ...education]
        } else {
        const data = education.filter(( ed, index)=> index !== editIndex )
        data.push(list)
        editData = [...data ] 
        }
        
        if (token !== undefined) {
          setLoading(true);
         
          request({
            method: "post",
            path: `/user/update-user/${user._id}`,
            pathData: JSON.stringify({...user, education: editData })
          }).then((response) => {
            setEducation(response.data.education);
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
            <div className="p-[1.2rem] pb-[2.2rem]">
                <div className="flex items-center justify-between">
                    <h2 className="flex-1 font-semibold text-textblack-100">Education</h2>
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
            { education.map(( edu, index ) => (
                <div className="grid p-[1.2rem] mt-2 relative" key={edu._id}>
                    <h1 className='text-[1.2rem] text-textblack-200/70 font-semibold tracking-loose'>{edu.schoolName}</h1>
                    <h2 className='text-[1rem]  font-medium mt-1 text-textblack-200'>{edu.course}</h2>
                    <p className='mt-3 text-dimgray text-[1.08rem] font-normal'> {edu.summary}</p>
                    {loggedInUser?._id === user?._id && (
                        <button onClick={() => openEditModal(index)} className="absolute grid p-2 rounded-full top-2 right-5 focus:outline-none hover:bg-zinc-200 place-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </button>
                    )}
                </div>
            ))}



            {showModal &&
                <div className="fixed inset-0 z-20 overflow-y-auto outline-none bg-whitesmoke/90 focus:outline-none">
                    <div className="px-4 py-6 mx-auto z-40 overflow-auto mt-[18%] bg-gray-300 rounded-lg shadow w-fit lg:w-2/5">
                        <EducationFormComponent
                            edit={edit}
                            prevEducation={editData}
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
