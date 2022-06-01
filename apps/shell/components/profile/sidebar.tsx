import React from "react";
import { Menu } from "antd";
import { Icon } from "@difx/core-ui";
import t from "@difx/locale";
import { SidebarWrapper } from "./styled";
import Link from "next/link";
import { useRouter } from "next/router";

export function ProfileSidebar() {
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
            key="/profile/user-profile"
          >
            <Link href="/profile/user-profile">{t("profile.user_profile")}</Link>
          </Menu.Item>
        <Menu.Item 
          icon={<Icon.SpotIcon />}
          key="/profile/fees"
        >
          <Link href="/profile/fees">
            {t("profile.fee_settings")}
          </Link>
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.FutureIcon />}
          key="/profile/idetity"
        >
          <Link href="/profile/idetity">
            {t("profile.idetity_verification")}
          </Link>
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.GiftIcon />}
          key="/profile/security"
        >
          <Link href="/profile/security">
            {t("profile.security_setting")}
          </Link>
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.SwitchIcon />}
          key="/profile/notification"
        >
          <Link href="/profile/notification">
            {t("profile.notification")}
          </Link>
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.SpotIcon />}
          key="/profile/general-setting"
        >
          <Link href="/profile/general-setting">
            {t("profile.general_setting")}
          </Link>
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.SpotIcon />}
          key="/profile/sub-account"
        >
          <Link href="/profile/sub-account">
            {t("profile.sub_account")}
          </Link>
        </Menu.Item>
        <Menu.Item 
          icon={<Icon.SpotIcon />}
          key="/profile/api-keys"
        >
          <Link href="/profile/api-keys">
            {t("profile.api_keys")}
          </Link>
        </Menu.Item>
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

export default ProfileSidebar;
