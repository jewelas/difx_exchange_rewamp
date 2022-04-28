import React from "react";
import { Layout } from "antd";
import AppLayout from "..";
import styled from "styled-components";

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

export function Market() {
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
      </PageStyled>
    </AppLayout>
  );
}

export default Market;
