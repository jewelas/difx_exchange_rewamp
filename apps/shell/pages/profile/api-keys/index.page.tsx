import React from "react";
import { Button, Layout, Typography} from 'antd';
import WalletLayout from "../index.page";
import { Icon } from "@difx/core-ui";
import { t } from "i18next";
import { WhiteBG, ProfileWrapper, ProfileHeader, ProfileHeaderContent } from "../styled";
import Text from "antd/lib/typography/Text";
import APIKeysTable from "../../../components/profile/api-keys/apiKeys";

export function ApiKeysPage() {
  return (
    <WalletLayout>
        <Layout style={{ padding: '24px' }}>
            <ProfileHeader>
                <div className="profileHeaderLeftImg">
                    <img
                        src="/imgs/profile-header.svg"
                        alt=""
                    />
                </div>
                <div className="profileHeaderRightImg">
                    <img
                        src="/imgs/api-illus.svg"
                        alt=""
                    />
                </div>
                <ProfileHeaderContent>
                    <Typography.Title level={3}>{t("profile.api_keys")}</Typography.Title>
                </ProfileHeaderContent>
            </ProfileHeader>
            <ProfileWrapper>
                <div className="apiKeysContent">
                    <ul>
                        <Text><li>Each account can create up to 5 API Keys.</li></Text>
                        <Text><li>Be aware that your API Key may be disclosed by authorizing it to a third-party platform.</li></Text>
                        <Text><li>You will not be able to create an API if KYC is not completed.</li></Text>
                    </ul>
                    <Button type="primary">Create API</Button>
                </div>
            </ProfileWrapper>
            <WhiteBG>
                <APIKeysTable />
            </WhiteBG>
        </Layout>
    </WalletLayout>
  );
}

export default ApiKeysPage;
