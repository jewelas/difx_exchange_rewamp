import { useEffect } from "react";
import { useHttpGetByEvent } from "..";
import { Balance } from './../type/Balance'
import { API_ENDPOINT, QUERY_KEY } from "../constants"
import { isLoggedInAtom, userBalanceAtom } from "../atom/index"
import { useAtom } from "jotai";
import { AxiosResponse } from "axios";


export function useBalance() {
  const [isLoggedIn] = useAtom(isLoggedInAtom)
  const [userBalance, setUserBalance] = useAtom(userBalanceAtom )

  const onSuccess = (response: AxiosResponse) => {
    const { data } = response
    setUserBalance(data)
  }
  
  const { mutate: getBalance } = useHttpGetByEvent<null, any>({ onSuccess, endpoint: API_ENDPOINT.GET_BALANCE });

  useEffect(() => {
    if(isLoggedIn){
      getBalance(null)
    }else{
      setUserBalance([])
    }
  }, [isLoggedIn])


  return {
    userBalance,
    setUserBalance
  }
}
