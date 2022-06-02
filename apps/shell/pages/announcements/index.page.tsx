import React from "react";
import AppLayout from "../index.page";
import { Layout } from 'antd';
import { AnnouncementsContentStyled } from "./styled";

export function AnnouncementsLayout() {

  return (
    <AppLayout>
        <AnnouncementsContentStyled>
          <Layout>
            Accouncements Page...
          </Layout>
        </AnnouncementsContentStyled>
    </AppLayout>
  );
}

export default AnnouncementsLayout;
