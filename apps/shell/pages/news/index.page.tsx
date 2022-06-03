import React from "react";
import AppLayout from "../index.page";
import { Layout } from 'antd';
import { NewsContentStyled } from "./styled";

export function NewsLayout() {

  return (
    <AppLayout>
        <NewsContentStyled>
          <Layout>
            News Page...
          </Layout>
        </NewsContentStyled>
    </AppLayout>
  );
}

export default NewsLayout;
