import React from "react";
import { Table, Space, Tag, Button, Avatar } from "antd";
import Text from "antd/lib/typography/Text";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { TableLastPrice } from "./styled";


const favoritesColumns = [
    {
      title: 'Coin',
      dataIndex: 'coin',
      key: 'coin',
      render: () => (
        <Space><Icon.FavoriteIcon fill="#FFC107" variant="medium" /> <Avatar size={34} icon={<Icon.CoinPlaceholder width={34} height={34} />} src="https://joeschmoe.io/api/v1/random"/> <span>BTC <Text type="secondary">/ USDT</Text></span></Space>
      )
      
    },
    {
      title: 'Last Price',
      dataIndex: 'lastPrice',
      key: 'lastPrice',
      render: () => (
        <TableLastPrice>3.4500 <Text type="secondary">≈$3.45</Text></TableLastPrice>
      )
    },
    {
      title: '24h Change',
      dataIndex: 'chnage24h',
      key: 'chnage24h',
      render: () => (
        <Tag color="red" className="roundtag">
            1.01%
        </Tag>
      )
    },
    {
        title: '24h Volume',
        dataIndex: 'volume24h',
        key: 'volume24h',
        render: () => (
            <Space>
              <Text>3,094.12</Text>
              <Text type="secondary">BTC</Text>
            </Space>
          )
    },
    {
        title: 'Chart',
        dataIndex: 'chart',
        key: 'chart',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: () => (
            <Space size="middle">
              <Button
                >
                {t("common.info")}
               </Button>
               <Button
                type="primary"
                >
                {t("header.trade")}
               </Button>
            </Space>
          )
    },
  ];
  
const favoriteDataPairs = [
    {
      key: '1',
      coin: 'John Brown',
      lastPrice: 32,
      chnage24h: -1.21,
      volume24h: 354.21,
      chart: "aasas",
      action: ["asas", "ewrty"]
    },
  ];

export function ListView() {
  return (
    <Table
        scroll={{ x: "max-content", y: 270 }}
        columns={favoritesColumns}
        dataSource={favoriteDataPairs}
        pagination={{ position: ['bottomCenter'] }}
        className="common-table"
        />
  );
}

export default ListView;
