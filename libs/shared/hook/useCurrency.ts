import { useEffect, useState } from "react";
import { useHttpGet } from "..";
import { Currency } from './../type/Currency'
import { API_ENDPOINT, QUERY_KEY } from "../constants"

useCurrency.init = false;
export function useCurrency() {
  const { data } = useHttpGet<null, any>(QUERY_KEY.CURRENCY_PAIRS, API_ENDPOINT.GET_CURRENCY_PAIRS, {});
  const [currencyPairs, setCurrencyPairs] = useState<Currency[] | null>(null)
  const [currentCurrency, setCurrentCurrency] = useState<Currency | null>(null)
  const [isAvailable, setIsAvailable] = useState<boolean>(false)

  useEffect(() => {
    if (useCurrency.init) return;
    useCurrency.init = true;
    const cachedCurrency = JSON.parse(localStorage?.getItem('currency') || "null")
    if (cachedCurrency) {
      setCurrentCurrency(cachedCurrency)
    }
  }, [])

  useEffect(() => {
    if (data) {
      setCurrencyPairs(data.currencies)
      setIsAvailable(true)

      const defaultCurrency = data.currencies.find((item: Currency) => item.default === true)
      localStorage.setItem('currency', JSON.stringify(defaultCurrency))
      setCurrentCurrency(defaultCurrency)
    }
  }, [data])

  const setCurrency = (currency: string) => {
    if (!currencyPairs) return
    try {
      const selectedPair = currencyPairs.find(pair => pair.name === currency)
      if (selectedPair && selectedPair != currentCurrency) {
        localStorage.setItem('currency', JSON.stringify(selectedPair))
        setCurrentCurrency(selectedPair)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return {
    isAvailable,
    currencyPairs,
    currentCurrency,
    setCurrency,
  }
}
