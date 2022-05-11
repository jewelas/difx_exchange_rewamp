import { useEffect } from "react";
import { AxiosResponse } from "axios";
import { axiosInstance as instance } from "./../api/index";
import { useAtom } from "jotai";
import {
  isLoggedInAtom,
  permissionsAtom,
  configAtom
} from "../atom/index";
import { API_ENDPOINT } from "..";
import { useFingerprint } from "..";

export function useGuestAuth() {
  const [isLoggedIn] = useAtom(isLoggedInAtom);
  const [permissions, setPermissions] = useAtom(permissionsAtom);
  const [config, setConfig] = useAtom(configAtom);
  const { getFingerprint } = useFingerprint() 


  useEffect(() => {
    if(!isLoggedIn){
      let anonymousToken = localStorage?.getItem("anonymousToken")

      if(anonymousToken) {
        if(!permissions && !config){
          let permissions = JSON.parse(localStorage?.getItem("permissions") || "null")
          let config = JSON.parse(localStorage?.getItem("config")  || "null")
          setPermissions(permissions)
          setConfig(config)
        }
        return
      }

      console.log
  
      refreshAnonymousToken()
    }
  }, [isLoggedIn]);

  const refreshAnonymousToken = async() => {
    const deviceFingerprint = await getFingerprint()
    const reqData = {
      identifier: deviceFingerprint,
      device_type: "web",
      push_token: "21321321312"
    }
    
    //use axios instance instead of useHttpPost because otherwise it will cause a loop of hooks
    instance.interceptors.request.use(function (config: any) {
        const anonymousToken = localStorage?.getItem('anonymousToken');
        const sessionToken = localStorage?.getItem('sessionToken');
        // @ts-ignore
        config.headers["x-access-token"] =  anonymousToken ? anonymousToken : "";
        // @ts-ignore
        config.headers["Authorization"] =  sessionToken ? sessionToken : "";
        // @ts-ignore
        config.headers["x-api-key"]=  "DIFXExchange";
        // @ts-ignore
        config.headers["Device"]=  "web";
        return config;
    })

    try{
      const response =  await instance.post<Request ,AxiosResponse>(API_ENDPOINT.GET_ANONYMOUS_TOKEN,reqData)
      const { data } = response.data
      let { anonymousToken, config, permission } = data
      localStorage?.setItem("anonymousToken", anonymousToken)
      localStorage?.setItem("permissions", JSON.stringify(permission))
      localStorage?.setItem("config", JSON.stringify(config))
      setPermissions(permission)
      setConfig(config)
    }catch(err){
      console.log(err)
    }
  };

  return {permissions, config, refreshAnonymousToken};
}
