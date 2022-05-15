import { API_ENDPOINT, QUERY_KEY } from "@difx/constants";
import { Loading, OrderBook } from "@difx/core-ui";
import { getAveragePrice, getTrendPrice } from "@difx/utils";
import {
  PairType,
  SocketEvent, useHttpGet,
  useNetwork,
  useSocket,
  useSocketProps,
  BaseRequest,
  Order
} from "@difx/shared";
import sortBy from "lodash/sortBy";
import { useMemo } from "react";
// import { useRouter } from "next/router";

/* eslint-disable-next-line */
export interface OrderBookWrapperProps {
  pair: string;
}

export function OrderBookWrapper({ pair }: OrderBookWrapperProps) {
  const { effectiveType, online } = useNetwork();
  const { data: pairsData } = useHttpGet<null, any>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, null);
  const { data: openOrderData } = useHttpGet<BaseRequest, {result:Order[]}>(QUERY_KEY.OPEN_ORDERS, API_ENDPOINT.GET_ORDER_OPEN(), null);

  let pairInfo = null;
  if (pairsData) {
    pairInfo = pairsData.spot.find((e) => e.symbol === pair);
  }

  // Get order book
  const param: useSocketProps = {
    pair: pairInfo && pairInfo.symbol,
    leavePair: OrderBookWrapper.previousPair,
    event: SocketEvent.orderbook_limited,
  };
  const data = useSocket(param);

  // Get open order
  const openOrderSocketData = useSocket({ event: SocketEvent.user_orders });

  let openOrder = [];
  if (openOrderData && openOrderData.result) openOrder = openOrder.concat(openOrderData.result.map(e => {
    if (e) return { id: e.id, side: e.s === 0 ? 'bid' : 'ask', price: e.p }
  }));
  if (openOrderSocketData) {
    if (openOrderSocketData.q !== 0) {
      openOrder.push({ id: openOrderSocketData.id, side: openOrderSocketData.s === 0 ? 'bid' : 'ask', price: openOrderSocketData.p });
    } else {
      openOrder = openOrder.filter(e => e.id !== openOrderSocketData.id)
    }
  }

  OrderBookWrapper.previousPair = pairInfo ? pairInfo.symbol : null;

  const { bids, asks, currentPrice, priceTrend } = useMemo(() => {
    if (data && data.bids && data.asks) {
      const { bids: _bids, asks: _asks } = data;

      // Sum Bids
      if (_bids[0] && _bids[0].length >= 2) {
        _bids[0][3] = _bids[0][1];
        _bids.reduce((a, b) => {
          b[3] = b[1] + a[3];
          return b;
        });
      }


      // Sum Asks
      if (_asks[0] && _asks[0].length >= 2) {
        _asks[0][3] = _asks[0][1];
        _asks.reduce((a, b) => {
          b[3] = b[1] + a[3];
          return b;
        });
      }

      const reverseAsks = sortBy(_asks, (obj) => obj[0]).reverse();
      const newPrice = getAveragePrice(
        reverseAsks[reverseAsks.length - 1][0],
        (_bids && _bids[0]) ? _bids[0][0] : 0,
        (pairInfo ? pairInfo.group_precision : 0)
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

  if (!pairInfo) return <Loading />

  return (
    <OrderBook
      pairInfo={pairInfo}
      networkStatus={online ? effectiveType : "off"}
      priceTrend={priceTrend}
      currentPrice={currentPrice}
      bids={bids}
      asks={asks}
      priceOpenOrders={Array.from(new Set(openOrder))}
    />
  );
}

OrderBookWrapper.previousPrice = 0.0;
OrderBookWrapper.previousPair = null;
export default OrderBookWrapper;
