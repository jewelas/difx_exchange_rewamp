import { API_ENDPOINT, QUERY_KEY, STORE_KEY } from "@difx/constants";
import { Icon, Loading, Typography } from "@difx/core-ui";
import {
  PairType,
  SocketEvent,
  useHttpGet, useLocalStorage, useSocket,
  useSocketProps
} from "@difx/shared";
import {
  getAveragePrice,
  getPriceFormatted,
  getPricePercentChange,
  getTrendPrice
} from "@difx/utils";
import sortBy from "lodash/sortBy";
import { useMemo } from "react";
import { PairMetadataStyled } from "./styled";

/* eslint-disable-next-line */
export interface PairMetaDataWrapperProps {
  pair: string;
}

export function PairMetaDataWrapper({ pair }: PairMetaDataWrapperProps) {
  const { data: resData } = useHttpGet<null, any>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, { refetchInterval: 10000 });
  const { value: pairsStored, setValue: setPairsStore } = useLocalStorage(STORE_KEY.FAVORITE_PAIRS, []);

  let pairInfo = null;
  if (resData) {
    pairInfo = resData.spot.find((e) => e.symbol === pair);
  }

  const param: useSocketProps = {
    pair: pairInfo && pairInfo.symbol,
    leavePair: PairMetaDataWrapper.previousPair,
    event: SocketEvent.orderbook_limited,
  };
  const data = useSocket(param);
  PairMetaDataWrapper.previousPair = pairInfo ? pairInfo.symbol : null;

  const addToFavorite = (pair: string) => {
    const _pairs = pairsStored ? [...pairsStored] : [];
    if (!_pairs.includes(pair)) {
      _pairs.push(pair)
      setPairsStore(_pairs);
    }
  }

  const removeFromFavorite = (pair: string) => {
    const _pairs = pairsStored ? [...pairsStored] : [];
    if (_pairs.includes(pair)) {
      const pairsFiltered = _pairs.filter(e => e !== pair);
      setPairsStore(pairsFiltered);
    }
  }

  const { currentPrice, priceTrend, highPrice, lowPrice, changed, precision } =
    useMemo(() => {
      if (data && data.bids && data.asks && pairInfo) {
        const { bids: _bids, asks: _asks } = data;
        const reverseAsks = sortBy(_asks, (obj) => obj[0]).reverse();
        const newPrice = getAveragePrice(
          reverseAsks[reverseAsks.length - 1][0],
          (_bids && _bids[0]) ? _bids[0][0] : 0,
          pairInfo.group_precision
        );
        const priceTrend = getTrendPrice(PairMetaDataWrapper.previousPrice, newPrice);

        const highPrice = pairInfo.high.toFixed(pairInfo.group_precision);
        const lowPrice = pairInfo.low.toFixed(pairInfo.group_precision);
        const changed = getPricePercentChange(pairInfo.last, pairInfo.open);

        PairMetaDataWrapper.previousPrice = newPrice;
        return {
          currentPrice: newPrice,
          priceTrend,
          highPrice,
          lowPrice,
          changed,
          precision: pairInfo.group_precision,
        };
      } else {
        return {
          currentPrice: 0.0,
          priceTrend: null,
          highPrice: 0.0,
          lowPrice: 0.0,
          changed: 0,
          precision: 2,
        };
      }
    }, [data, pairInfo]);

  if (!pairInfo) return  <Loading type='component' />

  const pairString = `${pairInfo.currency1}/${pairInfo.currency2}`

  return (
    <PairMetadataStyled>
      <div style={{ marginLeft: -4 }} className="left">
        <Typography level="H6">{`${pairInfo.currency1}/${pairInfo.currency2}`}</Typography>
        <div
          style={{ marginLeft: -6, marginRight: 5 }}
          onClick={() => { pairsStored.includes(pairString) ? removeFromFavorite(pairString) : addToFavorite(pairString) }}
          className={pairsStored.includes(pairString) ? 'isFavorited' : ''}
        >
          <Icon.FavoriteIcon useDarkMode />
        </div>
      </div>
      <div className="center">
        <div className="price">
          <Typography
            level="B2"
            color={
              priceTrend === "ask"
                ? "danger"
                : priceTrend === "bid"
                  ? "success"
                  : null
            }
          >{`${currentPrice}`}</Typography>
          <Typography level="B3">{`$${getPriceFormatted(
            currentPrice,
            precision
          )}`}</Typography>
        </div>
        <div className="price">
          <Typography fontSize={11} level="B3">24h Change</Typography>
          <Typography
            level="B2"
            color={changed > 0 ? "success" : changed < 0 ? "danger" : null}
          >{`${changed.toFixed(2)}%`}</Typography>
        </div>
        <div className="price">
          <Typography level="B3">24h High</Typography>
          <Typography level="B2">{highPrice}</Typography>
        </div>
        <div className="price">
          <Typography fontSize={11} level="B3">24h Low</Typography>
          <Typography level="B2">{lowPrice}</Typography>
        </div>
        <div className="price">
          <Typography fontSize={11} level="B3">{`24h Volume(${pairInfo.currency1})`}</Typography>
          <Typography level="B2">34534.28</Typography>
        </div>
      </div>
      <div className="right">
        <div style={{ marginRight: -4 }}>
          <Icon.QuestionIcon useDarkMode />
        </div>
      </div>
    </PairMetadataStyled>
  );
}

PairMetaDataWrapper.previousPrice = 0.0;
PairMetaDataWrapper.previousPair = null;
export default PairMetaDataWrapper;
