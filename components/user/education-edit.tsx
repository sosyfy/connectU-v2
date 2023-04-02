"use client"
import { useState } from 'react';


interface EducationProps {
    prevEducation?: EducationData ,
    onSave: any,
    edit: boolean,
    loading: boolean,
    closeModal: any
}
const EducationFormComponent = ({ prevEducation, onSave, edit, loading, closeModal }: EducationProps) => {
  const [education, setEducation] = useState<EducationData | any >( edit ? prevEducation : {
    schoolName: "",
    course: "",
    summary: "",
    _id: ""
});


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(education);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full my-auto overflow-auto">
      <h2 className="mb-4 text-xl font-semibold">Add Education</h2>
      <div className="flex flex-col mb-4">
        <label className="mb-1 font-bold text-gray-700" htmlFor="school">
          School:
        </label>
        <input
          id="school"
          type="text"
          value={education.schoolName}
          onChange={(event) =>
            setEducation({ ...education, schoolName: event.target.value })
          }
          className="rounded-3xs bg-white font-serif font-medium box-border w-full flex flex-row  py-[0.9rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"

        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-1 font-bold text-gray-700" htmlFor="degree">
          Course:
        </label>
        <input
          id="degree"
          type="text"
          value={education.course}
          onChange={(event) =>
            setEducation({ ...education, course: event.target.value })
          }
          className="rounded-3xs bg-white font-serif font-medium box-border w-full flex flex-row  py-[0.9rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label className="mb-1 font-bold text-gray-700" htmlFor="fieldOfStudy">
        Summary:
        </label>
        <textarea
          id="summary"
          rows={4}
          style={{ resize: "vertical" }}
          value={education.summary}
          onChange={(event) =>
            setEducation({ ...education, course: event.target.value })
          }
          className="rounded-3xs bg-white font-serif font-medium box-border w-full flex flex-row  py-[0.9rem] px-[1rem] items-center justify-end border-[1px] border-solid border-gainsboro-200"
        />
      </div>
      <div className="flex justify-end w-full gap-3">
                <button
                    onClick={()=>closeModal()}
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
  );
};

export default EducationFormComponent;