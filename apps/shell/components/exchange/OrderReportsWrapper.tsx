/* eslint-disable @typescript-eslint/no-explicit-any */

import { Loading } from "@difx/core-ui";
import { Tabs, Checkbox } from "antd";
import { useState } from 'react';
import OrderOpenReport from "./OrderOpenReport";
import OrderHistoryReport from "./OrderHistoryReport";
import FundReport from "./FundReport";
import { OrderReportsWraperStyled } from "./styled";
import OrderStopLimitReport from "./OrderStopLimitReport";

export function OrderReportsWrapper({ pair }: { pair: string }) {

  const [tab, setTab] = useState('open-order');

  if (!pair) return <Loading />;

  const { TabPane } = Tabs;

  return (
    <OrderReportsWraperStyled>
      <div className="display-selected-pair">
        <Checkbox onChange={() => {/** TODO */}}><span className="label">Display selected pair only</span></Checkbox>
      </div>
      <div className="content">
        <Tabs defaultActiveKey="1" onChange={(e) => { setTab(e) }}>
          <TabPane tab="Open Orders" key="open-order" />
          <TabPane tab="Trade History" key="trade-history" />
          <TabPane tab="Stop Limit Orders" key="stop-limit-orders" />
          <TabPane tab="Funds" key="funds" />
        </Tabs>
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