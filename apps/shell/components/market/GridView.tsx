import React from "react";
import { Avatar, Button, Card, Col, Row } from "antd";
import Text from "antd/lib/typography/Text";
import { CoinText, CoinPriceInfo, MarketCardBtns, CardStar, GridWrapper } from "../../pages/market/styled";
import { Icon } from "@difx/core-ui";
import { API_ENDPOINT, ASSETS_URL } from "@difx/constants";
import { useHttpDelete, useHttpPost, useMarketModal, useMarketPair } from "@difx/shared";
import Trend from "react-trend";


export function GridView({data, datatype}) {
    const {setMarketPair, modalVisible, setModalVisible} = useMarketModal()
    const {
        setSpotFavorites,
        spotFavorites,
        setSpotList,
        setFuturesList,
        futuresList,
        spotList,
        futureFavorites,
        setFutureFavorites 
      } = useMarketPair()

    const onSuccess = (response) => {
        return null
    }

    const { mutate: addFavorite } = useHttpPost<null, any>({ onSuccess, endpoint: API_ENDPOINT.ADD_FAVORITES})
    const { mutate: removeFavorite } = useHttpDelete<null, any>({ onSuccess, endpoint: API_ENDPOINT.REMOVE_FAVORITES})

    const onfavorite = (item) => {
        const requestData = {
          symbol: item.symbol,
          type: datatype
        }
        
        if (item.favorite) {
          if(datatype === "spot"){
            const newSpotFavoriteList = spotFavorites.filter(spotfavitem => spotfavitem.symbol != item.symbol)
            const newSpotList = spotList.map(spotitem => {
              if(spotitem.symbol === item.symbol){
                spotitem.favorite = false
              }
              return spotitem
            })
          setSpotFavorites(newSpotFavoriteList)
          setSpotList(newSpotList)
          removeFavorite(requestData)
          } else {
            const newFutureFavoriteList = futureFavorites.filter(futurefavitem => futurefavitem.symbol != item.symbol)
            const newFutureList = futuresList.map(futureitem => {
              if(futureitem.symbol === item.symbol){
                futureitem.favorite = false
              }
              return futureitem
            })
          setFutureFavorites(newFutureFavoriteList)
          setFuturesList(newFutureList)
          removeFavorite(requestData)
          }
        } else {
          if(datatype === "spot"){
            const spotFavitem = spotList.find(spotfavitem => spotfavitem.symbol === item.symbol)
            const newSpotList = spotList.map(spotitem => {
              if(item.symbol === spotitem.symbol){
                spotitem.favorite = true
              }
              return spotitem
            })
            setSpotFavorites(prev => [...prev, spotFavitem])
            setSpotList(newSpotList)
            addFavorite(requestData)
          } else {
            const futureFavitem = futuresList.find(futurefavitem => futurefavitem.symbol === item.symbol)
            const newFutureList = futuresList.map(futureitem => {
              if(item.symbol === futureitem.symbol){
                futureitem.favorite = true
              }
              return futureitem
            })
            setFutureFavorites(prev => [...prev, futureFavitem])
            setFuturesList(newFutureList)
            addFavorite(requestData)
          }
        }
    
      }
    
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
                        <CardStar onClick={() => onfavorite(item)} className="cursor-pointer"><Icon.FavoriteIcon fill={item.favorite ? "#FFC107" : "#56595C"} variant="medium" /></CardStar>
                        <Row justify="space-between" align="middle">
                            <Col span={14}>
                            <CoinText>
                                <Avatar shape="square" size={42} src={`${ASSETS_URL}${item.currency1.toLowerCase()}.png`}/>
                                <Text>{item.currency1}<Text type="secondary"> / {item.currency2}</Text></Text>
                            </CoinText>
                            </Col>
                            <Col span={10}>
                            <Trend
                                smooth
                                data={item.pricing}
                                strokeWidth={3}
                                autoDraw
                                autoDrawDuration={3000}
                                gradient={[
                                    (item.last / item.open) * 100 - 100 >= 0
                                    ? "#21C198"
                                    : "#ff0000",
                                ]}
                            />
                            </Col>
                        </Row>
                        <CoinPriceInfo>
                            <Row gutter={10}>
                                <Col span={8}>
                                    <Text type="secondary">
                                        Last Price
                                    </Text>
                                    <Text>${item.last}</Text>
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
          setMarketPair(item.currency1)
          setModalVisible(!modalVisible)
        }}>Buy</Button>
                                </Col>
                                <Col span={12}>
                                    <Button type="primary" className="danger">Sell</Button>
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
