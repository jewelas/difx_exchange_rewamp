import React, { useState } from "react";
import { Button, Col, Row, Tabs } from "antd";
import { Icon } from "@difx/core-ui";
import { MarketTabsWrapper, MarketWrapper, MarketContentWrapper, MarketGridLayout, TableLastPrice, FavoriteFilter } from "./styled";
import GridView from "./GridView";
import ListView from "./ListView";

export function Stats() {
    const [tab, setTab] = useState('favorites');
    const [cardVisible, setCardVisible] = useState(false);
    const [listVisible, setListVisible] = useState(true);
    const { TabPane } = Tabs;

  const showCardLayout = () => {
      setCardVisible(true);
      setListVisible(false);
  };
  const showListLayout = () => {
    setListVisible(true);
    setCardVisible(false);
};
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
                                <Button onClick={showListLayout}><Icon.ListViewIcon /></Button>
                            </Col>
                            <Col>
                            <Button onClick={showCardLayout}><Icon.CardViewIcon /></Button>
                            </Col>
                        </Row>
                    </MarketGridLayout>
                </Col>
            </Row>
        </MarketTabsWrapper>
        <MarketContentWrapper>
            <div>
                {tab === 'favorites' &&
                <>
                  <FavoriteFilter>
                    <Button>
                      Spot-8
                    </Button>
                    <Button>
                      Futures-8
                    </Button>
                  </FavoriteFilter>
                  { listVisible ? <ListView /> : null }
                  { cardVisible ? <GridView /> : null }
                </>
                }
                {tab === 'spot' && "Spot"}
                {tab === 'futures' && "Futures"}
            </div>
        </MarketContentWrapper>
    </MarketWrapper>
  );
}

export default Stats;
