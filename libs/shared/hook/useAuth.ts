import { useEffect } from "react";
import { useAtom } from "jotai";
import { useUpdateAtom, useAtomValue} from "jotai/utils";
import { currentUserAtom, isLoggedInAtom, sessionToken } from "./../atom/index";
import { socket } from "./../api";
import { User } from "..";

export function useAuth() {
  const user = useAtomValue(currentUserAtom);
  const setUser = useUpdateAtom(currentUserAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  const token = useAtomValue(sessionToken);
  const setToken = useUpdateAtom(sessionToken);

  useEffect(() => {
    let currentUser = localStorage?.getItem("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  useEffect(() => {
    if (user){
        setIsLoggedIn(true);
        updateSessionToken(user.token)
        socket.updateAuth(user.token);
        console.log('xxxxx')
    }else{   
        setIsLoggedIn(false);
        updateSessionToken(null)
    }
  }, [user]);

  const refreshToken = (newToken: string): void => {
    if(user){
      user.token = newToken;
      localStorage?.setItem("currentUser", JSON.stringify(user));
      setUser(user);
    }
  };

  const updateUser = (updatedUser: User): void => {
    localStorage?.setItem("currentUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const updateSessionToken = (token:string | null) => {
    setToken(token)
  }

  const logOut = () : void => {
    localStorage?.removeItem("currentUser");
    setUser(undefined)
  }

  return { user, isLoggedIn, token,  refreshToken, updateUser, updateSessionToken, logOut };
}
