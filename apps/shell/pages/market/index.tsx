import { SearchInput } from "@difx/core-ui";
import { Col, Row } from "antd";
import React from "react";
import AppLayout from "..";
import { PageStyled, MarketContentStyled } from "./styled";


export function Market() {
  return (
    <AppLayout>
      <PageStyled>
        <MarketContentStyled style={{ padding: "0 50px" }}>
          <Row align="middle">
            <Col span={12}>
                <div className="title">Market</div>
                <div className="summary">
                    In the pass 24 hours Market is down{" "}
                    <span style={{ color: "#DB5354" }}>3.08%</span>
                </div>
            </Col>
            <Col span={12}>
                <SearchInput />
            </Col>
          </Row>
        </MarketContentStyled>
      </PageStyled>
    </AppLayout>
  );
}

export default Market;
