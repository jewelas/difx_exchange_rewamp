import React from "react";
import { Menu } from "antd";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { SidebarWrapper } from "./styled";

export function WalletSidebar() {
  return (
    <SidebarWrapper width={260} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["2"]}
        style={{ paddingTop: 30 }}
      >
        <Menu.Item 
          icon={<Icon.OverviewIcon />}
        >
          {t("wallet.overview")}
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.SpotIcon />}
        >
          {t("wallet.spot")}
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.FutureIcon />}
          onClick={() => {"/"}}
          key="futures"
        >
          {t("wallet.futures")}
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.GiftIcon />}
          onClick={() => {"/"}}
          key="earn"
        >
          {t("wallet.earn")}
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.HistoryIcon />}
        >
          {t("wallet.transaction_history")}
        </Menu.Item>
        <Menu.ItemGroup>
          <Menu.Item key="deposit" icon={<Icon.HistoryIcon />}>
          {t("wallet.deposit")}
          </Menu.Item>
          <Menu.Item key="withdraw" icon={<Icon.HistoryIcon />}>
          {t("wallet.withdraw")}
          </Menu.Item>
        </Menu.ItemGroup>
          <Menu.Item key="help_support" icon={<Icon.SupportIcon />}
          style={{
            position: 'absolute',
            bottom: 0,
            zIndex: 1,
            transition: 'all 0.2s',
        }}
          >
          {t("wallet.help_support")}
          </Menu.Item>
      </Menu>
    </SidebarWrapper>
  );
}

export default WalletSidebar;
