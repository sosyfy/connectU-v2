"use client"
import { ChangeEvent, useState } from 'react';
{/* eslint-disable @next/next/no-img-element */ }
import useAxios from './../../lib/hooks/useAxios';
import useClientToken from './../../lib/hooks/useClientToken';


const WriteNewPost = ( {getPosts }: any ) => {
  const [title, setTitle] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState<any>();
  
  let token = useClientToken()
  const request = useAxios(token)

const handleCreatePost = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    try {
      let filename = null

      if (photo) {
        const formData = new FormData()
        filename = crypto.randomUUID() + photo.name
        formData.append("filename", filename)
        formData.append("image", photo)
        console.log(photo);

        if(token !== undefined){
          setLoading(true)

        await fetch(`http://localhost:8000/v1/upload/image`, {
            headers: {
              "Authorization": `Bearer ${token}`
            },
            method: 'POST',
            body: formData
          }).then((response) => {
              console.log(response);
          }).catch((error)=>{
             console.log(error);
          })
        }
      }

      if( token !== undefined ){
        await request({
          method: "post",
          path: "/post",
          pathData: JSON.stringify({title, photo: filename })

        }).then((response) => {
            console.log(response.data);
            setLoading(false);
            getPosts();
        }).catch((error)=>{
           console.log(error);
           setLoading(false)
        })
      }
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className="overflow-hidden text-[1rem] text-dimgray font-roboto rounded-2xl bg-white shadow-[0px_0px_2px_rgba(0,_0,_0,_0.14),_0px_0px_1px_rgba(0,_0,_0,_0.12)] w-full">
      <form onSubmit={handleCreatePost}>
        <div className="relative w-full pt-4">
          <textarea
            rows={3}
            style={{resize: "vertical"}}
            onChange={(e: ChangeEvent<HTMLInputElement> | any) => setTitle(e.target.value)}
            placeholder="Write something"
            className="w-full pl-16 mt-4 border-0 outline-none focus:border-0 focus:outline-none"
          />
          <img
            className="absolute top-8 left-[1.5rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
            alt=""
            src="../edit.svg"
          />
        </div>
        {
          show && (
            <>
            <div className="">{photo && photo.name }</div>
            <div className="flex items-center justify-center w-full p-2">
              <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gainsboro-200 ">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg aria-hidden="true" className="w-6 h-6 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  name='image'
                  onChange={(e: ChangeEvent<HTMLInputElement> | any) => setPhoto(e.target.files[0])}
                  className="hidden" />
              </label>
            </div>
            </>
          )
        }

        <img
          className="w-full h-[0.06rem]"
          alt=""
          src="../line.svg"
        />
        <div className="flex items-center justify-around py-4">
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="flex items-center gap-4"
          >
            <svg width="24" className="w-[1.5rem] h-[1.5rem]" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.3287 2C19.7319 2 22 4.42887 22 7.91408V16.0849C22 19.5703 19.7318 22 16.3287 22H7.66132C4.25977 22 2 19.5722 2 16.0849V7.91408C2 4.43059 4.26636 2 7.66132 2H16.3287ZM16.3287 3.50383H7.66132C5.12066 3.50383 3.50301 5.2387 3.50301 7.91408V16.0849C3.50301 18.7647 5.11469 20.4962 7.66132 20.4962H16.3287C18.8779 20.4962 20.497 18.7618 20.497 16.0849V7.91408C20.497 5.23744 18.8781 3.50383 16.3287 3.50383ZM17.0409 12.1835L17.1712 12.3086L19.2514 14.4561C19.5402 14.7543 19.5328 15.2303 19.2347 15.5193C18.9638 15.7821 18.546 15.7998 18.2552 15.5768L18.1721 15.5027L16.092 13.3553C15.7296 12.9814 15.1405 12.9779 14.7727 13.3269L14.692 13.4137L12.4589 16.1312C11.669 17.0939 10.2478 17.1971 9.32825 16.3903L9.20607 16.2747L8.31486 15.3648C8.08076 15.1217 7.70743 15.0987 7.44746 15.2949L7.36534 15.3684L5.83328 16.9855C5.54775 17.2869 5.07209 17.2996 4.77087 17.0139C4.49704 16.7542 4.46164 16.3373 4.67199 16.0372L4.74247 15.9509L6.27421 14.3341C7.0806 13.4819 8.40852 13.4365 9.26752 14.1967L9.39273 14.3167L10.2794 15.222C10.5386 15.4865 10.9541 15.4933 11.2219 15.2553L11.2976 15.1766L13.5309 12.4589C14.4182 11.3782 16.0159 11.2689 17.0409 12.1835ZM8.57265 6.64124C9.95763 6.64124 11.0817 7.76589 11.0817 9.15164C11.0817 10.5374 9.95763 11.662 8.57265 11.662C7.18772 11.662 6.06463 10.5374 6.06463 9.15164C6.06463 7.76583 7.18772 6.64124 8.57265 6.64124ZM8.57265 8.14507C8.01807 8.14507 7.56764 8.59611 7.56764 9.15164C7.56764 9.70716 8.01807 10.1582 8.57265 10.1582C9.12754 10.1582 9.57866 9.70684 9.57866 9.15164C9.57866 8.59643 9.12754 8.14507 8.57265 8.14507Z" fill="#666666" />
            </svg>
            <div className="">Photo</div>
          </button>

          <button type="submit" className="inline-flex items-center px-5 py-1.5 mr-2 bg-white border-2 rounded-lg border-dimgray/50 hover:border-deepskyblue hover:bg-transparent hover:text-deepskyblue focus:z-10 focus:ring-2 focus:ring-deepskyblue focus:text-deepskyblue">
           {loading && <svg aria-hidden="true" role="status" className="inline w-6 h-6 mr-3 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
            </svg> }
            post
          </button>

        </div>
      </form>
    </div>
  );
};

export default WriteNewPost;
