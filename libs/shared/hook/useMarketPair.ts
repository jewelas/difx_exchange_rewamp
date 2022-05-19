import { useAtom } from "jotai"
import { marketPairAtom, marketDrawerAtom, marketFutureFavoritesListAtom, marketSpotFavoritesListAtom, marketFuturesListAtom, marketSpotListAtom } from ".."

export function useMarketPair() {
  const [marketPair, setMarketPair] = useAtom(marketPairAtom)
  const [drawerVisible, setDrawerVisible] = useAtom(marketDrawerAtom)

  const [spotList, setSpotList] = useAtom(marketSpotListAtom)
  const [spotFavorites, setSpotFavorites] = useAtom(marketSpotFavoritesListAtom)
  const [futureFavorites, setFutureFavorites] = useAtom(marketFutureFavoritesListAtom)
  const [futuresList, setFuturesList] = useAtom(marketFuturesListAtom)

  return {
        spotList,
        setSpotList,
        spotFavorites,
        futuresList,
        marketPair,
        futureFavorites,
        setMarketPair,
        drawerVisible,
        setDrawerVisible,
        setSpotFavorites,
        setFuturesList,
        setFutureFavorites
    }
}
