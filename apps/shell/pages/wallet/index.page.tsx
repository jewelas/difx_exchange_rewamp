import React from "react";
import AppLayout from "../index.page";
import { Layout } from 'antd';
import { PageStyled, WalletContentStyled } from "./styled";
import WalletSidebar from "../../components/wallet/sidebar";

const { Content } = Layout;

export function WalletPage() {
  return (
    <AppLayout>
      <PageStyled>
        <WalletContentStyled>
          <Layout>
            <WalletSidebar />
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </WalletContentStyled>
      </PageStyled>
    </AppLayout>
  );
}

export default WalletPage;
