"use client"
import { useState } from 'react';

interface Education {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}
interface EducationProps {
    prevEducation?: Education ,
    onSave: any,
    edit: boolean,
    loading: boolean,
    closeModal: any 
}
const EducationFormComponent = ({ prevEducation, onSave, edit, loading, closeModal }: EducationProps) => {
  const [education, setEducation] = useState<Education | any >( edit ? prevEducation : {
    school: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
  });


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(education);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 px-4 py-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Education</h2>
      <div className="flex flex-col mb-4">
        <label className="mb-1 text-gray-700 font-bold" htmlFor="school">
          School:
        </label>
        <input
          id="school"
          type="text"
          value={education.school}
          onChange={(event) =>
            setEducation({ ...education, school: event.target.value })
          }
          className="py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-1 text-gray-700 font-bold" htmlFor="degree">
          Degree:
        </label>
        <input
          id="degree"
          type="text"
          value={education.degree}
          onChange={(event) =>
            setEducation({ ...education, degree: event.target.value })
          }
          className="py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-1 text-gray-700 font-bold" htmlFor="fieldOfStudy">
          Field of Study:
        </label>
        <input
          id="fieldOfStudy"
          type="text"
          value={education.fieldOfStudy}
          onChange={(event) =>
            setEducation({ ...education, fieldOfStudy: event.target.value })
          }
          className="py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-1 text-gray-700 font-bold" htmlFor="startDate">
          Start Date:
        </label>
        <input
          id="startDate"
          type="date"
          value={education.startDate}
          onChange={(event) =>
            setEducation({ ...education, startDate: event.target.value })
          }
          className="py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-1 text-gray-700 font-bold" htmlFor="endDate">
          End Date:
        </label>
        <input
          id="endDate"
          type="date"
          value={education.endDate}
          onChange={(event) =>
            setEducation({ ...education, endDate: event.target.value })
          }
          className="py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default EducationFormComponent;