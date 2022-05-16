import React, { useState } from "react";
import { Button, Col, Row, Space, Switch, Tabs } from "antd";
import { Icon } from "@difx/core-ui";
import { MarketTabsWrapper, MarketWrapper, MarketContentWrapper, MarketGridLayout, TableLastPrice, FavoriteFilter } from "../../pages/market/styled";
import GridView from "./GridView";
import ListView from "./ListView";

export function Stats({spotList, futuresList, categoriesList, favorites}) {
    const [tab, setTab] = useState('favorites');
    const [cardVisible, setCardVisible] = useState(false);
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
                    <Switch
                    checked={cardVisible}
                    onChange={() => {
                      setCardVisible(!cardVisible);
                    }}
                  /> Quick buy
                    </MarketGridLayout>
                </Col>
            </Row>
        </MarketTabsWrapper>
        <MarketContentWrapper>
            <div>
                {tab === 'favorites' &&
                <>
                  <FavoriteFilter>
                    <Space>
                      <Button className="active" onClick={() => spotList}>
                        Spot
                      </Button>
                      <Button onClick={() => futuresList}>
                        Futures
                      </Button>
                    </Space>
                  </FavoriteFilter>
                  { cardVisible ? <GridView data={favorites} /> : <ListView data={favorites} categoriesList={categoriesList} />}
                </>
                }
                {tab === 'spot' && 
                  <>
                  <FavoriteFilter>
                    <Space>
                    <Button className="active">
                        All
                    </Button>
                    {
                      !categoriesList
                        ?
                        "Loading..."
                        :
                        categoriesList.map(item =>
                      <Button onClick={() => {

                      }}>
                      {item}
                      </Button>
                      )
                    }
                    </Space>
                  </FavoriteFilter>
                  { cardVisible ? <GridView data={spotList} /> : <ListView data={spotList} categoriesList={categoriesList} />}
                </>
                }
                {tab === 'futures' && 
                  <>
                  { cardVisible ? <GridView data={futuresList} /> : <ListView data={futuresList} categoriesList={categoriesList} />}
                </>
                }
            </div>
        </MarketContentWrapper>
    </MarketWrapper>
  );
}

export default Stats;
