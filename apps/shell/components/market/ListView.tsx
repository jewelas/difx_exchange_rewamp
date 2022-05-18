/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINT, ASSETS_URL } from "@difx/constants";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { useHttpDelete, useHttpPost, useMarketPair } from "@difx/shared";
import { Avatar, Button, Space, Table } from "antd";
import Text from "antd/lib/typography/Text";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Trend from "react-trend";


export function ListView({ data, datatype, categoriesList }) {
  const { 
    setMarketPair,
    drawerVisible,
    setDrawerVisible,
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
  
  const router = useRouter();
  const { mutate: addFavorite } = useHttpPost<null, any>({ onSuccess, endpoint: API_ENDPOINT.ADD_FAVORITES })
  const { mutate: removeFavorite } = useHttpDelete<null, any>({ onSuccess, endpoint: API_ENDPOINT.REMOVE_FAVORITES })


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
  const columns = [
    {
      title: "Coin", key: "symbol",
      sorter: {
        compare: (a, b) => a.symbol.localeCompare(b.symbol)
      },
      render: (item: any) => {
        return (
          <Space>
            <div onClick={() => onfavorite(item)} className="cursor-pointer">
              <Icon.FavoriteIcon fill={item.favorite ? "#FFC107" : "#56595C"} variant="medium" width={14} height={14} />
            </div>
            <Avatar shape="square" size={28} icon={<Icon.CoinPlaceholder width={28} height={28} />} src={`${ASSETS_URL}${item.currency1.toLowerCase()}.png`} /> <span>{item.currency1} <Text type="secondary">/ {item.currency2}</Text></span></Space>
        );
      }
    },
    {
      title: "Last Price", key: "last",
      sorter: (a, b) => a.last - b.last,
      render: (item: any) => {
        return (
          <>
            <Space size={12} direction="vertical">
              {item.last}
              <Text type="secondary">≈ {item.last.toFixed(2)}</Text>
            </Space>
          </>
        )
      },
    },
    {
      title: "24h Change",
      key: "open",
      sorter: (a, b) => a.open - b.last,
      render: (item: any) => {
        return (
          <span className={item.change >= 0 ? "successTag" : "errorTag"}>
            {item.change > 0 ? '+' : ''}{item.change.toFixed(2)}%
          </span>
        )
      }
    },
    { title: "24h Volume", dataIndex: "volume", key: "volume", sorter: (a, b) => a.volume - b.volume },
    {
      title: "Chart",
      key: "pricing",
      width: 80,
      render: (text: string, item: any) => {
        const changed = (item.last / item.open) * 100 - 100;
        return (
          <Trend
            smooth
            data={item.pricing}
            strokeWidth={4}
            autoDraw
            autoDrawDuration={3000}
            strokeLinecap={'round'}
            gradient={[
              changed >= 0
                ? "#21C198"
                : "#ff0000",
            ]}
          />
        );
      },
    },
    {
      title: "Action", key: "action", align: "right",
      render: (text: string, item: any) => (
        <Space size="middle">
          <Button onClick={() => {
            setMarketPair(item.currency1)
            setDrawerVisible(!drawerVisible)
          }}>
            {t("common.info")}
          </Button>
          
            <Button
              type="primary"
              onClick={() => {router.push(`/exchange/${item.symbol}`)}}
            >
              {t("header.trade")}
            </Button>
        </Space>
      )
    },
  ];


  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ['bottomCenter'] }}
        className="common-table"
      />
    </>
  );
}

export default ListView;
