import { API_ENDPOINT, QUERY_KEY } from "@difx/constants";
import { Loading, OrderBook } from "@difx/core-ui";
import { getAveragePrice, getTrendPrice } from "@difx/utils";
import {
  PairType,
  SocketEvent, useHttpGet,
  useNetwork,
  useSocket,
  useSocketProps,
  useAuth,
  BaseRequest,
  Order
} from "@difx/shared";
import sortBy from "lodash/sortBy";
import { useMemo } from "react";

/* eslint-disable-next-line */
export interface OrderBookWrapperProps {
  pair: string;
}

export function OrderBookWrapper({ pair }: OrderBookWrapperProps) {
  const { effectiveType, online } = useNetwork();
  const { token } = useAuth();
  const headers = { headers: { 'x-access-token': token } }
  const { data: pairs } = useHttpGet<null, PairType[]>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, null);
  const { data: openOrderData } = useHttpGet<BaseRequest, Order[]>(QUERY_KEY.OPEN_ORDERS, API_ENDPOINT.GET_ORDER_OPEN, null, headers);

  let pairInfo = null;
  if (pairs) {
    pairInfo = pairs.find((e) => e.symbol === pair);
  }

  // Get order book
  const param: useSocketProps = {
    pair: pairInfo && pairInfo.symbol,
    leavePair: { ...OrderBookWrapper.previousPair },
    event: SocketEvent.orderbook_limited,
  };
  const data = useSocket(param);

  // Get open order
  const openOrderSocketData = useSocket({ event: SocketEvent.user_orders });

  let openOrder = [];
  if (openOrderData) openOrder = openOrder.concat(openOrderData.map(e => {
    if(e) return {id: e.id, side: e.s===0 ? 'bid' : 'ask', price: e.p}
  }));
  if(openOrderSocketData){
    if(openOrderSocketData.q !== 0){
      openOrder.push({id: openOrderSocketData.id, side: openOrderSocketData.s===0 ? 'bid' : 'ask', price: openOrderSocketData.p});
    }else{
      openOrder = openOrder.filter(e=>e.id !== openOrderSocketData.id)
    }
  }

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
      priceOpenOrders={Array.from(new Set(openOrder))}
    />
  );
}

OrderBookWrapper.previousPrice = 0.0;
OrderBookWrapper.previousPair = null;
export default OrderBookWrapper;
