import { API_ENDPOINT, STORE_KEY, QUERY_KEY } from "../constants/index";
import { useAtom } from "jotai";
import { currentUserAtom } from "../atom";
import { useAPI } from "../hook/useHttp"
import { marketSpotFavoritesListAtom, marketFutureFavoritesListAtom } from ".."
import { useEffect, useState } from "react";
import { useHttpGet } from "./useHttp";

export const useFavourites = () => {

  // const { data: marketData } = useHttpGet<null, any>(QUERY_KEY.MARKET_PAIRS, API_ENDPOINT.GET_MARKET_PAIRS, {});

  const [ marketData, setMarketData ] = useState(null)
  const [spotFavourite, setSpotFavourite] = useAtom(marketSpotFavoritesListAtom)
  const [futureFavourite, setFutureFavourite] = useAtom(marketFutureFavoritesListAtom)
  const [currentUser] = useAtom(currentUserAtom)
  const { API } = useAPI()

  const init = async() => {
    try{
      const response = await API.get(API_ENDPOINT.GET_MARKET_PAIRS)
      const { data } = response?.data
      setMarketData(data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    init()
  },[])

  useEffect(()=>{
    if(marketData){
      if(currentUser){
        const { spot, futures } = marketData
        // eslint-disable-next-line
        // @ts-ignore
        const userSpotFav = spot.filter((item: any) => item.favorite === true)
        // eslint-disable-next-line
        // @ts-ignore
        const userFutureFav = futures.filter((item: any) => item.favorite === true)
        localStorage.setItem(STORE_KEY.FAVORITE_SPOT_PAIRS, JSON.stringify(userSpotFav))
        localStorage.setItem(STORE_KEY.FAVORITE_FUTURE_PAIRS, JSON.stringify(userFutureFav))
        setSpotFavourite(userSpotFav)
        setFutureFavourite(userFutureFav)
      }else{
        const spotLocal = JSON.parse(localStorage.getItem(STORE_KEY.FAVORITE_SPOT_PAIRS) || "[]")
        const futureLocal = JSON.parse(localStorage.getItem(STORE_KEY.FAVORITE_FUTURE_PAIRS) || "[]")
        setSpotFavourite(spotLocal)
        setFutureFavourite(futureLocal)
      }
    }
  },[marketData, currentUser])
  
  const addSpotFavourites = async(pair: any) => {
    if(currentUser){
      const reqData = {
        symbol: pair.symbol,
        type: pair.type
      }
      await API.post(API_ENDPOINT.ADD_FAVORITES, reqData)
    }
    localStorage.setItem(STORE_KEY.FAVORITE_SPOT_PAIRS, JSON.stringify([...spotFavourite,pair]))
    setSpotFavourite([...spotFavourite,pair])
  }

  const removeSpotFavourites = async(pair: any) => {
    if(currentUser){
      const reqData = {
        symbol: pair.symbol,
        type: pair.type
      }
      await API.delete(API_ENDPOINT.REMOVE_FAVORITES, {data: reqData})
    }
    const fliteredList = spotFavourite.filter((item: any) => item.symbol != pair.symbol)
    localStorage.setItem(STORE_KEY.FAVORITE_SPOT_PAIRS, JSON.stringify(fliteredList))
    setSpotFavourite(fliteredList)
  }

  const addFutureFavourites = async(pair: any) => {
    if(currentUser){
      const reqData = {
        symbol: pair.symbol,
        type: pair.type
      }
      await API.post(API_ENDPOINT.ADD_FAVORITES, reqData)
    }
    localStorage.setItem(STORE_KEY.FAVORITE_FUTURE_PAIRS, JSON.stringify([...futureFavourite,pair]))
    setFutureFavourite([...futureFavourite,pair])
  }

  const removeFutureFavourites = async(pair: any) => {
    if(currentUser){
      const reqData = {
        symbol: pair.symbol,
        type: pair.type
      }
      await API.delete(API_ENDPOINT.REMOVE_FAVORITES, {data: reqData})
    }
    const fliteredList = futureFavourite.filter((item: any) => item.symbol != pair.symbol)
    localStorage.setItem(STORE_KEY.FAVORITE_FUTURE_PAIRS, JSON.stringify(fliteredList))
    setFutureFavourite(fliteredList)
  }

  return { spotFavourite, futureFavourite, addSpotFavourites, addFutureFavourites, removeSpotFavourites, removeFutureFavourites }

}