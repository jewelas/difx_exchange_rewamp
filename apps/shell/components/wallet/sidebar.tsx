import React from "react";
import { Menu } from "antd";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { SidebarWrapper } from "./styled";
import Link from "next/link";
import { useRouter } from "next/router";

export function WalletSidebar() {
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
            key="/wallet/overview"
          >
            <Link href="/wallet/overview">{t("wallet.overview")}</Link>
          </Menu.Item>
        <Menu.Item 
          icon={<Icon.SpotIcon />}
          key="/wallet/spot"
        >
          <Link href="/wallet/spot">
            {t("wallet.spot")}
          </Link>
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.FutureIcon />}
          key="/wallet/futures"
        >
          <Link href="/wallet/futures">
            {t("wallet.futures")}
          </Link>
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.GiftIcon />}
          key="/wallet/earn"
        >
          <Link href="/wallet/earn">
            {t("wallet.earn")}
          </Link>
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.SwitchIcon />}
          key="/wallet/transaction-history"
        >
          <Link href="/wallet/transaction-history">
            {t("wallet.transaction_history")}
          </Link>
        </Menu.Item>
        <Menu.ItemGroup>
          <Menu.Item key="deposit" icon={<Icon.WalletDepositIcon />}>
              <Link href="/wallet/deposit">
                {t("wallet.deposit")}
              </Link>
          </Menu.Item>
          <Menu.Item key="withdraw" icon={<Icon.WalletWithdrawIcon />}>
            <Link href="/wallet/withdraw">
              {t("wallet.withdraw")}
            </Link>
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
