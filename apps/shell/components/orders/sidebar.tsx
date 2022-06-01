import React from "react";
import { Menu } from "antd";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { SidebarWrapper } from "./styled";
import Link from "next/link";
import SubMenu from "antd/lib/menu/SubMenu";
import { useRouter } from "next/router";

export function OrderSidebar() {
  const router = useRouter();
  return (
    <SidebarWrapper width={260} className="site-layout-background">
      <Menu
        mode="inline"
        selectedKeys={[router?.pathname]}
        style={{ paddingTop: 30 }}
      >
        <SubMenu key="spot" title={t("order.spot_orders")} icon={<Icon.SpotIcon />}>
            <Menu.Item key="/orders/spot/open-orders">
                <Link href="/orders/spot/open-orders">
                    {t("order.open_orders")}
                </Link>
            </Menu.Item>
            <Menu.Item key="/orders/spot/order-history">
                <Link href="/orders/spot/order-history">
                    {t("order.order_history")}
                </Link>
            </Menu.Item>
            <Menu.Item key="/orders/spot/trade-history">
                <Link href="/orders/spot/trade-history">
                    {t("order.trade_history")}
                </Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu key="future" title={t("order.future_orders")} icon={<Icon.SpotIcon />}>
            <Menu.Item key="/orders/future/open-orders">
                <Link href="/orders/future/open-orders">
                    {t("order.open_orders")}
                </Link>
            </Menu.Item>
            <Menu.Item key="/orders/future/order-history">
                <Link href="/orders/future/order-history">
                    {t("order.order_history")}
                </Link>
            </Menu.Item>
            <Menu.Item key="/orders/future/trade-history">
                <Link href="/orders/future/trade-history">
                    {t("order.trade_history")}
                </Link>
            </Menu.Item>
            <Menu.Item key="/orders/future/position">
                <Link href="/orders/future/position">
                    {t("order.position")}
                </Link>
            </Menu.Item>
            {/* <Menu.Item key="/orders/future/transactions">
                <Link href="/orders/future/transactions">
                    {t("order.transactions")}
                </Link>
            </Menu.Item> */}
        </SubMenu>
      </Menu>
    </SidebarWrapper>
  );
}

export default OrderSidebar;
