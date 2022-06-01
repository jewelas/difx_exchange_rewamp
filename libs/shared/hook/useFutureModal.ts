import { useAtom } from "jotai"
import { marketFutureModalAtom } from ".."

export function useFutureModal() {
  const [futureModalVisible, setFutureModalVisible] = useAtom(marketFutureModalAtom)

  return {futureModalVisible, setFutureModalVisible}
}
