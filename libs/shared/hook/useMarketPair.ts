import { useAtom } from "jotai"
import { marketPairAtom, marketDrawerAtom, marketFavoritesListAtom, marketFuturesListAtom, marketSpotListAtom } from ".."

export function useMarketPair() {
  const [marketPair, setMarketPair] = useAtom(marketPairAtom)
  const [drawerVisible, setDrawerVisible] = useAtom(marketDrawerAtom)

  const [spotList, setSpotList] = useAtom(marketSpotListAtom)
  const [favoriteList, setFavoriteList] = useAtom(marketFavoritesListAtom)
  const [futuresList, setFuturesList] = useAtom(marketFuturesListAtom)

  return {
        spotList,
        setSpotList,
        favoriteList,
        futuresList,
        marketPair,
        setMarketPair,
        drawerVisible,
        setDrawerVisible,
        setFavoriteList,
        setFuturesList
    }
}
