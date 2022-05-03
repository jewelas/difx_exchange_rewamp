/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_ENDPOINT, QUERY_KEY, REFETCH } from "@difx/constants";
import { OrderForm, OrderSideType, OrderType, Loading } from "@difx/core-ui";
import { useHttpGetByEvent, useHttpGet, useAuth, Balance, PairType } from "@difx/shared";
import { Tabs } from "antd";
import { AxiosResponse } from "axios";
import React, { useEffect, useState, useMemo } from 'react';
import { PlaceOrderWraperStyled } from "./styled";

export function PlaceOrderWrapper({ pair }: { pair: string }) {

  const [tab, setTab] = useState('limit');
  const { isLoggedIn, token } = useAuth();
  const [balances, setBalances] = useState<Array<Balance>>([]);

  const { data: pairs } = useHttpGet<null, PairType[]>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, null);

  const pairInfo = useMemo(() => {
    if (pairs)
      return pairs.find((e) => e.symbol === pair);
    else return {};
  }, [pairs, pair]);

  const getBalancesSuccess = (response: AxiosResponse<Array<Balance>>) => {
    if (response.data) {
      setBalances(response.data);
    }
  }

  const { mutate: getBalances } = useHttpGetByEvent<any, Array<Balance>>({ onSuccess: getBalancesSuccess, endpoint: API_ENDPOINT.GET_BALANCE });


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
            baseCurrency={pairInfo.currency1}
            quoteCurrency={pairInfo.currency2}
            type={orderType}
            isLoggedIn={isLoggedIn}
            balance={balances.find(e => e.currency === pairInfo.currency2)} />
        </div>
        <div className="ask">
          <OrderForm
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
