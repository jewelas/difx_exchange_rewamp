import { useAtom } from "jotai"
import { useMemo } from "react"
import { RTLAtom } from ".."

export function useRTL() {
  const [RTL, setRTL] = useAtom(RTLAtom)

  const RTLDirection = useMemo(()=>{
    return RTL === true ? "rtl" : "ltr"
  },[RTL])

  const toggleRTL = () => {
    setRTL(!RTL)
  }

  return {RTLDirection,toggleRTL}
}
