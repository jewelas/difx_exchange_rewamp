import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { useEffect } from "react";
import { localStorageAtom } from "../atom/index";

/**
 *  This Hook will sync data between LocalStorage and Atom
 * @param key : localStorage key
 * @param defaultValue
 * @returns
 */
export function useLocalStorage(key: string, defaultValue?: any) {
    const value = useAtomValue(localStorageAtom);
    const setValue = useUpdateAtom(localStorageAtom);

    const isParseable = (value: string) => {
        if (!value) return false;
        if (
            typeof value === 'string' &&
            (
                (value.includes('{') && value.includes('}')) ||
                (value.includes('[') && value.includes(']'))
            )
        ) return true;
        else return false;
    }

    useEffect(() => {
        const currentItem = localStorage?.getItem(key);
        if (currentItem) {
            const parsed = isParseable(currentItem) ? JSON.parse(currentItem) : currentItem;
            value[key] = parsed;
            setValue(value);
        }
    }, []);

    const onSetValue = (newValue: any) => {
        const sNewValue = ["number", "string"].includes(typeof newValue) ? newValue : JSON.stringify(newValue)
        localStorage.setItem(key, sNewValue);
        setValue({ ...value, [key]: newValue });
    }

    return { value: value[key] || defaultValue, setValue: onSetValue };
}
