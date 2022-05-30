import React, { useEffect, useState, useCallback } from "react";
import { Avatar, Button, Card, Col, Row } from "antd";
import Text from "antd/lib/typography/Text";
import { CoinText, CoinPriceInfo, MarketCardBtns, CardStar, GridWrapper } from "../../pages/market/styled";
import { Icon, TrendChart } from "@difx/core-ui";
import { API_ENDPOINT, ASSETS_URL } from "@difx/constants";
import { isLoggedInAtom, useFavourites, useHttpDelete, useHttpPost, useMarketModal, useMarketPair } from "@difx/shared";
import Trend from "react-trend";
import { useRouter } from "next/router";
import { useAtomValue } from "jotai";
import { LastPriceWrapper } from "./styled";
import clsx from "clsx";

const LastPrice = ({price}) => {
  const [currentPirce, setCurrentPirce] = useState(price)
  const [ priceTrend, setPriceTrend ] = useState("")

  useEffect(()=>{
    if(price){
      if(price > currentPirce){
        setPriceTrend("up")
      }else if(price < currentPirce){
        setPriceTrend("down")
      }
      setCurrentPirce(price)
      setTimeout(()=>{
        setPriceTrend("")
      },3000)
    }
  },[price])

  if(!currentPirce) return null

  return (
    <LastPriceWrapper 
      className={clsx({up: (priceTrend === "up")},{down: (priceTrend === "down")})}
    >
        ${currentPirce}
    </LastPriceWrapper>
  )
}


export function GridView({data, datatype}) {
  const {setMarketPair, modalVisible, setModalVisible, setQuickBuyType} = useMarketModal()
  const isLoggedIn = useAtomValue(isLoggedInAtom)

  const router = useRouter();

  const {
    spotFavourite,
    futureFavourite,
    addSpotFavourites,
    addFutureFavourites,
    removeSpotFavourites,
    removeFutureFavourites
  } = useFavourites()

  const onfavorite = (pair) => {
    pair.type = datatype
    if(datatype === "spot"){
      if(spotFavourite.includes(pair)){
        removeSpotFavourites(pair)
      }else{
        addSpotFavourites(pair)
      }
    }else{
      if(futureFavourite.includes(pair)){
        removeFutureFavourites(pair)
      }else{
        addFutureFavourites(pair)
      }
    }
  }

  const isFavourite = useCallback((pair) => {
    if(datatype === "spot"){
      return spotFavourite.find(item => item.symbol === pair.symbol) ? true : false
    }else{
      return futureFavourite.find(item => item.symbol === pair.symbol) ? true : false
    }
  },[spotFavourite, futureFavourite])

  return (
    <GridWrapper>
        <Row gutter={[16, 16]}>
           {
             !data
               ?
               "Loading..."
               :
               data.map(item =>
                <Col xs={24} xl={6} sm={12} key={item.symbol}>
                    <Card>
                        <CardStar onClick={() => onfavorite(item)} className="cursor-pointer"><Icon.FavoriteIcon fill={isFavourite(item) ? "#FFC107" : "#56595C"} variant="medium" /></CardStar>
                        <Row justify="space-between" align="middle">
                            <Col span={14}>
                            <CoinText>
                                <Avatar shape="square" size={42} src={`${ASSETS_URL}${item.currency1.toLowerCase()}.png`}/>
                                <Text>{item.currency1}<Text type="secondary"> / {item.currency2}</Text></Text>
                            </CoinText>
                            </Col>
                            <Col span={10}>
                            <TrendChart 
                              data={item.pricing}
                              backgroundColor={ (item.last / item.open) * 100 - 100 >= 0 ? "#21C198" : "#ff0000"}
                              lineColor={ (item.last / item.open) * 100 - 100 >= 0 ? "#21C198" : "#ff0000"}
                            />
                            </Col>
                        </Row>
                        <CoinPriceInfo>
                            <Row gutter={10}>
                                <Col span={8}>
                                    <Text type="secondary">
                                        Last Price
                                    </Text>
                                    <Text><LastPrice price={item.last} /></Text>
                                </Col>
                                <Col span={8}>
                                    <Text type="secondary">
                                    24h Change
                                    </Text>
                                    <Text type={item.change > 0 ? "success" : "danger"}>{item.change > 0 ? '+' : ''}{item.change.toFixed(2)}%</Text>
                                </Col>
                                <Col span={8}>
                                    <Text type="secondary">
                                    24h Volume
                                    </Text>
                                    <Text>{item.volume.toFixed(1)}</Text>
                                </Col>
                            </Row>
                        </CoinPriceInfo>
                        <MarketCardBtns>
                            <Row gutter={20}>
                                <Col span={12}>
                                    <Button type="primary" className="success" onClick={() => {
                                      if(isLoggedIn){
                                        setMarketPair(item.currency1)
                                        setQuickBuyType("buy")
                                        setModalVisible(!modalVisible)
                                      }else{
                                        router.push(`/login`)
                                      }
                                    }}>
                                      Buy
                                    </Button>
                                </Col>
                                <Col span={12}>
                                    <Button type="primary" className="danger"
                                      onClick={() => {
                                        if(isLoggedIn){
                                          setMarketPair(item.currency1)
                                          setQuickBuyType("sell")
                                          setModalVisible(!modalVisible)
                                        }else{
                                          router.push(`/login`)
                                        }
                                      }}
                                    >
                                      Sell
                                    </Button>
                                </Col>
                            </Row>
                        </MarketCardBtns>
                    </Card>
                </Col>
               )
           }
        </Row>
    </GridWrapper>
  );
}

export default GridView;
