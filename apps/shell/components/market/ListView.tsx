import React from "react";
import { Table, Space, Button, Avatar } from "antd";
import Text from "antd/lib/typography/Text";
import { Color, Icon } from "@difx/core-ui";
import t from "@difx/locale";
// import Trend from "react-trend";
import { ASSETS_URL } from "@difx/constants";
import { useMarketPair } from "@difx/shared";
import { useRouter } from "next/router";



export function ListView({data}) {
  const router = useRouter();
  const {setMarketPair, drawerVisible, setDrawerVisible} = useMarketPair()
  const columns = [
    { title: "Coin", key: "symbol",
    render: (item: any) => {
      return (
      <Space><Icon.FavoriteIcon fill={item.favorite ? "#FFC107" : "#56595C"} variant="medium" /> <Avatar size={34} icon={<Icon.CoinPlaceholder width={34} height={34} />} src={`${ASSETS_URL}${item.currency1.toLowerCase()}.png`} /> <span>{item.currency1} <Text type="secondary">/ {item.currency2}</Text></span></Space>
      );
      }
    },
    { title: "Last Price", dataIndex: "last", key: "last" },
    {
      title: "24h Change",
      key: "open",
      render: (text: string, item: any) => {
        if (item.change >= 0)
        return (
            <span style={{ color: Color.green?.success }}>
              {item.change.toFixed(2)}%
            </span>
          );
        else
          return (
            <span style={{ color: Color.red?.failure }}>
              {item.change.toFixed(2)}%
            </span>
          );
      },
    },
    { title: "24h Volume", dataIndex: "volume", key: "volume" },
    {
      title: "Chart",
      key: "pricing",
      dataIndex: "change"
      // render: (text: string, item: any) => {
      //   const changed = (item.last / item.open) * 100 - 100;
      //   return (
      //     <Trend
      //       smooth
      //       data={item.pricing}
      //       strokeWidth={3}
      //       autoDraw
      //       autoDrawDuration={3000}
      //       gradient={[
      //         changed >= 0
      //           ? "#ff0000"
      //           : "#08c",
      //       ]}
      //     />
      //   );
      // },
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
         <Button
          type="primary"
          >
          {t("header.trade")}
         </Button>
      </Space>
    )
  },
  ];
  
  const test = () => {
    console.log("asasassssssssssssssss")
  }
  // const dataSet = {data, test}
//   const dataSet = data
// for (let i = 0; i < 46; i++) {
//   dataSet.push({
//     key: i,
//   });
// }
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
