import { useEffect, useState } from "react";
import { useHttpGet, Currency } from ".."
import { API_ENDPOINT, QUERY_KEY } from "../constants"


export function useCurrency() {
  const { data } = useHttpGet<null, any>(QUERY_KEY.CURRENCY_PAIRS, API_ENDPOINT.GET_CURRENCY_PAIRS, null);
  const [ currencyPairs, setCurrencyPairs ] = useState<Currency[] | null>(null)
  const [ currentCurrency, setCurrentCurrency ] = useState<object | null>(null)
  const [ isAvailable, setIsAvailable ] = useState<boolean>(false)

  useEffect(()=>{
    if(data){
      setCurrencyPairs(data.currencies)
      setIsAvailable(true)
    }
  },[data])

  const selectCurrency = (currency) => {
    if(!currencyPairs) return
    try{
      const selectedPair = currencyPairs.find( pair => pair.name === currency)
      setCurrentCurrency(selectedPair)    
    }catch(err){
      console.log(err)
    }
  }

  return {
    isAvailable,
    currencyPairs,
    currentCurrency,
    selectCurrency,
  }
}
