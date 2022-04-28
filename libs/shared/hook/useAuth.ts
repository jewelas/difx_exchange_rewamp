import { useEffect, useCallback } from "react";
import { useAtom } from "jotai";
import { useUpdateAtom, useAtomValue} from "jotai/utils";
import { currentUserAtom, isLoggedInAtom } from "../atom/index";
import { User } from "..";
// import { useHttpPost } from "./useHttp";
// import { API_ENDPOINT } from "@difx/shared";

export function useAuth() {
  const user = useAtomValue(currentUserAtom);
  const setUser = useUpdateAtom(currentUserAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  // const onSuccess = useCallback((response: AxiosResponse<>) => {

  // }

  // const onError = () => {

  // }

  // const { mutate: refreshSessionToken, isLoading } = useHttpPost({ onSuccess, onError, endpoint: API_ENDPOINT.REFRESH_TOKEN });

  // const { mutate: getAnonymusToken } = useHttpPost({ onSuccess, onError, endpoint: API_ENDPOINT.GET_ANONYMOUS_TOKEN});

  useEffect(() => {
    let currentUser  =  JSON.parse(localStorage?.getItem("currentUser")!);
    if (currentUser) {
      delete currentUser.token
      setUser(currentUser);
    }else{
      let config = {
        identifier: "1234",
        device_type: "web",
        push_token: "21321321312"
      }
      // getAnonymusToken(config)
    }
  }, []);

  useEffect(() => {
    if (user){
        setIsLoggedIn(true);
        updateSessionToken(user.token)
    }else{   
        setIsLoggedIn(false);
        updateSessionToken(null)
    }
  }, [user]);

  const refreshToken = (newToken: string): void => {
    // if(user){
    //   user.token = newToken;
    //   localStorage?.setItem("currentUser", JSON.stringify(user));
    //   setUser(user);
    // }
  };

  // const updateUser = (updatedUser): void => {
  //   localStorage?.setItem("currentUser", JSON.stringify(updatedUser));
  //   delete updatedUser.token
  //   setUser(updatedUser);
  // };

  const updateSessionToken = (token:string | null) => {
    let currentUser = JSON.parse(localStorage?.getItem("currentUser")!);
    if(currentUser){
      localStorage?.setItem("sessionToken",currentUser.token)
    }
  }

  const logOut = () : void => {
    localStorage?.removeItem("currentUser");
    setUser(undefined)
  }

  return { user, isLoggedIn,  refreshToken, updateSessionToken, logOut };
}
