import { useAtom } from "jotai"
import { marketPairAtom, marketModalAtom } from ".."

export function useMarketModal() {
  const [marketPair, setMarketPair] = useAtom(marketPairAtom)
  const [modalVisible, setModalVisible] = useAtom(marketModalAtom)

  return {marketPair, setMarketPair, modalVisible, setModalVisible}
}
