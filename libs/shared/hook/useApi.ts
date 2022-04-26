import axios from "axios"
import { useQuery } from 'react-query'
import { useAuth } from "../hook/useAuth"
import { apiList } from "../api/apiList"
import { notification } from 'antd';

interface apiDataInterface {
  method: string
  url: string
}

export default function useApi() {
  const { token } = useAuth()

  const axiosInstance = axios.create({
    baseURL: process.env["NX_API_URL"],
    headers: {
      "x-access-token": token
    }
  });

  // const sendRequest = () => {
  //   switch (apiData.method) {
  //     case "POST":
  //       return axiosInstance.post(apiData.url,data)
  //     case "GET":
  //       return axiosInstance.get(apiData.url)
  //     default: 
  //       return null
  //   }
  // }

  // return useQuery(`${apiName}`, sendRequest)
  
  // const { data, error, isSuccess, isLoading } = useQuery(`${apiName}`, () => {
  //   switch (apiData.method) {
  //     case "POST":
  //       return axiosInstance.post(apiData.url,reqData)
  //     case "GET":
  //       return axiosInstance.get(apiData.url)
  //     default: 
  //       return null
  //   }
  // })

  // if(error){
  //   notification.open({
  //     message: `'Notification Title'`,
  //     description:'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  //   });
  // }
  
  const getData = async (apiName : string) => {
    try{
      let apiInfo : apiDataInterface = apiList[apiName]
      let data = await axiosInstance.get(apiInfo.url)
      return data
    }catch(err){
      notification.open({
        message: err.data.statustext,
        description: err.data.message,
      });
    }
  }

  const postData = async(apiName : string, reqData : object) => {
    try{
      let apiInfo : apiDataInterface = apiList[apiName]
      let data = await axiosInstance.post(apiInfo.url,reqData)
      return data
    }catch(err){
      notification.open({
        message: err.data.statustext,
        description: err.data.message,
      });
    }
  }

  return { getData, postData }
} 