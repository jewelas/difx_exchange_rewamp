import React, { useEffect } from "react";
import { socket } from "@difx/shared";
import { useRouter } from "next/router";
import { Responsive, WidthProvider } from "react-grid-layout";
import AppLayout from "..";
import OrderBookWrapper from "../../components/exchange/OrderBookWrapper";
import { PageStyled } from "./styled";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

/* eslint-disable-next-line */
export interface ExchangePageProps {}

export function ExchangePage(props: ExchangePageProps) {
  const router = useRouter();
  const { pair } = router.query;

  useEffect(() => {
    if (pair) {
      socket.send("leave", pair);
      socket.send("join", pair);
    }
    return () => socket.disconnect();
  }, [pair]);

  const ResponsiveGridLayout = WidthProvider(Responsive);

  const lg = [
    { i: "order-book", x: 0, y: 0, w: 6, h: 6, minH: 6, static: true },

    { i: "pair-info", x: 6, y: 0, w: 12, h: 1 },
    { i: "chart", x: 6, y: 1, w: 12, h: 3 },
    { i: "place-order", x: 6, y: 2, w: 12, h: 2 },

    { i: "pair-search", x: 18, y: 0, w: 6, h: 3 },
    { i: "trade-info", x: 18, y: 1, w: 6, h: 3 },

    { i: "report", x: 0, y: 3, w: 24, h: 2 },
  ];

  const md = [
    { i: "pair-info", x: 0, y: 0, w: 16, h: 1 },
    { i: "chart", x: 0, y: 1, w: 16, h: 3 },
    { i: "place-order", x: 0, y: 2, w: 16, h: 2 },

    { i: "pair-search", x: 16, y: 0, w: 8, h: 3 },
    { i: "trade-info", x: 16, y: 1, w: 8, h: 3 },

    { i: "report", x: 0, y: 0, w: 16, h: 6 },
    { i: "order-book", x: 16, y: 0, w: 8, h: 6, minH: 6 },
  ];

  const layouts = {
    lg,
    md,
  };

  const handleGridResize = (widgets) => {
    // TODO
  };

  return (
    <AppLayout>
      <PageStyled>
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 24, md: 24, sm: 24, xs: 1, xxs: 1 }}
          onResizeStop={handleGridResize}
        >
          <div key="order-book">
            <OrderBookWrapper />
          </div>
          <div key="pair-info" className="temp">
            Pair Info
          </div>
          <div key="chart" className="temp">
            Chart
          </div>
          <div key="pair-search" className="temp">
            Search
          </div>
          <div key="trade-info" className="temp">
            Trade Info
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
