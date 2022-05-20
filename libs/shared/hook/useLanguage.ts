import { useEffect, useState } from "react";
import { useHttpGet } from "..";
import { useTranslation } from 'react-i18next'
import {Language} from "./../type/Language"
import { API_ENDPOINT, QUERY_KEY } from "../constants"

export function useLanguage() {
  const { data: resData } = useHttpGet<null, any>(QUERY_KEY.AVAILABLE_LANGUAGES, API_ENDPOINT.GET_AVAILABLE_LANGUAGES, {});
  const [ availableLanguages, setAvailableLanguages ] = useState<Language[] | null>(null)
  const [ currentLanguage, setCurrentLanguage ] = useState<Language | null>(null)
  const [ isAvailable, setIsAvailable ] = useState<boolean>(false)

  const { t, i18n } = useTranslation()

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

      const defaultLang = resData.find( (item: Language) => item.default === true )
      localStorage.setItem('lang', JSON.stringify(defaultLang))
      setCurrentLanguage(defaultLang)
    }
  },[resData])

  const setLanguage = (slug:string) => {
    if(!availableLanguages) return
    try{
      const selectedLang:any = availableLanguages.find( item => item.slug === slug)
      if(selectedLang != currentLanguage){
        i18n.changeLanguage(slug);
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