import React from "react";
import { Menu } from "antd";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { SidebarWrapper } from "./styled";
import Link from "next/link";

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
            <Link href="/wallet">{t("wallet.overview")}</Link>
          </Menu.Item>
        <Menu.Item 
          icon={<Icon.SpotIcon />}
        >
          <Link href="/wallet/spot">
            {t("wallet.spot")}
          </Link>
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.FutureIcon />}
        >
          <Link href="/wallet/futures">
            {t("wallet.futures")}
          </Link>
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.GiftIcon />}
          key="earn"
        >
          <Link href="/wallet/earn">
            {t("wallet.earn")}
          </Link>
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.HistoryIcon />}
        >
          <Link href="/wallet/transaction-history">
            {t("wallet.transaction_history")}
          </Link>
        </Menu.Item>
        <Menu.ItemGroup>
          <Menu.Item key="deposit" icon={<Icon.HistoryIcon />}>
              <Link href="/wallet/deposit">
                {t("wallet.deposit")}
              </Link>
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
