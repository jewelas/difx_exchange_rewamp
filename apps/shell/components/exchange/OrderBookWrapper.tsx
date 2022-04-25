import { OrderBook, Loading } from "@difx/core-ui";
import { useMemo } from "react";
import { useRouter } from "next/router";
import sortBy from "lodash/sortBy";
import {
  useHttpGet,
  useNetwork,
  useSocket,
  useSocketProps,
  PairType,
  SocketEvent,
} from "@difx/shared";
import { getAveragePrice, getTrendPrice } from "./../../utils/priceUtils";
import { API_ENDPOINT, QUERY_KEY } from "./../../constants";

/* eslint-disable-next-line */
export interface OrderBookWrapperProps {}

export function OrderBookWrapper(props: OrderBookWrapperProps) {
  const { effectiveType, online } = useNetwork();
  const { data: pairs } = useHttpGet<null,PairType[]>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, null);
  const router = useRouter();
  const { pair } = router.query;

  let pairInfo = null;
  if (pairs) {
    pairInfo = pairs.find((e) => e.symbol === pair);
  }

  const param: useSocketProps = {
    pair: pairInfo && pairInfo.symbol,
    leavePair: {...OrderBookWrapper.previousPair},
    event: SocketEvent.orderbook_limited,
  };
  const data = useSocket(param);
  OrderBookWrapper.previousPair = pairInfo && pairInfo.symbol;

  const { bids, asks, currentPrice, priceTrend } = useMemo(() => {
    if (data && data.bids && data.asks) {
      const { bids: _bids, asks: _asks } = data;
      const reverseAsks = sortBy(_asks, (obj) => obj[0]).reverse();
      const newPrice = getAveragePrice(
        reverseAsks[reverseAsks.length-1][0],
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
