import React from "react";
import AppLayout from "../index.page";
import { Layout } from 'antd';
import { ReferralContentStyled } from "./styled";

export function ReferralLayout() {

  return (
    <AppLayout>
        <ReferralContentStyled>
          <Layout>
            Referral Page...
          </Layout>
        </ReferralContentStyled>
    </AppLayout>
  );
}

export default ReferralLayout;
