import { useEffect, useCallback } from "react";
import { AxiosResponse, AxiosError } from "axios";
import { useAtom } from "jotai";
import {
  isLoggedInAtom,
  permissionsAtom,
  configAtom
} from "../atom/index";
import { useHttpPost } from "./useHttp";
import { API_ENDPOINT } from "..";

export function useGuestAuth() {
  const [isLoggedIn] = useAtom(isLoggedInAtom);
  const [permissions, setPermissions] = useAtom(permissionsAtom);
  const [config, setConfig] = useAtom(configAtom);

  const onSuccess = useCallback((response: AxiosResponse) => {
    let { anonymousToken, config, permission } = response.data.data
    localStorage?.setItem("sessionToken", anonymousToken)
    localStorage?.setItem("permissions", JSON.stringify(permission))
    localStorage?.setItem("config", JSON.stringify(config))
    setPermissions(permission)
    setConfig(config)
  }, []);

  const onError = useCallback((response: AxiosError) => {
    console.log(response)
  }, []);

  const { mutate: getAnonymusToken } = useHttpPost({ onSuccess, onError, endpoint: API_ENDPOINT.GET_ANONYMOUS_TOKEN});

  useEffect(() => {
    if(!isLoggedIn){
      let sessionToken = localStorage?.getItem("sessionToken")

      if(sessionToken) {
        if(!permissions && !config){
          let permissions = JSON.parse(localStorage?.getItem("permissions") || "null")
          let config = JSON.parse(localStorage?.getItem("config")  || "null")
          setPermissions(permissions)
          setConfig(config)
        }
        return
      }
      
      let deviceConfig = {
        identifier: "1234",
        device_type: "web",
        push_token: "21321321312"
      }
      getAnonymusToken(deviceConfig)
    }
  }, [isLoggedIn]);

  return {permissions, config};
}
