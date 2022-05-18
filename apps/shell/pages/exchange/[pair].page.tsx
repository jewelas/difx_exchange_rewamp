/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useLocalStorage } from "@difx/shared";
import { STORE_KEY } from "@difx/constants";
import AppLayout from "../index.page";
import ListPairWrapper from "../../components/exchange/ListPairWrapper";
import OrderBookWrapper from "../../components/exchange/OrderBookWrapper";
import PairMetaDataWrapper from "../../components/exchange/PairMetaDataWrapper";
import ChartWrapper from "../../components/exchange/ChartWrapper";
import TradeInfoWrapper from "../../components/exchange/TradeInfoWrapper";
import PlaceOrderWrapper from "../../components/exchange/PlaceOrderWrapper";
import OrderReportsWrapper from "../../components/exchange/OrderReportsWrapper";
import { getLayoutType, breakpoints } from "./LayoutType";
import { PageStyled } from "./styled";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

/* eslint-disable-next-line */
export interface ExchangePageProps {
  isStaticWidgets?: boolean;
}

const ResponsiveGridLayout = WidthProvider(Responsive);

export function ExchangePage({ isStaticWidgets = false }: ExchangePageProps) {

  const router = useRouter();
  const { pair } = router.query;

  const initLayouts = getLayoutType('default', isStaticWidgets);
  const [layouts, setLayouts] = useState(initLayouts);
  const [layoutType, setLayoutType] = useState(null);

  const { value: exchangeStyles, setValue: setExchangeStyles } = useLocalStorage(STORE_KEY.EXCHANGE_STYLE, {});
  useEffect(() => {
    if (!isEmpty(exchangeStyles)) {
      const { layout } = JSON.parse(exchangeStyles);
      setLayoutType(layout);
      if (layout === 'default') setLayouts(initLayouts);
      else if (layout === 'compact') setLayouts(getLayoutType('compact', isStaticWidgets));
      else if (layout === 'pro') setLayouts(getLayoutType('pro', isStaticWidgets));
    }
  }, [exchangeStyles]);

  console.log(layoutType,'layoutType');
  console.log(layouts, 'layoutss')

  const handleGridResize = (widgets) => {
    // TODO
  };

  const { setValue: setLastPair } = useLocalStorage(STORE_KEY.LAST_PAIR, null);
  useEffect(() => {
    if (pair) setLastPair(pair)
  }, [pair]);

  console.log(exchangeStyles);

  return (
    <AppLayout>
      <PageStyled>
        <ResponsiveGridLayout
          margin={[5, 5]}
          rowHeight={70}
          className="layout"
          layouts={layouts}
          breakpoints={breakpoints}
          cols={{ lg: 24, md: 24, sm: 24, xs: 1, xxs: 1 }}
          onResizeStop={handleGridResize}
        >
          <div key="order-book" className="base">
            {pair && <OrderBookWrapper pair={pair as string} />}
          </div>
          <div key="pair-info" className="base">
            {pair && <PairMetaDataWrapper pair={pair as string} />}
          </div>
          <div key="chart" className="base">
            {pair && <ChartWrapper pair={pair as string} />}
          </div>
          {
            (!layoutType || layoutType === 'default')
            &&
            <div key="pair-search" className="base">
              <ListPairWrapper />
            </div>
          }
          <div key="trade-info" className="base">
            {pair && <TradeInfoWrapper pair={pair as string} />}
          </div>
          <div key="place-order" className="base">
            {pair && <PlaceOrderWrapper pair={pair as string} layout={layoutType as string}  />}
          </div>
          <div key="report" className="base">
            {pair && <OrderReportsWrapper pair={pair as string} />}
          </div>
        </ResponsiveGridLayout>
      </PageStyled>
    </AppLayout>
  );
}

export default ExchangePage;
