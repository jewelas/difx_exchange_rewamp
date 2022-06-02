import React from "react";
import AppLayout from "../index.page";
import { Layout } from 'antd';
import { RewardsContentStyled } from "./styled";

export function RewardsLayout() {

  return (
    <AppLayout>
        <RewardsContentStyled>
          <Layout>
            Rewards Page...
          </Layout>
        </RewardsContentStyled>
    </AppLayout>
  );
}

export default RewardsLayout;
