/* eslint-disable @typescript-eslint/no-explicit-any */

import { Icon, Loading, Switch } from "@difx/core-ui";
import { Button, Switch as AntdSwitch, Tabs } from "antd";
import { useState } from 'react';
import FundReport from "./FundReport";
import OrderHistoryReport from "./OrderHistoryReport";
import OrderOpenReport from "./OrderOpenReport";
import OrderStopLimitReport from "./OrderStopLimitReport";
import { OrderReportsWraperStyled } from "./styled";

export function OrderReportsWrapper({ pair }: { pair: string }) {

  const [tab, setTab] = useState('open-order');
  const [isSelectedPairOnly, setIsSelectedPairOnly] = useState(false);

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
          <span onClick={()=>{setIsSelectedPairOnly(!isSelectedPairOnly)}} className="label">Display selected pair only</span>
        </div>

      </div>
      <div className="content">
        <Tabs defaultActiveKey="1" onChange={(e) => { setTab(e) }}>
          <TabPane tab="Open Orders" key="open-order" />
          <TabPane tab="Trade History" key="trade-history" />
          <TabPane tab="Stop Limit Orders" key="stop-limit-orders" />
          <TabPane tab="Funds" key="funds" />
        </Tabs>
        <div className="bar-group">
          <div className="bar-left">
            <Switch
              tabs={[{ value: "limit", label: "Limit Order" }, { value: "stop-limit", label: "Stop Limit" }]}
              onChange={() => { console.log('TODO...') }}
            />
          </div>
          <div className="bar-right">
            <Button ghost>
              <Icon.CancelOrderIcon useDarkMode />
              <span>Cancel all</span>
            </Button>
          </div>
        </div>
        <div className="report-group">
          {tab === 'open-order' && <OrderOpenReport />}
          {tab === 'trade-history' && <OrderHistoryReport pair={pair} />}
          {tab === 'stop-limit-orders' && <OrderStopLimitReport />}
          {tab === 'funds' && <FundReport />}
        </div>
      </div>
    </OrderReportsWraperStyled>
  );
}

export default OrderReportsWrapper;