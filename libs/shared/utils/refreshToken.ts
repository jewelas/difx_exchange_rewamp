import { axiosInstance as instance, axiosAuthorization } from "./../api/index";
import { AxiosError, AxiosResponse  } from "axios";
import { API_ENDPOINT, ANONYMOUS_TOKEN_EXPIRY } from "..";
import { User } from "../type/User"

export const refreshAnonymousToken = (deviceFingerprint: string) => {
  return new Promise(async(resolve,reject)=>{
    try{
      const reqData = {
        identifier: deviceFingerprint,
        device_type: "web",
        push_token: "21321321312"
      }
      
      //use axios instance instead of useHttpPost because otherwise it will cause a loop of hooks
      instance.interceptors.request.use(axiosAuthorization);
    
      instance.interceptors.response.use((response) => {
          return response
      }, (error: AxiosError) => {
          const { response } = error;
          const { statusCode } = response?.data;
          console.log(statusCode)
          return Promise.reject(error)
      })

      const response =  await instance.post<Request ,AxiosResponse>(API_ENDPOINT.GET_ANONYMOUS_TOKEN,reqData)
      const { data } = response.data
      let { anonymousToken, config, permission } = data
      localStorage?.setItem("anonymousToken", anonymousToken)
      localStorage?.setItem("permissions", JSON.stringify(permission))
      localStorage?.setItem("config", JSON.stringify(config))

      resolve(data)

      }catch(error){
        reject(error)
      }
  })
};

const refreshUserToken = async(user: User) => {
  return new Promise(async(resolve, reject) => {
    try{
      let refreshToken = localStorage?.getItem("refreshToken")
      const reqData = {
        id: user.id,
        refreshToken
      }
      
      //use axios instance instead of useHttpPost because otherwise it will cause a loop of hooks
      instance.interceptors.request.use(axiosAuthorization)
    
      instance.interceptors.response.use((response) => {
          return response
      }, (error: AxiosError) => {
          const { response } = error;
          const { statusCode } = response?.data;
          console.log(statusCode)
          return Promise.reject(error)
      })

      const response =  await instance.post<Request ,AxiosResponse>(API_ENDPOINT.REFRESH_TOKEN,reqData)
      const { data } = response.data
      localStorage?.setItem("sessionToken", data.accessToken)
      localStorage?.setItem("refreshToken", data.refreshToken)

      resolve(data)

    }catch(error){
      reject(error)
    }
  })

};