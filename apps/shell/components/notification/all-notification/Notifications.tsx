import React from "react";
import t from "@difx/locale";
import { Button, Typography, Checkbox, List, Space } from "antd";
import { Icon } from "@difx/core-ui";
import { NotificationWrapper, PageStyled } from "../styled";

const { Text } = Typography;

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: "https://ant.design",
  title: `New device has been authorized ${i}`,
  avatar: "https://joeschmoe.io/api/v1/random",
  description:
    "You have successfully authorized a new device or in a new location to sign into your DIFX account.",
  date: "2022-03-22 /11:29",
}));

export function Notification() {
  return (
    <PageStyled>
      <NotificationWrapper>
        <Typography.Title level={3}>{t("notification.all")}</Typography.Title>
        <Space>
          <Checkbox>{t("notification.hide_small_balances")}</Checkbox>
          <Button type="ghost">{t("notification.btn_mark_as_read")}</Button>
          <Button type="ghost">{t("notification.btn_settings")}</Button>
        </Space>
      </NotificationWrapper>
      <div className="toggle-card-wrapper notification-wrapper">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 8,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.title} className="notification-content">
              <List.Item.Meta
                avatar={
                  <div className="notification-icon">
                    <Icon.MessageIcon />
                    <span className="notification-dote"></span>
                  </div>
                }
                title={<Text className="notification-title">{item.title}</Text>}
                description={<Text>{item.description}</Text>}
              />
              <Text>{item.date}</Text>
            </List.Item>
          )}
        />
      </div>
    </PageStyled>
  );
}

export default Notification;
