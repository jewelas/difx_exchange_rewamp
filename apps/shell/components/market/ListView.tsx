/* eslint-disable @typescript-eslint/no-explicit-any */
import { ASSETS_URL } from "@difx/constants";
import { Icon, showInfo, TrendChart} from "@difx/core-ui";
import t from "@difx/locale";
import { useFavourites, useMarketPair } from "@difx/shared";
import { Avatar, Button, Space, Table } from "antd";
import Text from "antd/lib/typography/Text";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Trend from "react-trend";
import { LastPriceWrapper } from "./styled";
import clsx from "clsx";
import Item from "antd/lib/list/Item";
import { numFormatter } from "@difx/utils";

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
      <Space size={12} direction="vertical">
        {currentPirce}
        <Text type="secondary">≈ ${currentPirce}</Text>
      </Space>
    </LastPriceWrapper>
  )
}

export function ListView({ data, datatype, categoriesList }) {
  const { 
    setMarketPair,
    drawerVisible,
    setDrawerVisible,
  } = useMarketPair()
  
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
              <Icon.FavoriteIcon fill={isFavourite(item) ? "#FFC107" :  "#56595C"} variant="medium" width={14} height={14} />
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
            <LastPrice price={item.last} />
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
    { title: "24h Volume", key: "volume", sorter: (a, b) => a.volume - b.volume ,
      render: (item: any) => {
        return (
          <Space size={12} direction="vertical">
            <Text>{numFormatter(item.volume)} {item.currency1}</Text>
            
            <Text type="secondary">≈ ${numFormatter(item.volume * item.last)}</Text>
          </Space>
        )
      }
    },
    {
      title: "Chart",
      key: "pricing",
      width: 80,
      render: (text: string, item: any) => {
        return (
          <TrendChart 
            data={item.pricing}
            backgroundColor={ item.change > 0 ? "#21C198" : "#ff0000"}
            lineColor={ item.change > 0 ? "#21C198" : "#ff0000"}
          />
        );
      },
    },
    {
      title: "Action", key: "action", align: "right" as const,
      render: (text: string, item: any) => (
        <Space size="middle">
          <Button onClick={() => {
            setMarketPair({currency: item.currency1,symbol: item.symbol })
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
        pagination={{ position: ['bottomCenter'], hideOnSinglePage: true, defaultPageSize: 50 }}
        className="common-table"
      />
    </>
  );
}

export default ListView;
