import axios ,{AxiosInstance, AxiosRequestConfig, RawAxiosRequestHeaders, AxiosResponse } from "axios";


const baseUrl: string | undefined  = process.env.BACKEND_LOCAL_URL 



type AxiosProps = {
    method: string,
    path: string,
    pathData?: any
}


export default function useAxios(token?: string) {

let config: AxiosRequestConfig ;

let headers: RawAxiosRequestHeaders;

  if (token) {
    headers = {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true
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
