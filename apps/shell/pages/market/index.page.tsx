import { SearchInput } from "@difx/core-ui";
import { Button, Col, Drawer, Input, Modal, Row } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import AppLayout from "../index.page";
import { PageStyled, MarketContentStyled, MarketCard } from "./styled";
import t from "@difx/locale";
import TopMarket from "./TopMarket";
import Stats from "./stats";
import MarketDrawer from "./drawer";
import { useAtom } from "jotai";
import { marketPairAtom, Market, useHttpGet } from "@difx/shared";
import { QUERY_KEY, API_ENDPOINT } from '@difx/constants';
import MarketModal from "./modal";

export function MarketPage() {
  const { data: marketData } = useHttpGet<null, any>(QUERY_KEY.MARKET_PAIRS, API_ENDPOINT.GET_MARKET_PAIRS, null);
  const [spotList, setSpotList] = useState([])
  const [futuresList, setFuturesList] = useState([])
  const [categoriesList, setCategoriesList] = useState([])
  const [topGainer, setTopGainer] = useState([])
  const [topLooser, setTopLooser] = useState([])
  const [topVolume, setTopVolume] = useState([])

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    if(marketData){
      setSpotList(marketData.spot)
      setFuturesList(marketData.futures)
      setCategoriesList(marketData.categories)
    }
  }, [marketData]);

  useEffect(() => {
    if(spotList){
      const getTopGainer = [...spotList].sort((a,b) => {
          return a.change < b.change ? 1 : -1
      })
      const getTopLooser = [...spotList].sort((a,b) => {
        return a.change > b.change ? 1 : -1
      })
      const getTopVolume = [...spotList].sort((a,b) => {
        return a.volume < b.volume ? 1 : -1
      })
      const filteredFavorites = spotList.filter(spotList => spotList.favorite === true)
      setFavorites(filteredFavorites)
      setTopGainer(getTopGainer)
      setTopLooser(getTopLooser)
      setTopVolume(getTopVolume)
    }
  }, [spotList])

  // const onSearch = (e) => {
  //     const value = e.target.value;
  //     if (value) {
  //       const filteredData = spotList.filter(e => e.currency1.includes(value));
  //       setSpotList(filteredData);
  //     } else {
  //       setSpotList(spotList)
  //     }
  //   }
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showDrawer = () => {
      setVisible(true);
  };
  const onClose = () => {
      setVisible(false)
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <AppLayout>
      <PageStyled>
        <MarketContentStyled style={{ padding: "0 50px" }}>
            <Row align="middle">
                <Col span={12}>
                    <div className="title">{t("market.market")}</div>
                </Col>
                <Col span={12}>
                    {/* <SearchInput onSearch={onSearch} /> */}
                    {/* <Input onChange={onSearch} placeholder="Search" /> */}
                </Col>
            </Row>
            <MarketCard>
              <TopMarket  getTopGainer={topGainer} getTopLooser={topLooser} getTopVolume={topVolume} getFutures={futuresList} />
            </MarketCard>
            <Stats spotList={spotList} futuresList={futuresList} categoriesList={categoriesList} favorites={favorites} />
        </MarketContentStyled>
        {/* <Button onClick={showDrawer}>
        Info
      </Button>
      <Button type="primary" onClick={showModal}>
        Trade
      </Button> */}
        <Drawer
          title="Overview"
          placement="left"
          onClose={onClose}
          visible={visible}
        >
          <MarketDrawer />
        </Drawer>
        <Modal title="&nbsp;" visible={isModalVisible} footer={null}>
            <MarketModal />
        </Modal>
      </PageStyled>
    </AppLayout>
  );
}

export default MarketPage;
