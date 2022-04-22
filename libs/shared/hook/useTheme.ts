import { useEffect } from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../atom/index";

export function useTheme(){
     const [theme, setTheme] = useAtom(themeAtom)

    useEffect(()=>{
        let currentTheme = localStorage?.getItem("theme")
        if(currentTheme && currentTheme != theme ) setTheme(currentTheme)
    },[])

    useEffect(()=>{
        localStorage.setItem("theme", theme)
    },[theme])

    const switchTheme = () : void => {
        if(theme === "light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }

    return {theme,switchTheme}
}