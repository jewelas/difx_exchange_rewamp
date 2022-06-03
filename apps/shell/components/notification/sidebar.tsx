import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { SidebarWrapper } from "./styled";

export function NotificationSidebar() {
  const router = useRouter();
  return (
    <SidebarWrapper width={260} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["2"]}
        style={{ paddingTop: 30 }}
        selectedKeys={[router?.pathname]}
      >
        <Menu.Item
          icon={<Icon.OverviewIcon />}
          key="/notification/all-notification"
        >
          <Link href="/notification/all-notification">
            {t("notification.all")}
          </Link>
        </Menu.Item>
        <Menu.Item icon={<Icon.OverviewIcon />} key="/notification/activities">
          <Link href="/notification/activities">
            {t("notification.activities")}
          </Link>
        </Menu.Item>
        <Menu.Item icon={<Icon.SpotIcon />} key="/notification/pricr-alerts">
          <Link href="/notification/pricr-alerts">
            {t("notification.pricr_alerts")}
          </Link>
        </Menu.Item>
        <Menu.Item
          icon={<Icon.FutureIcon />}
          key="/notification/exclusive-news"
        >
          <Link href="/notification/exclusive-news">
            {t("notification.difx_exclusive_news")}
          </Link>
        </Menu.Item>
        <Menu.Item icon={<Icon.GiftIcon />} key="/notification/system-message">
          <Link href="/notification/system-message">
            {t("notification.system_message")}
          </Link>
        </Menu.Item>
        <Menu.Item
          key="help_support"
          icon={<Icon.SupportIcon />}
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 1,
            transition: "all 0.2s",
          }}
        >
          {t("notification.help_support")}
        </Menu.Item>
      </Menu>
    </SidebarWrapper>
  );
}

export default NotificationSidebar;
