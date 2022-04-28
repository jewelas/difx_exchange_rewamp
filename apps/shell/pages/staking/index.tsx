import React from "react";
import { Layout } from "antd";
import AppLayout from "..";
import styled from "styled-components";

const PageStyled = styled.div``;

const StakingContentStyled = styled(Layout.Content)`
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

export function Staking() {
  return (
    <AppLayout>
      <PageStyled>
        <StakingContentStyled style={{ padding: "0 50px" }}>
          <div className="title">staking</div>
        </StakingContentStyled>
      </PageStyled>
    </AppLayout>
  );
}

export default Staking;
