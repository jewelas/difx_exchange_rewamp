import { useEffect } from "react";
import { useHttpGetByEvent } from "..";
import { Balance } from './../type/Balance';
import { useSocketProps, SocketEvent, useSocketByEvent } from "./../../shared";
import { API_ENDPOINT, QUERY_KEY } from "../constants"
import { currentUserAtom, isLoggedInAtom, userBalanceAtom } from "../atom/index"
import { useAtom } from "jotai";
import { AxiosResponse } from "axios";

export function useBalance() {
  const [isLoggedIn] = useAtom(isLoggedInAtom);
  const [currentUser] = useAtom(currentUserAtom);
  const [userBalance, setUserBalance] = useAtom(userBalanceAtom)

  // Call API to get balance
  const onSuccess = (response: AxiosResponse) => {
    const { data } = response
    setUserBalance(data)
  }
  const { mutate: getBalance } = useHttpGetByEvent<null, any>({ onSuccess, endpoint: API_ENDPOINT.GET_BALANCE });

  // Update balance from Socket
  const onReceivedWSData = (balanceData: any) => {
    if (balanceData) {
      const index = userBalance.findIndex(e => e.currency === balanceData.currency);
      if (index !== -1) {
        userBalance[index].amount += balanceData.change;
        // Update in another thread
        setTimeout(()=>{setUserBalance(userBalance)},500)
      }
    }
  }
  const { send } = useSocketByEvent({ event: SocketEvent.user_balances, onSuccess: onReceivedWSData });

  useEffect(() => {
    if (isLoggedIn) {
      getBalance(null)
      if (currentUser) send({ join: currentUser.id });
    } else {
      setUserBalance([])
    }
  }, [isLoggedIn])

  return {
    userBalance,
    setUserBalance
  }
}
