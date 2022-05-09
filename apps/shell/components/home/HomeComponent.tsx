import { PairTable } from "@difx/core-ui";
import { PairType, useHttpGet } from "@difx/shared";
import { API_ENDPOINT, QUERY_KEY } from "@difx/constants";
import { ListPairsContentStyled, MarketContentStyled, PageStyled } from './styled';
import { useEffect } from "react";
/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  const { data , isLoading } = useHttpGet<null,any>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, { refetchInterval: 10000 });

  return (
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
            {
              isLoading ? <span>Loading</span> : <PairTable pairs={data.spot} />
            }
          </div>
        </ListPairsContentStyled>
      </PageStyled>
  );
}

export default HomePage;
