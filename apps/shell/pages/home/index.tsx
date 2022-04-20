import { PairTable } from "@difx/core-ui";
import { useGetPairs } from "@difx/shared";
import { Layout } from "antd";
import styled from "styled-components";
import AppLayout from "..";

/* eslint-disable-next-line */
export interface HomePageProps {}

const PageStyled = styled.div``;

const MarketContentStyled = styled(Layout.Content)`
  .title {
    font-weight: 600;
    font-size: 30px;
    color: #090e16;
  }
  .summary {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #090e16;
  }
  .widgets {
  }
`;

const ListPairsContentStyled = styled(Layout.Content)`
  background: #fff;
  margin-top: 20px;
  .title {
    font-size: 16px;
    font-weight: 600;
    color: #3d7eff;
    text-transform: uppercase;
    height: 32px;
    border-bottom: solid 2px;
    display: inline-block;
  }
  .pairs {
    margin-top: 20px;
  }
`;

export function HomePage(props: HomePageProps) {
  const { data: pairs } = useGetPairs();

  return (
    <AppLayout>
      <PageStyled>
        <MarketContentStyled style={{ padding: "0 50px" }}>
          <div className="title">Market</div>
          <div className="summary">
            In the pass 24 hours Market is down{" "}
            <span style={{ color: "#DB5354" }}>3.08%</span>
          </div>
        </MarketContentStyled>
        <ListPairsContentStyled style={{ padding: "10px 50px" }}>
          <div className="title">All</div>
          <div className="pairs">
            <PairTable pairs={pairs} />
          </div>
        </ListPairsContentStyled>
      </PageStyled>
    </AppLayout>
  );
}

export default HomePage;
