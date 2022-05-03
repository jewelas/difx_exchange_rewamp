import { API_ENDPOINT, QUERY_KEY, REFETCH } from "@difx/constants";
import { OrderForm, OrderSideType, OrderType } from "@difx/core-ui";
import { useHttpGet, useHttpGetByEvent } from "@difx/shared";
import { Tabs } from "antd";
import { AxiosResponse } from "axios";
import React, { useEffect, useState } from 'react';
import { PlaceOrderWraperStyled } from "./styled";

export function PlaceOrderWrapper({ pair }: { pair: string }) {

  const [tab, setTab] = useState('limit');

  const { TabPane } = Tabs;

  const PlaceOrder = (orderType: OrderType) => {
    return (
      <div className="place-order-group">
        <div className="bid">
          <OrderForm baseCurrency="BTC" quoteCurrency="USDT" type={orderType}/>
        </div>
        <div className="ask">
          <OrderForm baseCurrency="BTC" quoteCurrency="USDT" side="ask" type={orderType} />
        </div>
      </div>
    )
  }

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
