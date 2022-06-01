import React, { useEffect } from "react";
import AppLayout from "../index.page";
import { Layout } from 'antd';
import { PageStyled, OrderContentStyled } from "./styled";
import OrderSidebar from "../../components/orders/sidebar";
import { useRouter } from "next/router";

export interface WalletLayoutProps {
  children: React.ReactChild;
}

export function OrderLayout({ children }: WalletLayoutProps) {
  const router = useRouter();
  useEffect(() => {
    if(router.pathname === "/orders"){
    router.push(`/orders/spot/open-orders`);
    }
  }, []);

  return (
    <AppLayout>
      <PageStyled>
        <OrderContentStyled>
          <Layout>
            <OrderSidebar />
            {children}
          </Layout>
        </OrderContentStyled>
      </PageStyled>
    </AppLayout>
  );
}

export default OrderLayout;
