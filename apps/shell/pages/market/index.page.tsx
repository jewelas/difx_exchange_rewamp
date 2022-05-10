import { SearchInput } from "@difx/core-ui";
import { Button, Col, Drawer, Modal, Row } from "antd";
import React, { useState } from "react";
import AppLayout from "../index.page";
import { PageStyled, MarketContentStyled, MarketCard } from "./styled";
import t from "@difx/locale";
import TopMarket from "./TopMarket";
import Stats from "./stats";
// import MarketDrawer from "./drawer";
import { useAtom } from "jotai";
import { marketPairAtom } from "@difx/shared";
// import MarketModal from "./modal";

export function Market() {
  const [marketPair] = useAtom(marketPairAtom)
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
                    <SearchInput />
                </Col>
            </Row>
            <MarketCard>
                <TopMarket />
            </MarketCard>
            <Stats />
        </MarketContentStyled>
        <Button onClick={showDrawer}>
        Info
      </Button>
      <Button type="primary" onClick={showModal}>
        Trade
      </Button>
        {/* <Drawer
          title="Overview"
          placement="left"
          onClose={onClose}
          visible={visible}
        >
          <MarketDrawer pair={marketPair}/>
        </Drawer>
        <Modal title="&nbsp;" visible={isModalVisible} footer={null}>
            <MarketModal />
        </Modal> */}
      </PageStyled>
    </AppLayout>
  );
}

export default Market;
