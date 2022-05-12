import React from "react";
import { Layout } from "antd";
import AppLayout from "../index.page";
import styled from "styled-components";

const PageStyled = styled.div``;

const WalletContentStyled = styled(Layout.Content)`
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

export function Wallet() {
  return (
    <AppLayout>
      <PageStyled>
        <WalletContentStyled style={{ padding: "0 50px" }}>
          <div className="title">wallet</div>
        </WalletContentStyled>
      </PageStyled>
    </AppLayout>
  );
}

export default Wallet;
