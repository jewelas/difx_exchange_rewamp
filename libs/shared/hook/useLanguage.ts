import { useEffect, useState } from "react";
import { useHttpGet, Language } from ".."
import { API_ENDPOINT, QUERY_KEY } from "../constants"


export function useLanguage() {
  const { data: resData } = useHttpGet<null, any>(QUERY_KEY.AVAILABLE_LANGUAGES, API_ENDPOINT.GET_AVAILABLE_LANGUAGES, null);
  const [ availableLanguages, setAvailableLanguages ] = useState<Language[] | null>(null)
  const [ currentLanguage, setCurrentLanguage ] = useState<Language | null>(null)
  const [ isAvailable, setIsAvailable ] = useState<boolean>(false)

  useEffect(()=>{
    const cachedLanguage =  JSON.parse(localStorage?.getItem('lang') || "null")
    if(currentLanguage){
      setCurrentLanguage(cachedLanguage)
    }
  },[])

  useEffect(()=>{
    if(resData){
      setAvailableLanguages(resData)
      setIsAvailable(true)

      const defaultLang = resData.find( item => item.default === true )
      localStorage.setItem('lang', JSON.stringify(defaultLang))
      setCurrentLanguage(defaultLang)
    }
  },[resData])

  const setLanguage = (slug) => {
    if(!availableLanguages) return
    try{
      const selectedLang = availableLanguages.find( item => item.slug === slug)
      if(selectedLang != currentLanguage){
        localStorage.setItem('lang', JSON.stringify(selectedLang))
        setCurrentLanguage(selectedLang)    
      }
    }catch(err){
      console.log(err)
    }
  }

  return {
    isAvailable,
    availableLanguages,
    currentLanguage,
    setLanguage
  }
}