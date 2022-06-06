import { Meta, Story } from "@storybook/react";
import { AxiosResponse } from "axios";
import { isEmpty, sortBy } from "lodash";
import { useEffect, useState, useMemo } from "react";
import { OrderBook, OrderBookProps } from ".";
import { API_ENDPOINT, QUERY_KEY, useHttpGet, useHttpGetByEvent, getAveragePrice, getTrendPrice } from "./../../../shared";

export default {
  component: OrderBook,
  title: "Module/OrderBook",
} as Meta;

let previousPrice = 0;
const Template: Story<OrderBookProps> = (args) => {

  const { data: pairsData } = useHttpGet<null, any>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, null);

  const [pairInfo, setPairInfo] = useState(null);

  useEffect(() => {
    getOrderBook({ endpoint: API_ENDPOINT.GET_ORDER_BOOK("BTCUSDT") });
  }, []);

  useEffect(() => {
    setPairInfo(pairsData.spot.find((e) => e.symbol === "BTCUSDT"));
  }, [pairsData]);

  // Fetch orderbook
  const getDataSuccess = (response: AxiosResponse) => {
    const { data } = response;
    if (data) {
      setOrderBookData(data);
    }
  }
  const { mutate: getOrderBook } = useHttpGetByEvent<null, any>({ onSuccess: getDataSuccess, endpoint: API_ENDPOINT.GET_ORDER_BOOK("BTCUSDT") });
  const [orderBookData, setOrderBookData] = useState(null);

  const { bids, asks, currentPrice, priceTrend } = useMemo(() => {

    if (orderBookData && orderBookData.bids && orderBookData.asks) {
      const { bids: _bids, asks: _asks } = orderBookData;

      const reverseAsks = sortBy(_asks, (obj) => obj[0]).reverse();
      const newPrice = !isEmpty(reverseAsks) ? getAveragePrice(
        reverseAsks[reverseAsks.length - 1][0],
        (_bids && _bids[0]) ? _bids[0][0] : 0,
        (pairInfo ? pairInfo.group_precision : 0)
      ) : 0;
      const priceTrend = getTrendPrice(previousPrice, newPrice);
      previousPrice = newPrice;

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
  }, [orderBookData, pairInfo]);

  return (
    // <OrderBook {...args} />

    <OrderBook
      pairInfo={pairInfo}
      priceTrend={priceTrend}
      currentPrice={currentPrice}
      bids={bids}
      asks={asks}
    />
  )
}

export const Primary = Template.bind({});
Primary.parameters = {};

Primary.args = {};
