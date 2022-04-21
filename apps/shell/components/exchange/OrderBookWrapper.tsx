import { OrderBook } from "@difx/core-ui";
import {useMemo} from 'react';
import { useNetwork, useSocket, useSocketProps } from "@difx/shared";

/* eslint-disable-next-line */
export interface OrderBookWrapperProps {
  pair?: string;
}

export function OrderBookWrapper({ pair }: OrderBookWrapperProps) {

  const { effectiveType, online } = useNetwork();

  const param: useSocketProps = { pair, event: "orderbook_limited" };
  const data = useSocket(param);

  const {bids, asks, currentPrice, priceTrend } = useMemo(()=>{
    let _currentPrice = 0.0;
    let _priceTrend = null;
    if (data) {
        const { bids: _bids, asks: _asks } = data;
        const newPrice = Number(
          ((_asks[_asks.length - 1][0] + _bids[0][0]) / 2).toFixed(1)
        );
        if (currentPrice < newPrice) _priceTrend = "bid";
        else if (currentPrice > newPrice) _priceTrend = "ask";
        else _priceTrend = null;
        _currentPrice = newPrice;

        return {
            bids: _bids,
            asks: _asks.reverse(),
            priceTrend: _priceTrend,
            currentPrice: _currentPrice
        }
      }else {
          return {
            bids: [],
            asks: [],
            priceTrend: 0.0,
            currentPrice: 0.0
          }
      }
  }, [data])

  return (
    <OrderBook
      networkStatus={online ? effectiveType : "off"}
      priceTrend={priceTrend}
      currentPrice={currentPrice}
      bids={bids}
      asks={asks}
    />
  );
}

export default OrderBookWrapper;
