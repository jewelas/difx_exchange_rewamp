/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_ENDPOINT, QUERY_KEY } from "@difx/constants";
import { Loading, OrderForm, OrderType } from "@difx/core-ui";
import { Balance, PairType, PlaceOrderRequest, PlaceOrderResponse, priceSelectedAtom, useAuth, useHttpGet, useHttpGetByEvent, useHttpPost } from "@difx/shared";
import { Tabs } from "antd";
import { AxiosError, AxiosResponse } from "axios";
import { useAtom } from "jotai";
import React, { useEffect, useMemo, useState } from 'react';
import { PlaceOrderWraperStyled } from "./styled";

export function PlaceOrderWrapper({ pair }: { pair: string }) {

  const [tab, setTab] = useState('limit');
  const { isLoggedIn, token } = useAuth();
  const [balances, setBalances] = useState<Array<Balance>>([]);

  const [priceSelected,] = useAtom(priceSelectedAtom);
  console.log(priceSelected, 'priceSelected')

  const { data: pairs } = useHttpGet<null, PairType[]>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, null);

  const pairInfo: PairType = useMemo(() => {
    if (pairs)
      return pairs.find((e) => e.symbol === pair);
    else return {} as PairType;
  }, [pairs, pair]);

  const getBalancesSuccess = (response: AxiosResponse<Array<Balance>>) => {
    if (response.data) {
      setBalances(response.data);
    }
  }

  const { mutate: getBalances } = useHttpGetByEvent<any, Array<Balance>>({ onSuccess: getBalancesSuccess, endpoint: API_ENDPOINT.GET_BALANCE });

  const placeOrderSuccess = (response: AxiosResponse<PlaceOrderResponse>) => {
    if (response.data) {
      // setBalances(response.data);
    }
  }
  const placeOrderError = (error: AxiosError) => {
    // setBalances(response.data);
  }
  const { mutate: placeOrder, isLoading } = useHttpPost<PlaceOrderRequest, PlaceOrderResponse>({ onSuccess: placeOrderSuccess, onError: placeOrderError, endpoint: API_ENDPOINT.PLACE_ORDER_LIMIT });

  useEffect(() => {
    if (token) {
      const headers = { headers: { 'x-access-token': token } };
      getBalances(headers)
    }
  }, [token, getBalances]);

  const { TabPane } = Tabs;

  const PlaceOrder = (orderType: OrderType) => {
    return (
      <div className="place-order-group">
        <div className="bid">
          <OrderForm
            priceSelected={priceSelected}
            baseCurrency={pairInfo.currency1}
            quoteCurrency={pairInfo.currency2}
            type={orderType}
            isLoggedIn={isLoggedIn}
            balance={balances.find(e => e.currency === pairInfo.currency2)} />
        </div>
        <div className="ask">
          <OrderForm
            priceSelected={priceSelected}
            baseCurrency={pairInfo.currency1}
            quoteCurrency={pairInfo.currency2}
            side="ask"
            type={orderType}
            isLoggedIn={isLoggedIn}
            balance={balances.find(e => e.currency === pairInfo.currency1)} />
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
