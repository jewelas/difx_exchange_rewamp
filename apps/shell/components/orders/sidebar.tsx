import React from "react";
import { Menu } from "antd";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { SidebarWrapper } from "./styled";
import Link from "next/link";
import SubMenu from "antd/lib/menu/SubMenu";

export function OrderSidebar() {
  return (
    <SidebarWrapper width={260} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["2"]}
        style={{ paddingTop: 30 }}
      >
        <SubMenu key="spot" title={t("order.spot_orders")} icon={<Icon.SpotIcon />}>
            <Menu.Item>
                <Link href="/orders/open-orders">
                    {t("order.open_orders")}
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/orders/order-history">
                    {t("order.order_history")}
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/orders/trade-history">
                    {t("order.trade_history")}
                </Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu key="future" title={t("order.future_orders")} icon={<Icon.SpotIcon />}>
            <Menu.Item>
                <Link href="/orders/open-orders">
                    {t("order.open_orders")}
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/orders/order-history">
                    {t("order.order_history")}
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/orders/trade-history">
                    {t("order.trade_history")}
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/orders/positions">
                    {t("order.positions")}
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/orders/transactions">
                    {t("order.transactions")}
                </Link>
            </Menu.Item>
        </SubMenu>
      </Menu>
    </SidebarWrapper>
  );
}

export default OrderSidebar;
