/* eslint-disable react-hooks/exhaustive-deps */
import { EXCHANGE_LAYOUT, STORE_KEY } from "@difx/constants";
import { Loading } from "@difx/core-ui";
import { useLocalStorage } from "@difx/shared";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import ChartContainer from "../../components/exchange/ChartContainer";
import ListPairWrapper from "../../components/exchange/ListPairWrapper";
import OrderBookWrapper from "../../components/exchange/OrderBookWrapper";
import OrderReportsWrapper from "../../components/exchange/OrderReportsWrapper";
import PairMetaDataWrapper from "../../components/exchange/PairMetaDataWrapper";
import PlaceOrderWrapper from "../../components/exchange/PlaceOrderWrapper";
import TradeInfoWrapper from "../../components/exchange/TradeInfoWrapper";
import AppLayout from "../index.page";
import { breakpoints, getLayoutType } from "./LayoutType";
import { PageStyled } from "./styled";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

/* eslint-disable-next-line */
export interface ExchangePageProps {
  isStaticWidgets?: boolean;
}

const ResponsiveGridPaddingLRLayout = WidthProvider(Responsive);
const ResponsiveGridLayout = WidthProvider(Responsive);
export function ExchangePage({ isStaticWidgets = false }: ExchangePageProps) {

  const router = useRouter();
  const { pair } = router.query;

  const initLayouts = getLayoutType('default', isStaticWidgets);
  const [layouts, setLayouts] = useState(initLayouts);
  const [layoutType, setLayoutType] = useState(null);

  const { value: exchangeStyles } = useLocalStorage(STORE_KEY.EXCHANGE_STYLE, {});
  useEffect(() => {
    if (!isEmpty(exchangeStyles)) {
      const { layout } = exchangeStyles;
      setLayoutType(layout);
      if (layout === 'default') setLayouts(initLayouts);
      else if (layout === 'compact') setLayouts(getLayoutType('compact', isStaticWidgets));
      else if (layout === 'pro') setLayouts(getLayoutType('pro', isStaticWidgets));
    }else setLayoutType('default')
  }, [exchangeStyles.layout]);

  const handleGridResize = (widgets) => {
    // TODO
  };

  const { setValue: setLastPair } = useLocalStorage(STORE_KEY.LAST_PAIR, null);
  useEffect(() => {
    if (pair) setLastPair(pair)
  }, [pair]);

  if(!layoutType) return <AppLayout>
  <div style={{ left:0, top:0, position: 'absolute', width: '100%', height: '100%' }}>
    <Loading style={{ padding:'unset', height: '100%' }} />
  </div>
</AppLayout>

  const GridLayout = layoutType === 'default' ? ResponsiveGridPaddingLRLayout: ResponsiveGridLayout

  return (
    <AppLayout>
      <PageStyled className={layoutType === 'default' && 'shrink'}>
        <GridLayout
          margin={[5, 5]}
          rowHeight={50}
          className="layout"
          layouts={layouts}
          breakpoints={breakpoints}
          cols={{ lg: 24, md: 24, sm: 24, xs: 1, xxs: 1 }}
          onResizeStop={handleGridResize}
        >
          <div key="order-book" className="base">
            {pair && <OrderBookWrapper pair={pair as string} layout={layoutType as string} />}
          </div>
          <div key="pair-info" className="base">
            {pair && <PairMetaDataWrapper pair={pair as string} layout={layoutType as EXCHANGE_LAYOUT} />}
          </div>
          <div key="chart" className="base">
            {/* {pair && <ChartWrapper pair={pair as string} />} */}
            {pair && <ChartContainer pair={pair as string} />}
          </div>
          {
            (!layoutType || ['default', 'pro'].includes(layoutType))
            &&
            <div key="pair-search" className="base">
              <ListPairWrapper pair={pair as string}/>
            </div>
          }
          <div key="trade-info" className="base">
            {pair && <TradeInfoWrapper pair={pair as string} />}
          </div>
          <div key="place-order" className="base">
            {pair && <PlaceOrderWrapper pair={pair as string} layout={layoutType as string}  />}
          </div>
          <div key="report" className="base">
            {pair && <OrderReportsWrapper pair={pair as string} layout={layoutType as string} />}
          </div>
        </GridLayout>
      </PageStyled>
    </AppLayout>
  );
}

export default ExchangePage;
