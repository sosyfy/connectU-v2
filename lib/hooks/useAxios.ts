
import axios ,{AxiosInstance, AxiosRequestConfig, RawAxiosRequestHeaders, AxiosResponse } from "axios";
import { useSession } from "next-auth/react";

const baseUrl: string  = "http://localhost:8000/v1";

type AxiosProps = {
    method: string,
    path: string,
    pathData?: any
}

export default function useAxios() {

 let config: AxiosRequestConfig ;

  const { data, status } : { data: any , status : string } = useSession();

  const token = data?.user.token.token
 
  var headers: RawAxiosRequestHeaders;

  if (token && status === "authenticated") {
    headers = {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    };
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }
 
const axiosInstance: AxiosInstance = axios.create({
    headers: headers,
    timeout: 200000,
  });


 
 function request({ method ,pathData ,path }: AxiosProps){

    if (pathData ){
        config ={
            url: path,
            baseURL: baseUrl,
            method: method,
            data: pathData
        }
     } else {
        config ={
            url: path,
            baseURL: baseUrl,
            method: method    
        } 
     }

    const response: Promise<AxiosResponse> = axiosInstance(config)
    return response
 }
  
  return request
}
