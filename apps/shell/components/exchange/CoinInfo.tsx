import { useHttpGet } from "@difx/shared";
import { Avatar, Row, Col, Space, Typography } from "antd";
import { useEffect } from "react";
import { CoinInfoStyled } from "./styled";
import { API_ENDPOINT, QUERY_KEY, ASSETS_URL } from "@difx/shared"
import { Loading } from "@difx/core-ui";
import Text from "antd/lib/typography/Text";
import { getCurrentDateTimeByDateString } from '@difx/utils';

const { Title } = Typography

export interface CoinInfoInterface{
  coin: string
}

export default function CoinInfo({coin}: CoinInfoInterface) {

  const { data: coinInfo, isLoading} = useHttpGet<null, any>(QUERY_KEY.COIN_INFO(coin.split("USDT")[0]), API_ENDPOINT.GET_COIN_DETAILS(coin.split("USDT")[0]), null);

  useEffect(()=>{
    console.log(coinInfo)
  },[coinInfo])

  if(isLoading){
    return <Loading />
  }
  
  return(
    <CoinInfoStyled>
      <Space direction="vertical" size={20}>

        <Row>
          <Space align="center">
            <Avatar src={`${ASSETS_URL}${coinInfo.coin.toLowerCase()}.png`}/>
            <Title style={{margin:"0px"}} level={4}>{coinInfo.coin}</Title>
          </Space>
        </Row>

        <Row>
          <Title level={5}>About</Title>
          <Typography>
            {coinInfo.about}
          </Typography>
        </Row>

        <Row>
          <Col span={24}>
            <Title level={5}>Overview</Title>
            <Row gutter={[24,24]}>
              <Col span={12}>
                <Row justify="space-between">
                  <Text type="secondary">Name:</Text>
                  <Text>{coinInfo.name}</Text>
                </Row>
                <Row justify="space-between">
                  <Text type="secondary">Symbol:</Text>
                  <Text>{coinInfo.coin}</Text>
                </Row>
                <Row justify="space-between">
                  <Text type="secondary">Issued Date:</Text>
                  <Text>{getCurrentDateTimeByDateString(coinInfo.launch_date)}</Text>
                </Row>
              </Col>

              <Col span={12}>
                <Row justify="space-between">
                  <Text type="secondary">Market Cap:</Text>
                  <Text>${coinInfo.market_cap}</Text>
                </Row>
                <Row justify="space-between">
                  <Text type="secondary">Total Supply:</Text>
                  <Text>{coinInfo.total_supply}{coinInfo.coin}</Text>
                </Row>
                <Row justify="space-between">
                  <Text type="secondary">Circulation Supply:</Text>
                  <Text>{coinInfo.circulation_supply}{coinInfo.coin}</Text>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>


      </Space>
    </CoinInfoStyled>
  )
}