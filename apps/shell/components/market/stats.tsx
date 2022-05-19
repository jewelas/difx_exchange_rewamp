import React, { useMemo, useState } from "react";
import { Button, Col, Row, Space, Switch, Tabs } from "antd";
import { Icon, Typography } from "@difx/core-ui";
import { MarketTabsWrapper, MarketWrapper, MarketContentWrapper, MarketGridLayout, TableLastPrice, FavoriteFilter, SpotFilter } from "../../pages/market/styled";
import GridView from "./GridView";
import ListView from "./ListView";
import clsx from 'clsx';

export function Stats({spotList, futuresList, categoriesList, spotFavorites, futureFavorites}) {
    const [tab, setTab] = useState('favorites');
    const [favoriteTab, setFavoriteTab] = useState('spot');
    const [spotCategories, setSpotCategories] = useState('all');
    const [cardVisible, setCardVisible] = useState(false);
    const { TabPane } = Tabs;

    const filterPairsByCategory = useMemo(()=>{
      if(spotCategories!=='all'){
        if(!spotList) return [];
        return spotList.filter(e=>e.categories && e.categories.includes(spotCategories))
      }
      return [];
    },[spotCategories]);
  return (
    <MarketWrapper>
        <MarketTabsWrapper>
            <Row justify="space-between" align="middle">
                <Col>
                    <div className="content">
                        <Tabs defaultActiveKey="favorites" onChange={(e) => { setTab(e) }} size="large" tabBarGutter={50}>
                            <TabPane tab={<Space className="d-flex"><Icon.FavoriteIcon fill="#FFC107" variant="medium" width={14} height={14} /><div>Favorites</div></Space>} key="favorites" />
                            <TabPane tab="Spot" key="spot" />
                            <TabPane tab="Futures" key="futures" />
                        </Tabs>
                    </div>
                </Col>
                <Col>
                    <MarketGridLayout>
                    <Switch
                    size="small"
                    checked={cardVisible}
                    onChange={() => {
                      setCardVisible(!cardVisible);
                    }}
                  /> <Typography level="B2"> Quick buy</Typography>
                    </MarketGridLayout>
                </Col>
            </Row>
        </MarketTabsWrapper>
        <MarketContentWrapper>
            <div>
                {tab === 'favorites' &&
                <>
                  <FavoriteFilter>
                    <Tabs onChange={(e) => { setFavoriteTab(e) }}>
                      <TabPane tab="Spot" key="spot" />
                      <TabPane tab="Future" key="future" />
                    </Tabs>
                  </FavoriteFilter>
                  {favoriteTab === 'spot' && 
                  <>
                    { cardVisible ? <GridView datatype="spot" data={spotFavorites} /> : <ListView datatype="spot" data={spotFavorites} categoriesList={categoriesList} />}
                  </>
                  }
                  {favoriteTab === 'future' && 
                  <>
                    { cardVisible ? <GridView  datatype="future" data={futureFavorites} /> : <ListView datatype="future" data={futureFavorites} categoriesList={categoriesList} />}
                  </>
                  }
                </>
                }
                {tab === 'spot' && 
                  <>
                  <SpotFilter>
                  <Button onClick={() => { setSpotCategories('all') }} className={clsx('tab', spotCategories==='all'?'active':'')}>All</Button>
                    {
                      categoriesList && categoriesList.map(e=>
                        <Button key={`tab_${e}`} onClick={() => { setSpotCategories(e) }} className={clsx('tab', spotCategories===e?'active':'')}>{e}</Button>  
                      )
                    }
                  </SpotFilter>
                  {spotCategories === 'all' && 
                  <>
                    { cardVisible ? <GridView datatype="spot" data={spotList} /> : <ListView datatype="spot" data={spotList} categoriesList={categoriesList} />}
                  </>
                  }
                  { 
                  spotCategories !== 'all' &&
                  <> 
                    {cardVisible ? <GridView datatype="spot" data={filterPairsByCategory} /> : <ListView datatype="spot" data={filterPairsByCategory} categoriesList={categoriesList} />}
                  </>
                  }
                </>
                }
                {tab === 'futures' && 
                  <>
                  { cardVisible ? <GridView datatype="future" data={futuresList} /> : <ListView datatype="future" data={futuresList} categoriesList={categoriesList} />}
                </>
                }
            </div>
        </MarketContentWrapper>
    </MarketWrapper>
  );
}

export default Stats;
