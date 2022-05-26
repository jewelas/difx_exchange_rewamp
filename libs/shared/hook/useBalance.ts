import { useEffect, useMemo, useState } from "react";
import { useHttpGetByEvent } from "..";
import { Balance } from './../type/Balance';
import { useSocketProps, SocketEvent, useSocketByEvent, useAPI } from "./../../shared";
import { API_ENDPOINT, QUERY_KEY } from "../constants"
import { currentUserAtom, isLoggedInAtom, userBalanceAtom } from "../atom/index"
import { useAtom } from "jotai";
import { AxiosResponse } from "axios";
import { useSocket } from "./useSocket";

export function useBalance() {
  const [isLoggedIn] = useAtom(isLoggedInAtom)
  const [currentUser] = useAtom(currentUserAtom)
  const [userBalance, setUserBalance] = useAtom(userBalanceAtom)
  const [overviewBalanceUSD, setOverviewBalanceUSD] = useState(0)
  const [spotBalanceUSD, setSpotBalanceUSD] = useState(0)
  const [futureBalanceUSD, setFutureBalanceUSD] = useState(0)
  const [spotYesterdayPnlUSD, setSpotYesterdayPnlUSD] = useState(0)
  const [rewardsBalanceUSD, setRewardsBalanceUSD] = useState(0)
  const [earnBalaceUSD, setEarnBalaceUSD] = useState(0)
  
  const { API } = useAPI()

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
  const data = useSocket({join:"BTCUSDT",event: SocketEvent.orderbook_limited});

  const currentBTCPrice = useMemo(()=>{
    if(data){
      const { asks, bids } = data
      return (asks[0][0] + bids[0][0])/2
    }else{
      return 0
    }
  },[data])

  // const totalSpotUSDBalance = useMemo(()=>{
  //   let totalbalance = 0
  //   userBalance.forEach(coin => {
  //     totalbalance += coin.amount
  //   })
  //   return Number(totalbalance.toFixed(2))
  // },[currentBTCPrice, userBalance])

  // const totalSpotBTCBalance = useMemo(()=>{
  //   if(totalSpotUSDBalance && currentBTCPrice){
  //     return Number((totalSpotUSDBalance/currentBTCPrice).toFixed(6))
  //   }else{
  //     return 0
  //   }
  // },[currentBTCPrice, totalSpotUSDBalance])

  const overviewBalanceBTC = useMemo(()=>{
    if(overviewBalanceUSD && currentBTCPrice){
      return Number((overviewBalanceUSD/currentBTCPrice).toFixed(6))
    }else{
      return 0
    }
  }, [currentBTCPrice, overviewBalanceUSD])

  const spotBalanceBTC = useMemo(()=>{
    if(spotBalanceUSD && currentBTCPrice){
      return Number((spotBalanceUSD/currentBTCPrice).toFixed(6))
    }else{
      return 0
    }
  }, [currentBTCPrice, spotBalanceUSD])

  const futureBalanceBTC = useMemo(()=>{
    if(futureBalanceUSD && currentBTCPrice){
      return Number((futureBalanceUSD/currentBTCPrice).toFixed(6))
    }else{
      return 0
    }
  }, [currentBTCPrice, futureBalanceUSD])

  const spotYesterdayPnlBTC = useMemo(()=>{
    if(spotYesterdayPnlUSD && currentBTCPrice){
      return Number((spotYesterdayPnlUSD/currentBTCPrice).toFixed(6))
    }else{
      return 0
    }
  }, [currentBTCPrice, spotYesterdayPnlUSD])

  const rewardsBalanceBTC = useMemo(()=>{
    if(rewardsBalanceUSD && currentBTCPrice){
      return Number((rewardsBalanceUSD/currentBTCPrice).toFixed(6))
    }else{
      return 0
    }
  }, [currentBTCPrice, rewardsBalanceUSD])

  const earnBalaceBTC = useMemo(()=>{
    if(earnBalaceUSD && currentBTCPrice){
      return Number((earnBalaceUSD/currentBTCPrice).toFixed(6))
    }else{
      return 0
    }
  }, [currentBTCPrice, earnBalaceUSD])

  
  const setInitialData = async() => {
    try{
      const overViewResponse = await API.get(API_ENDPOINT.GET_WALLET_OVERVIEW)
      const spotResponse = await API.get(API_ENDPOINT.GET_SPOT_OVERVIEW)
      const { spot, earn, future, reward } = overViewResponse?.data.data
      const { yesterdayPnl } = spotResponse?.data.data
      const totalbalance = (spot+ earn + future + reward)
      setOverviewBalanceUSD(totalbalance.toFixed(2))
      setSpotBalanceUSD(spot.toFixed(2))
      setSpotYesterdayPnlUSD(yesterdayPnl.toFixed(2))
      setFutureBalanceUSD(future.toFixed(2))
      setRewardsBalanceUSD(reward.toFixed(2))
      setEarnBalaceUSD(earn.toFixed(2))
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      getBalance(null)
      setInitialData()
      if (currentUser) send({ join: currentUser.id });
    } else {
      setUserBalance([])
    }
  }, [isLoggedIn])

  return {
    userBalance,
    setUserBalance,
    currentBTCPrice,
    overviewBalanceUSD,
    overviewBalanceBTC,
    spotBalanceUSD,
    spotBalanceBTC,
    // totalSpotUSDBalance,
    // totalSpotBTCBalance,
    futureBalanceUSD,
    futureBalanceBTC,
    spotYesterdayPnlUSD,
    spotYesterdayPnlBTC,
    rewardsBalanceUSD,
    rewardsBalanceBTC,
    earnBalaceUSD,
    earnBalaceBTC
  }
}
