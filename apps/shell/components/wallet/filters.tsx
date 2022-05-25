import React from "react";
import { Button, Checkbox, Col, Divider, Input, Row, Space, Switch } from "antd";
import { Icon, Typography } from "@difx/core-ui";
import t from "@difx/locale";
import { TopBalanceWrapper } from "./styled";
import { SearchOutlined } from '@ant-design/icons';

export function WalletFilters({overviewContent}) {
  return (
    <div className="toggle-card-wrapper">
        <Row align="middle" justify="space-between">
        <Col>
            <div className="toggle-card">
            {overviewContent === "overview" ? 
            <Space split={<Divider type="vertical" />}>
                <div>
                    <Switch />
                    <Typography level="B1">{t("wallet.use_difx_token")}</Typography>
                </div>
                <div>
                    <Switch />
                    <Typography level="B1"> {t("wallet.use_difx_point")}</Typography>
                </div>
            </Space>
            : 
            null
            }
            
            <Space split={<Divider type="vertical" />}>
            {overviewContent !== "overview" ? 
                <div className="input-group search-input">
                  <Input placeholder={t("common.search")} prefix={<SearchOutlined />} />
                </div>
                : null }
                {overviewContent === "spot" ? 
                <Checkbox>
                    <Typography level="text">
                        {t("common.hide_small_balances")}
                    </Typography>
                </Checkbox>
                : null }
            </Space>
            </div>
        </Col>
        <Col>
            <Space split={<Divider type="vertical" />}>
                {overviewContent == "spot" || overviewContent == "overview" ?
                    <Button type="text" icon={<Icon.PieChartIcon />} shape="round" size="small" className="round-light-primary-btn">Assets Allocation</Button>
                : null }
                {overviewContent === "spot" ? 
                    <Button type="link" className="anchor-link">Convert small balance to DIFX</Button>
                : null }
            </Space>
        </Col>
        </Row>
    </div>
  );
}

export default WalletFilters;
