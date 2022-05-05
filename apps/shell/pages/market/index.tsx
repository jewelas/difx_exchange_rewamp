import { Icon, SearchInput } from "@difx/core-ui";
import { Col, Row, Tabs } from "antd";
import React, { useState } from "react";
import AppLayout from "..";
import { PageStyled, MarketContentStyled, MarketCard, MarketTabsWrapper, MarketWrapper, MarketContentWrapper, MarketGridLayout } from "./styled";
import t from "@difx/locale";
import Stats from "./stats";



export function Market() {
    const [tab, setTab] = useState('favorites');
    const { TabPane } = Tabs;
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
            <MarketWrapper>
                <MarketTabsWrapper>
                    <Row justify="space-between" align="middle">
                        <Col>
                            <div className="content">
                                <Tabs defaultActiveKey="1" onChange={(e) => { setTab(e) }} size="large" tabBarGutter={50}>
                                    <TabPane tab={<Row className="d-flex"><Icon.FavoriteIcon fill="#FFC107" variant="medium" /><div style={{marginLeft: 8}}>Favorites</div></Row>} key="favorites" />
                                    <TabPane tab="Spot" key="spot" />
                                    <TabPane tab="Futures" key="futures" />
                                </Tabs>
                            </div>
                        </Col>
                        <Col>
                            <MarketGridLayout>
                                <Row>
                                    <Col style={{marginRight:5}}>
                                        <Icon.ListViewIcon />
                                    </Col>
                                    <Col>
                                        <Icon.CardViewIcon />
                                    </Col>
                                </Row>
                            </MarketGridLayout>
                        </Col>
                    </Row>
                </MarketTabsWrapper>
                <MarketContentWrapper>
                    <div className="report-group">
                        {tab === 'favorites' && "Favoritessssssssss"}
                        {tab === 'spot' && "Spot"}
                        {tab === 'futures' && "Futures"}
                    </div>
                </MarketContentWrapper>
            </MarketWrapper>
        </MarketContentStyled>
      </PageStyled>
    </AppLayout>
  );
}

export default Market;
