import React, { useEffect } from "react";
import AppLayout from "../index.page";
import { Layout } from 'antd';
import { PageStyled, WalletContentStyled } from "./styled";
import WalletSidebar from "../../components/wallet/sidebar";
import { useRouter } from "next/router";

export interface WalletLayoutProps {
  children: React.ReactChild;
}

export function WalletLayout({ children }: WalletLayoutProps) {
  const router = useRouter();
  useEffect(() => {
    if(router.pathname === "/wallet"){
    router.push(`/wallet/overview`);
    }
  }, []);

  return (
    <AppLayout>
      <PageStyled>
        <WalletContentStyled>
          <Layout>
            <WalletSidebar />
            {children}
          </Layout>
        </WalletContentStyled>
      </PageStyled>
    </AppLayout>
  );
}

export default WalletLayout;
