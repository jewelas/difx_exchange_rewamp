import { API_ENDPOINT, QUERY_KEY } from "@difx/constants";
import { Loading, OrderBook } from "@difx/core-ui";
import {
  PairType,
  SocketEvent, useHttpGet,
  useNetwork,
  useSocket,
  useSocketProps
} from "@difx/shared";
import sortBy from "lodash/sortBy";
import { useMemo } from "react";
import { getAveragePrice, getTrendPrice } from "./../../utils/priceUtils";

/* eslint-disable-next-line */
export interface OrderBookWrapperProps {
  pair: string;
}

export function OrderBookWrapper({pair}: OrderBookWrapperProps) {
  const { effectiveType, online } = useNetwork();
  const { data: pairs } = useHttpGet<null, PairType[]>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, { refetchInterval: 10000 });

  let pairInfo = null;
  if (pairs) {
    pairInfo = pairs.find((e) => e.symbol === pair);
  }

  const param: useSocketProps = {
    pair: pairInfo && pairInfo.symbol,
    leavePair: { ...OrderBookWrapper.previousPair },
    event: SocketEvent.orderbook_limited,
  };
  const data = useSocket(param);
  OrderBookWrapper.previousPair = pairInfo && pairInfo.symbol;

  const { bids, asks, currentPrice, priceTrend } = useMemo(() => {
    if (data && data.bids && data.asks) {
      const { bids: _bids, asks: _asks } = data;
      const reverseAsks = sortBy(_asks, (obj) => obj[0]).reverse();
      const newPrice = getAveragePrice(
        reverseAsks[reverseAsks.length - 1][0],
        _bids[0][0],
        pairInfo.group_precision
      );
      const priceTrend = getTrendPrice(OrderBookWrapper.previousPrice, newPrice);
      OrderBookWrapper.previousPrice = newPrice;

      return {
        bids: _bids,
        asks: reverseAsks,
        priceTrend,
        currentPrice: newPrice,
      };
    } else {
      return {
        bids: [],
        asks: [],
        priceTrend: null,
        currentPrice: 0.0,
      };
    }
  }, [data, pairInfo]);

  if (!pairInfo) return <Loading />;

  return (
    <OrderBook
      pairInfo={pairInfo}
      networkStatus={online ? effectiveType : "off"}
      priceTrend={priceTrend}
      currentPrice={currentPrice}
      bids={bids}
      asks={asks}
    />
  );
}

OrderBookWrapper.previousPrice = 0.0;
OrderBookWrapper.previousPair = null;
export default OrderBookWrapper;
