import { useEffect } from "react";
import { useAtom } from "jotai";
import { currentUserAtom, isLoggedInAtom, sessionToken } from "../atom/index";
import { User } from "@difx/shared";

export function useAuth() {
  const [user, setUser] = useAtom(currentUserAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [token, setToken] = useAtom(sessionToken);

  useEffect(() => {
    let currentUser = localStorage?.getItem("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  useEffect(() => {
    if (user != undefined || null){
        setIsLoggedIn(true);
        updateSessionToken(user.token)
    }else{   
        setIsLoggedIn(false);
        updateSessionToken(null)
    }
  }, [user]);

  const refreshToken = (newToken: string): void => {
    user.token = newToken;
    localStorage?.setItem("currentUser", JSON.stringify(user));
    setUser(user);
  };

  const updateUser = (updatedUser: User): void => {
    localStorage?.setItem("currentUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const updateSessionToken = (token) => {
    setToken(token)
  }

  const logOut = () : void => {
    localStorage?.removeItem("currentUser");
    setUser(undefined)
  }

  return { user, isLoggedIn, token,  refreshToken, updateUser, updateSessionToken, logOut };
}
