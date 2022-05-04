/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_ENDPOINT, QUERY_KEY } from "@difx/constants";
import { Loading, OrderForm, OrderType, OrderSideType } from "@difx/core-ui";
import { Balance, PairType, PlaceOrderRequest, PlaceOrderResponse, priceSelectedAtom, useAuth, useHttpGet, useHttpGetByEvent, useHttpPost } from "@difx/shared";
import { Tabs } from "antd";
import { showNotification } from "./../../utils/pageUtils";
import { AxiosError, AxiosResponse } from "axios";
import { useAtom } from "jotai";
import React, { useEffect, useMemo, useState } from 'react';
import { PlaceOrderWraperStyled } from "./styled";

export function PlaceOrderWrapper({ pair }: { pair: string }) {

  const [tab, setTab] = useState('limit');
  const { isLoggedIn, token } = useAuth();
  const [balances, setBalances] = useState<Array<Balance>>([]);

  const [priceSelected,] = useAtom(priceSelectedAtom);

  const { data: pairs } = useHttpGet<null, PairType[]>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, null);

  const pairInfo: PairType = useMemo(() => {
    if (pairs)
      return pairs.find((e) => e.symbol === pair);
    else return {} as PairType;
  }, [pairs, pair]);


  const headers = { headers: { 'x-access-token': token } }

  const getBalancesSuccess = (response: AxiosResponse<Array<Balance>>) => {
    if (response.data) {
      setBalances(response.data);
    }
  }

  const { mutate: getBalances } = useHttpGetByEvent<any, Array<Balance>>({ onSuccess: getBalancesSuccess, endpoint: API_ENDPOINT.GET_BALANCE });

  const placeOrderSuccess = (response: AxiosResponse<PlaceOrderResponse>) => {
    const { data } = response;
    showNotification('success', 'Success', `Order created successfully, id: ${data.order_id || data.stop_id}`)
  }
  const placeOrderError = (error: AxiosError) => {
    // Todo...
  }
  const { mutate: placeOrder, isLoading } = useHttpPost<PlaceOrderRequest, PlaceOrderResponse>({ onSuccess: placeOrderSuccess, onError: placeOrderError, endpoint: API_ENDPOINT.PLACE_ORDER_LIMIT, headers });

  useEffect(() => {
    getBalances(headers)
  }, []);

  const { TabPane } = Tabs;

  const onSubmitOrder = (formData: PlaceOrderRequest, type: OrderType, side: OrderSideType) => {

    const data = {
      side: side === 'bid' ? 0 : 1,
      price: formData[`${side}.price`],
      amount: formData[`${side}.amount`],
      stop: formData[`${side}.stop`],
      total: formData[`${side}.total`],
      symbol: pairInfo.symbol,
    }

    if (type === 'limit') {
      placeOrder(data);
    } else if (type === 'market') {
      data.price = pairInfo.last;
      data.amount = data.total;
      placeOrder({ ...data, endpoint: API_ENDPOINT.PLACE_ORDER_MARKET });
    } else if (type === 'stop-limit') {
      placeOrder({ ...data, endpoint: API_ENDPOINT.PLACE_ORDER_STOP });
    }

    // Update balance
    setTimeout(()=>{
      getBalances(headers);
    },3000)
  }

  const PlaceOrder = (orderType: OrderType) => {
    return (
      <div className="place-order-group">
        <div className="bid">
          <OrderForm
            isLoading={isLoading}
            onPlaceOrder={onSubmitOrder}
            priceSelected={priceSelected}
            baseCurrency={pairInfo.currency1}
            quoteCurrency={pairInfo.currency2}
            type={orderType}
            isLoggedIn={isLoggedIn}
            balance={balances.find(e => e.currency === pairInfo.currency2)}
            pairInfo={pairInfo} />
        </div>
        <div className="ask">
          <OrderForm
            isLoading={isLoading}
            onPlaceOrder={onSubmitOrder}
            priceSelected={priceSelected}
            baseCurrency={pairInfo.currency1}
            quoteCurrency={pairInfo.currency2}
            side="ask"
            type={orderType}
            isLoggedIn={isLoggedIn}
            balance={balances.find(e => e.currency === pairInfo.currency1)}
            pairInfo={pairInfo} />
        </div>
      </div>
    )
  }

  if (!pairInfo || !balances) return <Loading />

  return (
    <PlaceOrderWraperStyled>
      <div className="content">
        <Tabs defaultActiveKey="1" onChange={(e) => { setTab(e) }}>
          <TabPane tab="Limit" key="limit" />
          <TabPane tab="Market" key="market" />
          <TabPane tab="Stop Limit" key="stop-limit" />
        </Tabs>
        {PlaceOrder(tab as OrderType)}
      </div>
    </PlaceOrderWraperStyled>
  );
}

export default PlaceOrderWrapper;
