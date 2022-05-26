/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINT, QUERY_KEY } from "@difx/constants";
import { Loading, OrderForm, OrderSideType, OrderType, Typography } from "@difx/core-ui";
import { PairType, PlaceOrderRequest, PlaceOrderResponse, priceSelectedAtom, useAuth, useBalance, useHttpGet, useHttpPost } from "@difx/shared";
import { Button, Tabs } from "antd";
import { AxiosResponse } from "axios";
import clsx from 'clsx';
import { useAtom } from "jotai";
import React, { useMemo, useState } from 'react';
import { showNotification } from "./../../utils/pageUtils";
import { PlaceOrderWraperStyled } from "./styled";

export function PlaceOrderWrapper({ pair, layout = 'default' }: { pair: string, layout?: string }) {

  const [tab, setTab] = useState('limit');
  const [side, setSide] = useState<'bid' | 'ask'>('bid');
  const { isLoggedIn, user } = useAuth();

  const [priceSelected,] = useAtom(priceSelectedAtom);

  const { data: pairsData } = useHttpGet<null, any>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, null);

  const {userBalance: balances} = useBalance();

  const pairInfo: PairType = useMemo(() => {
    if (pairsData)
      return pairsData.spot.find((e) => e.symbol === pair);
    else return {} as PairType;
  }, [pairsData, pair]);

  const placeOrderSuccess = (response: AxiosResponse<{ data: PlaceOrderResponse }>) => {
    const { data } = response.data;
    showNotification('success', 'Success', `Order created successfully, id: ${data.order_id || data.stop_id}`)
  }

  const { mutate: placeOrder, isLoading } = useHttpPost<PlaceOrderRequest, { data: PlaceOrderResponse }>({ onSuccess: placeOrderSuccess, endpoint: API_ENDPOINT.PLACE_ORDER_LIMIT });

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
      const request = { ...data };
      delete request["total"];
      placeOrder(request);
    } else if (type === 'market') {
      const request: PlaceOrderRequest = { ...data };
      delete request["total"];
      delete request["price"];
      request.endpoint = API_ENDPOINT.PLACE_ORDER_MARKET;
      request.amount = data.total;
      placeOrder(request);
    } else if (type === 'stop-limit') {
      const request: PlaceOrderRequest = { ...data };
      request.endpoint = API_ENDPOINT.PLACE_ORDER_STOP;
      delete request["total"];
      placeOrder(request);
    }

  }

  const Side = () => (
    <div className="side-group">
      <div className="side-title">
        <Typography level="B1">Spot Market</Typography>
      </div>
      <div className="side-content">
        <Button onClick={() => { setSide('bid') }} className={clsx("first bid", side === 'bid' && 'active')}>Buy</Button>
        <Button onClick={() => { setSide('ask') }} className={clsx("last ask", side === 'ask' && "active")}>Sell</Button>
      </div>
    </div>
  )

  const PlaceOrder = (orderType: OrderType) => {
    const DefaultLayout = () => (
      <div className="place-order-group">
        <div className="bid">
          <OrderForm
            layout={layout}
            isLoading={isLoading}
            onPlaceOrder={onSubmitOrder}
            priceSelected={priceSelected}
            baseCurrency={pairInfo.currency1}
            quoteCurrency={pairInfo.currency2}
            type={orderType}
            isLoggedIn={isLoggedIn}
            // balance={(balances.find(e => e.currency === pairInfo.currency2) || {}).amount}
            pairInfo={pairInfo} />
        </div>
        <div className="ask">
          <OrderForm
            layout={layout}
            isLoading={isLoading}
            onPlaceOrder={onSubmitOrder}
            priceSelected={priceSelected}
            baseCurrency={pairInfo.currency1}
            quoteCurrency={pairInfo.currency2}
            side="ask"
            type={orderType}
            isLoggedIn={isLoggedIn}
            // balance={(balances.find(e => e.currency === pairInfo.currency1) || {}).amount}
            pairInfo={pairInfo} />
        </div>
      </div>
    )

    const CompactLayout = () => (
      <div className="place-order-group">
        {
          side === 'bid' &&
          <div className="bid">
            <OrderForm
              layout={layout}
              canDeposit={false}
              isLoading={isLoading}
              onPlaceOrder={onSubmitOrder}
              priceSelected={priceSelected}
              baseCurrency={pairInfo.currency1}
              quoteCurrency={pairInfo.currency2}
              type={orderType}
              isLoggedIn={isLoggedIn}
              // balance={(balances.find(e => e.currency === pairInfo.currency2) || {}).amount}
              pairInfo={pairInfo} />
          </div>
        }

        {
          side === 'ask' &&
          <div className="ask">
            <OrderForm
              layout={layout}
              canDeposit={false}
              isLoading={isLoading}
              onPlaceOrder={onSubmitOrder}
              priceSelected={priceSelected}
              baseCurrency={pairInfo.currency1}
              quoteCurrency={pairInfo.currency2}
              side="ask"
              type={orderType}
              isLoggedIn={isLoggedIn}
              // balance={(balances.find(e => e.currency === pairInfo.currency1) || {}).amount}
              pairInfo={pairInfo} />
          </div>
        }

      </div>
    )

    const ProLayout = () => (
      <div className="place-order-group">
        <div className="bid">
          <OrderForm
            layout={layout}
            isLoading={isLoading}
            onPlaceOrder={onSubmitOrder}
            priceSelected={priceSelected}
            baseCurrency={pairInfo.currency1}
            quoteCurrency={pairInfo.currency2}
            type={orderType}
            isLoggedIn={isLoggedIn}
            // balance={(balances.find(e => e.currency === pairInfo.currency2) || {}).amount}
            pairInfo={pairInfo} />
        </div>
        <div className="ask">
          <OrderForm
            layout={layout}
            isLoading={isLoading}
            onPlaceOrder={onSubmitOrder}
            priceSelected={priceSelected}
            baseCurrency={pairInfo.currency1}
            quoteCurrency={pairInfo.currency2}
            side="ask"
            type={orderType}
            isLoggedIn={isLoggedIn}
            // balance={(balances.find(e => e.currency === pairInfo.currency1) || {}).amount}
            pairInfo={pairInfo} />
        </div>
      </div>
    )

    let Layout = DefaultLayout;
    if (layout === 'compact') Layout = CompactLayout;
    else if (layout === 'pro') Layout = ProLayout;

    return (
      <Layout />
    )
  }

  if (!pairInfo || !balances) return <Loading />

  return (
    <PlaceOrderWraperStyled>
      <div className="content">
        {layout === 'compact' && <Side />}
        <div className={clsx("tab-ordetype-group", layout)}>
          <Tabs defaultActiveKey="1" onChange={(e) => { setTab(e) }}>
            <TabPane tab="Limit" key="limit" />
            <TabPane tab="Market" key="market" />
            <TabPane tab="Stop Limit" key="stop-limit" />
          </Tabs>
        </div>
        {PlaceOrder(tab as OrderType)}
      </div>
      {
        layout === 'compact'
        &&
        <div className="asset-group">
          <div className="asset-title">
            <Typography level="B1">Assets</Typography>
          </div>
          <div className="asset-content">
            <Button>Deposit</Button>
            <Button>Withdraw</Button>
            <Button>Transfer</Button>
          </div>
        </div>
      }
    </PlaceOrderWraperStyled>
  );
}

export default PlaceOrderWrapper;
