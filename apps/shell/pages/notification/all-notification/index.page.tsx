import React from "react";
import { Layout } from "antd";
import NotificationLayout from "../index.page";
import Notification from "../../../components/notification/all-notification/Notifications";

const { Content } = Layout;

export function AllNotification() {
  return (
    <NotificationLayout>
      <Layout style={{ padding: "24px" }}>
        <Content>
          <Notification />
        </Content>
      </Layout>
    </NotificationLayout>
  );
}

export default AllNotification;
