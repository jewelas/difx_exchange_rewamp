import { useEffect } from "react";
import { AxiosResponse } from "axios";
import { axiosInstance as instance } from "./../api/index";
import { useAtom } from "jotai";
import {
  isLoggedInAtom,
  permissionsAtom,
  anonymousTokenAtom,
  configAtom
} from "../atom/index";
import { useRefreshToken } from "./useRefreshToken";

useGuestAuth.isFetchingToken = false;

export function useGuestAuth() {
  const [isLoggedIn] = useAtom(isLoggedInAtom);
  const [permissions, setPermissions] = useAtom(permissionsAtom);
  const [anonymousToken, setAnonymousToken] = useAtom(anonymousTokenAtom);
  const [config, setConfig] = useAtom(configAtom);
  const { refreshAnonymousToken } = useRefreshToken()

  useEffect(() => {
    if(!isLoggedIn){
      let anonymousToken = localStorage?.getItem("anonymousToken")

      if(anonymousToken) {
        if(!permissions && !config){
          let permissions = JSON.parse(localStorage?.getItem("permissions") || "null")
          let config = JSON.parse(localStorage?.getItem("config")  || "null")
          setPermissions(permissions)
          setConfig(config)
          setAnonymousToken(anonymousToken)
        }
        return
      }

      setTimeout(async ()=>{
        if(!useGuestAuth.isFetchingToken){
          useGuestAuth.isFetchingToken = true;
          await refreshAnonymousToken();
          useGuestAuth.isFetchingToken = false;
        }
      },500);
    }
  }, [isLoggedIn]);

  return {anonymousToken, permissions, config};
}
