import axios ,{AxiosInstance, AxiosRequestConfig, RawAxiosRequestHeaders, AxiosResponse } from "axios";


const baseUrl: string  = "http://localhost:8000/v1";

type AxiosProps = {
    method: string,
    path: string,
    pathData?: any
}


export default async function useAxios(token?: string) {

let config: AxiosRequestConfig ;

let headers: RawAxiosRequestHeaders;

  if (token) {
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
