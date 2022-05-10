import { useRouter } from "next/router";
import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
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

  const layouts = getLayoutType(isStaticWidgets);

  const handleGridResize = (widgets) => {
    // TODO
  };

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
          <div key="order-book">
            {pair && <OrderBookWrapper pair={pair as string} />}
          </div>
          <div key="pair-info" className="base">
            {pair && <PairMetaDataWrapper pair={pair as string} />}
          </div>
          <div key="chart" className="base">
            {pair && <ChartWrapper pair={pair as string} />}
          </div>
          <div key="pair-search" className="base">
            <ListPairWrapper />
          </div>
          <div key="trade-info" className="base">
            {pair && <TradeInfoWrapper pair={pair as string} />}
          </div>
          <div key="place-order" className="base">
            {pair && <PlaceOrderWrapper pair={pair as string} />}
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