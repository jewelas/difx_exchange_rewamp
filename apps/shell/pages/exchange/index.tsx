import { Responsive, WidthProvider } from "react-grid-layout";
import AppLayout from '..';
import { PageStyled } from './styled';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

/* eslint-disable-next-line */
export interface ExchangePageProps { }

export function ExchangePage(props: ExchangePageProps) {

  const ResponsiveGridLayout = WidthProvider(Responsive);

  const lg = [
    { i: "order-book", x: 0, y: 0, w: 6, h: 6},

    { i: "pair-info", x: 6, y: 0, w: 12, h: 1},
    { i: "chart", x: 6, y: 1, w: 12, h: 3 },
    { i: "place-order", x: 6, y: 2, w: 12, h: 2 },

    { i: "pair-search", x: 18, y: 0, w: 6, h: 3 },
    { i: "trade-info", x: 18, y: 1, w: 6, h: 3 },

    { i: "report", x: 0, y: 3, w: 24, h: 2 },
  ];

  const md = [
    { i: "pair-info", x: 0, y: 0, w: 16, h: 1},
    { i: "chart", x: 0, y: 1, w: 16, h: 3 },
    { i: "place-order", x: 0, y: 2, w: 16, h: 2 },
    { i: "report", x: 0, y: 3, w: 16, h: 3 },

    { i: "pair-search", x: 16, y: 0, w: 8, h: 3 },
    { i: "trade-info", x: 16, y: 1, w: 8, h: 3 },
    { i: "order-book", x: 16, y: 0, w: 8, h: 3},
  ];

  const layouts = {
    lg, md
  }

  return (
    <AppLayout>
      <PageStyled>
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 24, md:24, sm: 24, xs: 1, xxs: 1 }}>
          <div key="order-book" style={{ border: 'solid 1px red' }}>Order Book</div>
          <div key="pair-info" style={{ border: 'solid 1px blue' }}>Pair Info</div>
          <div key="chart" style={{ border: 'solid 1px green' }}>Chart</div>
          <div key="pair-search" style={{ border: 'solid 1px green' }}>Search</div>
          <div key="trade-info" style={{ border: 'solid 1px green' }}>Trade Info</div>
          <div key="place-order" style={{ border: 'solid 1px green' }}>Place Order</div>
          <div key="report" style={{ border: 'solid 1px green' }}>Report</div>
        </ResponsiveGridLayout>
      </PageStyled>
    </AppLayout>
  );
}

export default ExchangePage;
