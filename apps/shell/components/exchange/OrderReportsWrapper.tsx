/* eslint-disable @typescript-eslint/no-explicit-any */

import { Loading } from "@difx/core-ui";
import { Tabs } from "antd";
import { useState } from 'react';
import OrderOpenReport from "./OrderOpenReport";
import OrderHistoryReport from "./OrderHistoryReport";
import { OrderReportsWraperStyled } from "./styled";

export function OrderReportsWrapper({ pair }: { pair: string }) {

  const [tab, setTab] = useState('open-order');

  if (!pair) return <Loading />;

  const { TabPane } = Tabs;

  return (
    <OrderReportsWraperStyled>
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
        </div>
      </div>
    </OrderReportsWraperStyled>
  );
}

export default OrderReportsWrapper;