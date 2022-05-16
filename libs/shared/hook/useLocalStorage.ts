import { useEffect, useState } from "react";
import { useUpdateAtom, useAtomValue } from "jotai/utils";
import { localStorageAtom } from "../atom/index";

export function useLocalStorage(key: string, defaultValue?: any) {

    const value = useAtomValue(localStorageAtom);
    const setValue = useUpdateAtom(localStorageAtom);

    useEffect(() => {
        let currentItem = localStorage?.getItem(key);
        if (currentItem && currentItem != value[key]) setValue({ ...value, [key]: currentItem });
    }, []);

    useEffect(() => {
        if (value[key]) localStorage.setItem(key, value[key]);
    }, [value[key]]);

    const onSetValue = (newValue: any) => {
        const sNewValue = ["number", "string"].includes(typeof newValue) ? newValue : JSON.stringify(newValue)
        localStorage.setItem(key, sNewValue);
        setValue({ ...value, [key]: sNewValue });
    }

    let jsonValue = null;
    if (value[key]) {
        if (["number", "string"].includes(typeof value[key])) jsonValue = value[key];
        else jsonValue = JSON.parse(value[key])
    } else jsonValue = defaultValue || null;
    
    return { value: jsonValue, setValue: onSetValue };
}
