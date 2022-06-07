import React from "react";
import { Layout } from "antd";
import AppLayout from "../index.page";
import Rewards from "../../components/rewards/Rewards";
import { RewardsContentStyled } from "./styled";

export function RewardsLayout() {
  return (
    <AppLayout>
      <RewardsContentStyled>
        <Layout>
          <Rewards />
        </Layout>
      </RewardsContentStyled>
    </AppLayout>
  );
}

export default RewardsLayout;
