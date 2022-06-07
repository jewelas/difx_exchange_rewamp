/* eslint-disable @typescript-eslint/no-explicit-any */

import { Icon, Loading, Switch, showConfirm } from "@difx/core-ui";
import { BaseResponse, isLoggedInAtom, useHttpPut } from "@difx/shared";
import { AxiosResponse } from "axios";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import t from "@difx/locale";
import { API_ENDPOINT } from "@difx/constants";
import { showSuccess, ConvertButton } from "@difx/core-ui";
import { Button, Switch as AntdSwitch, Tabs } from "antd";
import { useEffect, useState } from 'react';
import { useAtomValue } from "jotai/utils";
import FundReport from "./FundReport";
import OrderHistoryReport from "./OrderHistoryReport";
import OrderOpenReport from "./OrderOpenReport";
import OrderStopLimitReport from "./OrderStopLimitReport";
import { OrderReportsWraperStyled } from "./styled";
import TradeHistoryReport from "./TradeHistoryReport";

export function OrderReportsWrapper({ pair, layout = 'default' }: { pair: string, layout?: string }) {

  const [tab, setTab] = useState('open-order');
  const [isSelectedPairOnly, setIsSelectedPairOnly] = useState(false);
  const [orderType, setOrderType] = useState('limit');
  const isLoggedIn = useAtomValue(isLoggedInAtom);

  const [reportHeight, setReportHeight] = useState(197);

  const onSuccess = (response: AxiosResponse<BaseResponse>) => {
    const { message } = response.data;
    showSuccess('Cancel Order', message);
  }
  const { mutate: cancelAllOrders, isLoading } = useHttpPut<null, BaseResponse>({ onSuccess, endpoint: API_ENDPOINT.CANCEL_ALL_ORDERS });

  useEffect(() => {
    if (layout === 'compact') setReportHeight(350);
    else setReportHeight(197)
  }, [layout]);

  if (!pair) return <Loading />;

  const { TabPane } = Tabs;

  return (
    <OrderReportsWraperStyled>
      <div className="display-selected-pair">
        {
          tab !== 'funds'
          &&
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
        }
      </div>
      <div className="content">
        <Tabs defaultActiveKey="1" onChange={(e) => { setTab(e) }}>
          <TabPane tab="Open Orders" key="open-order" />
          <TabPane tab="Trade History" key="trade-history" />
          <TabPane tab="Order History" key="order-history" />
          <TabPane tab="Funds" key="funds" />
        </Tabs>
        {
          ['open-order'].includes(tab)
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
                <Button onClick={() => {
                  showConfirm(
                    t("order.cancel_all_order"),
                    t("order.cancel_all_order_confirm"),
                    () => { if (!isLoading) { cancelAllOrders(null) } },
                    null,
                    <ExclamationCircleOutlined />
                  )
                }}
                  disabled={!isLoggedIn} ghost>
                  <Icon.CancelOrderIcon useDarkMode />
                  <span>{t("order.cancelAll")}</span>
                </Button>
              </div>
            }
          </div>
        }

        <div className="report-group">
          {tab === 'open-order' &&
            (
              orderType === 'limit' ? <OrderOpenReport height={reportHeight} isSelectedPairOnly={isSelectedPairOnly} pair={pair} /> :
                orderType === 'stop-limit' ? <OrderStopLimitReport height={reportHeight} isSelectedPairOnly={isSelectedPairOnly} pair={pair} /> : null
            )
          }
          {tab === 'trade-history' && <TradeHistoryReport height={reportHeight} isSelectedPairOnly={isSelectedPairOnly} pair={pair} />}
          {tab === 'order-history' && <OrderHistoryReport height={reportHeight} isSelectedPairOnly={isSelectedPairOnly} pair={pair} />}
          {tab === 'funds' && <FundReport height={reportHeight} />}
        </div>
      </div>
    </OrderReportsWraperStyled>
  );
}

export default OrderReportsWrapper;