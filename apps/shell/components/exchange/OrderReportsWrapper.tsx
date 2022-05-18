/* eslint-disable @typescript-eslint/no-explicit-any */

import { Icon, Loading, Switch } from "@difx/core-ui";
import { useAuth } from "@difx/shared";
import { Button, Switch as AntdSwitch, Tabs } from "antd";
import { useState } from 'react';
import FundReport from "./FundReport";
import OrderHistoryReport from "./OrderHistoryReport";
import OrderOpenReport from "./OrderOpenReport";
import OrderStopLimitReport from "./OrderStopLimitReport";
import { OrderReportsWraperStyled } from "./styled";
import TradeHistoryReport from "./TradeHistoryReport";

export function OrderReportsWrapper({ pair }: { pair: string }) {

  const [tab, setTab] = useState('open-order');
  const [isSelectedPairOnly, setIsSelectedPairOnly] = useState(false);
  const [orderType, setOrderType] = useState('limit');
  const { isLoggedIn } = useAuth();

  if (!pair) return <Loading />;

  const { TabPane } = Tabs;

  return (
    <OrderReportsWraperStyled>
      <div className="display-selected-pair">
        <div className="wrapper">
          <AntdSwitch
            size="small"
            checked={isSelectedPairOnly}
            onChange={(checked) => {
              setIsSelectedPairOnly(checked);
            }}
          />
          <span onClick={() => { setIsSelectedPairOnly(!isSelectedPairOnly) }} className="label">Display selected pair only</span>
        </div>

      </div>
      <div className="content">
        <Tabs defaultActiveKey="1" onChange={(e) => { setTab(e) }}>
          <TabPane tab="Open Orders" key="open-order" />
          <TabPane tab="Trade History" key="trade-history" />
          <TabPane tab="Order History" key="order-history" />
          <TabPane tab="Funds" key="funds" />
        </Tabs>
        {
          ['open-order', 'order-history'].includes(tab)
          &&
          <div className="bar-group">
            <div className="bar-left">
              <Switch
                disabled={!isLoggedIn}
                tabs={[{ value: "limit", label: "Limit Order" }, { value: "stop-limit", label: "Stop Limit" }]}
                onChange={(tab) => { setOrderType(tab) }}
              />
            </div>
            {
              tab === 'open-order'
              &&
              <div className="bar-right">
                <Button disabled={!isLoggedIn} ghost>
                  <Icon.CancelOrderIcon useDarkMode />
                  <span>Cancel all</span>
                </Button>
              </div>
            }
          </div>
        }

        <div className="report-group">
          {tab === 'open-order' &&
            (
              orderType === 'limit' ? <OrderOpenReport isSelectedPairOnly={isSelectedPairOnly} pair={pair} /> :
                orderType === 'stop-limit' ? <OrderStopLimitReport isSelectedPairOnly={isSelectedPairOnly} pair={pair} /> : null
            )
          }
          {tab === 'trade-history' && <TradeHistoryReport isSelectedPairOnly={isSelectedPairOnly} pair={pair} />}
          {tab === 'order-history' && <OrderHistoryReport pair={pair} />}
          {tab === 'funds' && <FundReport />}
        </div>
      </div>
    </OrderReportsWraperStyled>
  );
}

export default OrderReportsWrapper;