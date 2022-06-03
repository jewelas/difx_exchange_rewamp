import React, { useEffect } from "react";
import { Layout } from "antd";
import { useRouter } from "next/router";
import AppLayout from "../index.page";
import { PageStyled, NotificationContentStyled } from "./styled";
import NotificationSidebar from "../../components/notification/sidebar";

export interface NotificationLayoutProps {
  children: React.ReactChild;
}

export function NotificationLayout({ children }: NotificationLayoutProps) {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/notification") {
      router.push(`/notification/all-notification`);
    }
  }, []);

  return (
    <AppLayout>
      <PageStyled>
        <NotificationContentStyled>
          <Layout>
            <NotificationSidebar />
            {children}
          </Layout>
        </NotificationContentStyled>
      </PageStyled>
    </AppLayout>
  );
}

export default NotificationLayout;
