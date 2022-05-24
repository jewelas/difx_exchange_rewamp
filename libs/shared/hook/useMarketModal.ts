import { useAtom } from "jotai"
import { marketPairAtom, marketModalAtom, quickBuyTypeAtom} from ".."

export function useMarketModal() {
  const [marketPair, setMarketPair] = useAtom(marketPairAtom)
  const [modalVisible, setModalVisible] = useAtom(marketModalAtom)
  const [quickBuyType, setQuickBuyType] = useAtom(quickBuyTypeAtom)

  return {marketPair, setMarketPair, modalVisible, setModalVisible, quickBuyType, setQuickBuyType}
}
