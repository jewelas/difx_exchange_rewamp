import { TokenSwitchWrapper } from "./styled";
import { Divider, Space, Switch } from "antd";
import t from "../../../locale"
import { Typography } from "./../Typography";

export const TokenConvertSwitch = () => {
  return (
      <TokenSwitchWrapper>
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
      </TokenSwitchWrapper>
  );
};
