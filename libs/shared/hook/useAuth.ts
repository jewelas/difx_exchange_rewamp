import { useEffect, useCallback } from "react";
import { AxiosResponse, AxiosError } from "axios";
import { useAtom } from "jotai";
import {
  currentUserAtom,
  isLoggedInAtom,
  permissionsAtom,
  configAtom
} from "../atom/index";
import { useHttpPost } from "./useHttp";
import { API_ENDPOINT } from "@difx/shared";

export function useAuth() {
  const [user, setUser] = useAtom(currentUserAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [permissions, setPermissions] = useAtom(permissionsAtom);

  useEffect(()=>{
    if(!isLoggedIn){
      let currentUser = JSON.parse(localStorage?.getItem("currentUser"))

      if(currentUser){
        let permissions = JSON.parse(localStorage?.getItem("permissions"))
        delete currentUser.token
        setUser(currentUser);
        setPermissions(permissions)
        setIsLoggedIn(true);
      }
    }
  },[isLoggedIn])

  const updateSession = (updatedUser, permission): void => {
    localStorage?.setItem("currentUser", JSON.stringify(updatedUser))
    localStorage?.setItem("sessionToken", updatedUser.token.accessToken)
    localStorage?.setItem("refreshToken", updatedUser.token.refreshToken)
    localStorage?.setItem("permissions", JSON.stringify(permission))
    delete updatedUser.token
    setUser(updatedUser);
    setPermissions(permission)
    setIsLoggedIn(true);
  };

  const updateSessionToken = (token:string | null) => {
    // get new token
    // update session token
  }

  const logOut = () : void => {
    localStorage?.removeItem("currentUser")
    localStorage?.removeItem("sessionToken")
    localStorage?.removeItem("refreshToken")
    localStorage?.removeItem("permissions")
    setUser(undefined);
    setPermissions(null)
    setIsLoggedIn(false);
  }

  return {
    user,
    isLoggedIn,
    permissions,
    updateSession,
    updateSessionToken,
    logOut,
   };
}
