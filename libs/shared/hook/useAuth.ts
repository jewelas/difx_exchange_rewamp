import { useEffect } from "react";
import { AxiosResponse } from "axios";
import { axiosInstance as instance, axiosAuthorization } from "./../api/index";
import { useAtom } from "jotai";
import { notification } from 'antd';
import { socket } from "./../api";
import {
  currentUserAtom,
  isLoggedInAtom,
  permissionsAtom,
  User,
  Permissions
} from "..";
import { API_ENDPOINT } from "..";

export function useAuth() {
  const [user, setUser] = useAtom(currentUserAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [permissions, setPermissions] = useAtom(permissionsAtom);

  useEffect(()=>{
    if(!isLoggedIn){
      let currentUser: User = JSON.parse(localStorage?.getItem("currentUser") || "null")
      const sessionToken = localStorage.getItem("sessionToken");
      if(currentUser){
        let permissions: Permissions = JSON.parse(localStorage?.getItem("permissions") || "null")
        const stateUser: any = currentUser
        socket.updateAuth(sessionToken || currentUser.token.accessToken);
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
    socket.updateAuth(updatedUser.token.accessToken);
    const stateUser: any = updatedUser
    delete stateUser?.token
    setUser(stateUser);
    setPermissions(permission)
    setIsLoggedIn(true);
  };

  const logOut = () : void => {
    localStorage?.removeItem("currentUser")
    localStorage?.removeItem("sessionToken")
    localStorage?.removeItem("refreshToken")
    localStorage?.removeItem("permissions")
    localStorage?.removeItem("favoriteSpotPairs")
    localStorage?.removeItem("favoriteFuturePairs")
    setUser(undefined);
    setPermissions(undefined)
    setIsLoggedIn(false);
  }

  const refreshToken = async() => {
    
    if(!user) {
      logOut()
      return
    }

    let refreshToken = localStorage?.getItem("refreshToken")

    const reqData = {
      id: user.id,
      refreshToken
    }
    
    //use axios instance instead of useHttpPost because otherwise it will cause a loop of hooks
    instance.interceptors.request.use(axiosAuthorization)

    
    try{
      const response =  await instance.post<Request ,AxiosResponse>(API_ENDPOINT.REFRESH_TOKEN,reqData)
      const { data } = response.data
      localStorage?.setItem("sessionToken", data.accessToken)
      localStorage?.setItem("refreshToken", data.refreshToken)
    }catch(err){
      logOut()
      notification.error({
          message: "Oops",
          description: "Token Expired, Login Again",
      });
    }
  };

  return {
    user,
    isLoggedIn,
    permissions,
    updateSession,
    refreshToken,
    logOut,
   };
}
