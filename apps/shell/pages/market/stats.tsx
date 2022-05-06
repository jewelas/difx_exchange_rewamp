import React, { useState } from "react";
import { Col, Row, Tabs } from "antd";
import { Icon } from "@difx/core-ui";
import { MarketTabsWrapper, MarketWrapper, MarketContentWrapper, MarketGridLayout, TableLastPrice } from "./styled";
import GridView from "./gridView";
import ListView from "./ListView";

export function Stats() {
    const [tab, setTab] = useState('favorites');
    const { TabPane } = Tabs;
  return (
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
                {tab === 'favorites' &&
                <div> 
                    <ListView  />
                    <GridView />
                </div>
                }
                {tab === 'spot' && "Spot"}
                {tab === 'futures' && "Futures"}
            </div>
        </MarketContentWrapper>
    </MarketWrapper>
  );
}

export default Stats;
