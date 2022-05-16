import React from "react";
import { Table, Space, Button, Avatar } from "antd";
import Text from "antd/lib/typography/Text";
import { Color, Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { API_ENDPOINT, ASSETS_URL } from "@difx/constants";
import { useHttpPost, useMarketPair, useHttpDelete } from "@difx/shared";
import { useRouter } from "next/router";
import Link from "next/link";
import Trend from "react-trend";


export function ListView({data, categoriesList}) {
  const router = useRouter();
  const {setMarketPair, drawerVisible, setDrawerVisible} = useMarketPair()

  const onSuccess = (response) => {
    console.log(response)
  }

  const { mutate: addFavorite } = useHttpPost<null, any>({ onSuccess, endpoint: API_ENDPOINT.ADD_FAVORITES})
  const { mutate: removeFavorite } = useHttpDelete<null, any>({ onSuccess, endpoint: API_ENDPOINT.REMOVE_FAVORITES})

  const onfavorite = (item) => {
    const requestData = {
      symbol: item.symbol
    }
    if(item.favorite){
      console.log(requestData)
      removeFavorite(requestData)
    } else {
      addFavorite(requestData)
    }
    
  }
  const columns = [
    { title: "Coin", key: "symbol",
    render: (item: any) => {
      return (
      <Space>
        <div onClick={() => onfavorite(item)} className="cursor-pointer">
          <Icon.FavoriteIcon fill={item.favorite ? "#FFC107" : "#56595C"} variant="medium" />
        </div>
        <Avatar size={34} icon={<Icon.CoinPlaceholder width={34} height={34} />} src={`${ASSETS_URL}${item.currency1.toLowerCase()}.png`} /> <span>{item.currency1} <Text type="secondary">/ {item.currency2}</Text></span></Space>
      );
      }
    },
    { title: "Last Price", key: "last", 
    render: (item: any) => {
      return(
      <>
        <Space size={12} direction="vertical">
          <Text>{item.last}</Text>
          <Text type="secondary">≈ {item.last.toFixed(2)}</Text>
        </Space>
      </>
      )
    },
    },
    {
      title: "24h Change",
      key: "open",
      render: (item: any) => {
        return (
          <span className={item.change >= 0 ? "successTag" : "errorTag"}>
            {item.change.toFixed(2)}%
          </span>
        )
      }
    },
    { title: "24h Volume", dataIndex: "volume", key: "volume" },
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
    { title: "Action", key: "action", align: "right",
    render: (text: string, item: any) => (
      <Space size="middle">
        <Button onClick={() => {
          setMarketPair(item.currency1)
          setDrawerVisible(!drawerVisible)
        }}>
          {t("common.info")}
         </Button>
         <Link href="/exchange">
          <Button
            type="primary"
            >
            {t("header.trade")}
          </Button>
         </Link>
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
