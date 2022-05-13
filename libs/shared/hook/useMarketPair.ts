import { useAtom } from "jotai"
import { marketPairAtom, marketDrawerAtom } from ".."

export function useMarketPair() {
  const [marketPair, setMarketPair] = useAtom(marketPairAtom)
  const [drawerVisible, setDrawerVisible] = useAtom(marketDrawerAtom)

  return {marketPair, setMarketPair, drawerVisible, setDrawerVisible}
}
