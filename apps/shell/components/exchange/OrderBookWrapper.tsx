/* eslint-disable react-hooks/exhaustive-deps */
import { API_ENDPOINT, QUERY_KEY } from "@difx/constants";
import { LayoutType, Loading, OrderBook } from "@difx/core-ui";
import {
  BaseRequest, isLoggedInAtom, Order, SocketEvent, useHttpGet, useHttpGetByEvent, useNetwork,
  useSocket,
  useSocketProps,
  useTitle
} from "@difx/shared";
import { getAveragePrice, getPriceFormatted, getTrendPrice } from "@difx/utils";
import { AxiosResponse } from "axios";
import { useAtomValue } from "jotai/utils";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";
import { useEffect, useMemo, useState } from "react";
// import { useRouter } from "next/router";

/* eslint-disable-next-line */
export interface OrderBookWrapperProps {
  pair: string;
  layout: string;
}

export function OrderBookWrapper({ pair, layout }: OrderBookWrapperProps) {
  const { effectiveType, online } = useNetwork();
  const { data: pairsData } = useHttpGet<null, any>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, null);
  const [groupPrecision, setGroupPrecision] = useState(2);

  const getOrderBookSuccess = (response: AxiosResponse<{ result: Array<Order> }>) => {
    const { data } = response;
    if (data && data.result) {
      for (const order of data.result) {
        if (!openOrderData.find(e => e.id === order.id)) {
          openOrderData.push({ id: order.id, side: order.s === 0 ? 'bid' : 'ask', price: order.p });
          setOpenOrderData([...openOrderData]);
        }
      }
    } else {
      setOpenOrderData([]);
    }
  }

  const { mutate: getOpenOrders } = useHttpGetByEvent<BaseRequest, { result: Array<Order> }>({ onSuccess: getOrderBookSuccess, endpoint: API_ENDPOINT.GET_ORDER_OPEN() });
  const [openOrderData, setOpenOrderData] = useState<any[]>([]);

  const isLoggedIn = useAtomValue(isLoggedInAtom);
  useEffect(() => {
    if (isLoggedIn)getOpenOrders(null);
    if(pair) getOrderBook({endpoint: API_ENDPOINT.GET_ORDER_BOOK(pair)});
  }, [isLoggedIn, pair]);

  let pairInfo = null;
  if (pairsData) {
    pairInfo = pairsData.spot.find((e) => e.symbol === pair);
  }

  // Fetch orderbook
  const getDataSuccess = (response: AxiosResponse)=>{
    const { data } = response;
    if (data) {
      setOrderBookData(data);
    }
  }
  const { mutate: getOrderBook } = useHttpGetByEvent<null, any>({ onSuccess: getDataSuccess, endpoint: API_ENDPOINT.GET_ORDER_BOOK(pair) });
  const [orderBookData, setOrderBookData] = useState(null);

  // Get order book
  const param: useSocketProps = {
    join: pairInfo && pairInfo.symbol,
    leave: OrderBookWrapper.previousPair,
    event: SocketEvent.orderbook_limited,
  };
  const orderBookWSData = useSocket(param);

  // Get open order
  const openOrderSocketData = useSocket({ event: SocketEvent.user_orders });
  useEffect(() => {
    if (openOrderSocketData) {
      if (!openOrderData.find(e => e.id === openOrderSocketData.id)) {
        openOrderData.push({ id: openOrderSocketData.id, side: openOrderSocketData.s === 0 ? 'bid' : 'ask', price: openOrderSocketData.p });
        setOpenOrderData([...openOrderData]);
      }
    }
  }, [openOrderSocketData]);

  // Get latest price
  const pricesWSData = useSocket({ event: SocketEvent.prices });

  // Update title
  const { setTitle } = useTitle();
  useEffect(() => {
    if (pairsData) {
      const spot = pairsData.spot.find(e => e.symbol === pair);
      if (spot) {
        setGroupPrecision(spot.group_precision)
        setTitle(`${getPriceFormatted(spot.last, spot.group_precision)} | ${pair} | DIFX`)
      }
    }
  }, [pairsData, pair]);
  //
  useEffect(() => {
    if (!isEmpty(pricesWSData) && pricesWSData.length === 4) {
      const wsPair = pricesWSData[0];
      if (wsPair === pair) {
        const wsPrice = getPriceFormatted(pricesWSData[1], groupPrecision || 2)
        setTitle(`${wsPrice} | ${wsPair} | DIFX`)
      }
    }
  }, [pricesWSData, pair]);

  OrderBookWrapper.previousPair = pairInfo ? pairInfo.symbol : null;

  const { bids, asks, currentPrice, priceTrend } = useMemo(() => {
    
    // From Socket
    if (orderBookWSData && orderBookWSData.bids && orderBookWSData.asks) {
      const { bids: _bids, asks: _asks } = orderBookWSData;

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

      // From API
    } else if (orderBookData && orderBookData.bids && orderBookData.asks) {
      const { bids: _bids, asks: _asks } = orderBookData;

      const reverseAsks = sortBy(_asks, (obj) => obj[0]).reverse();
      const newPrice = !isEmpty(reverseAsks) ? getAveragePrice(
        reverseAsks[reverseAsks.length - 1][0],
        (_bids && _bids[0]) ? _bids[0][0] : 0,
        (pairInfo ? pairInfo.group_precision : 0)
      ) : 0;
      const priceTrend = getTrendPrice(OrderBookWrapper.previousPrice, newPrice);
      OrderBookWrapper.previousPrice = newPrice;

      return {
        bids: _bids,
        asks: reverseAsks,
        priceTrend,
        currentPrice: newPrice,
      };

    }else {
      return {
        bids: [],
        asks: [],
        priceTrend: null,
        currentPrice: 0.0,
      };
    }
  }, [orderBookWSData, orderBookData, pairInfo]);

  if (!pairInfo) return <Loading type="component" />

  return (
    <OrderBook
      layout={layout as LayoutType}
      pairInfo={pairInfo}
      networkStatus={online ? effectiveType : "off"}
      priceTrend={priceTrend}
      currentPrice={currentPrice}
      bids={bids}
      asks={asks}
      priceOpenOrders={Array.from(new Set(openOrderData))}
    />
  );
}

OrderBookWrapper.previousPrice = 0.0;
OrderBookWrapper.previousPair = null;
export default OrderBookWrapper;
