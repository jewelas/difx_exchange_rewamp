import { SearchInput } from "@difx/core-ui";
import { Col, Row } from "antd";
import React from "react";
import AppLayout from "..";
import { PageStyled, MarketContentStyled, MarketCard } from "./styled";
import t from "@difx/locale";
import Stats from "./stats";

export function Market() {
  return (
    <AppLayout>
      <PageStyled>
        <MarketContentStyled style={{ padding: "0 50px" }}>
            <Row align="middle">
                <Col span={12}>
                    <div className="title">{t("market.market")}</div>
                    <div className="summary">
                    {t("market.marketDown")}
                    <span style={{ color: "#DB5354" }}> 3.08%</span>
                    </div>
                </Col>
                <Col span={12}>
                    <SearchInput />
                </Col>
            </Row>
            <MarketCard>
                <Stats />
            </MarketCard>
        </MarketContentStyled>
      </PageStyled>
    </AppLayout>
  );
}

export default Market;
