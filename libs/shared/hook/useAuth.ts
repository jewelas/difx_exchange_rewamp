import { useEffect, useCallback } from "react";
import { AxiosResponse, AxiosError } from "axios";
import { useAtom } from "jotai";
import {
  currentUserAtom,
  isLoggedInAtom,
  permissionsAtom,
  User,
  Permissions
} from "..";
import { useHttpPost } from "./useHttp";
import { API_ENDPOINT } from "..";

export function useAuth() {
  const [user, setUser] = useAtom(currentUserAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [permissions, setPermissions] = useAtom(permissionsAtom);

  useEffect(()=>{
    if(!isLoggedIn){
      let currentUser: User = JSON.parse(localStorage?.getItem("currentUser") || "null")

      if(currentUser){
        let permissions: Permissions = JSON.parse(localStorage?.getItem("permissions") || "null")
        const stateUser: any = currentUser
        delete stateUser?.token
        setUser(stateUser);
        setPermissions(permissions)
        setIsLoggedIn(true);
      }
    }
  },[isLoggedIn])

  const updateSession = (updatedUser: User, permission: Permissions): void => {
    localStorage?.setItem("currentUser", JSON.stringify(updatedUser))
    localStorage?.setItem("sessionToken", updatedUser.token.accessToken)
    localStorage?.setItem("refreshToken", updatedUser.token.refreshToken)
    localStorage?.setItem("permissions", JSON.stringify(permission))
    const stateUser: any = updatedUser
    delete stateUser?.token
    setUser(stateUser);
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
    setPermissions(undefined)
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
