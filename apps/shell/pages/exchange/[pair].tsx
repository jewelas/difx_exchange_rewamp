import { useRouter } from "next/router";
import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import AppLayout from "..";
import ListPairWrapper from "../../components/exchange/ListPairWrapper";
import OrderBookWrapper from "../../components/exchange/OrderBookWrapper";
import PairMetaDataWrapper from "../../components/exchange/PairMetaDataWrapper";
import ChartWrapper from "../../components/exchange/ChartWrapper";
import TradeInfoWrapper from "../../components/exchange/TradeInfoWrapper";
import { getLayoutType } from "./LayoutType";
import { PageStyled } from "./styled";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

/* eslint-disable-next-line */
export interface ExchangePageProps {
  isStaticWidgets?: boolean;
}

export function ExchangePage({ isStaticWidgets = false }: ExchangePageProps) {

  const ResponsiveGridLayout = WidthProvider(Responsive);

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
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 24, md: 24, sm: 24, xs: 1, xxs: 1 }}
          onResizeStop={handleGridResize}
        >
          <div key="order-book">
            {pair && <OrderBookWrapper pair={pair as string} />}
          </div>
          <div key="pair-info" className="temp">
            {pair && <PairMetaDataWrapper pair={pair as string} />}
          </div>
          <div key="chart" className="temp">
            {pair && <ChartWrapper pair={pair as string} />}
          </div>
          <div key="pair-search" className="temp">
            <ListPairWrapper />
          </div>
          <div key="trade-info" className="temp">
            {pair && <TradeInfoWrapper pair={pair as string} />}
          </div>
          <div key="place-order" className="temp">
            Place Order
          </div>
          <div key="report" className="temp">
            Report
          </div>
        </ResponsiveGridLayout>
      </PageStyled>
    </AppLayout>
  );
}

export default ExchangePage;
