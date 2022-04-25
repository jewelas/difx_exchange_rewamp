import { useEffect } from "react";
import { useAtom } from "jotai";
import { currentUserAtom, isLoggedInAtom } from "../atom/index";
import { User } from "@difx/shared";

export function useAuth() {
  const [user, setUser] = useAtom(currentUserAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  useEffect(() => {
    let currentUser = localStorage?.getItem("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  useEffect(() => {
    if (user != undefined || null){
        setIsLoggedIn(true);
    }else{
        setIsLoggedIn(false);
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

  return { user, isLoggedIn, refreshToken, updateUser };
}
