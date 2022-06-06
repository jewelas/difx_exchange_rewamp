import React from "react";
import { Button, Layout, Typography} from 'antd';
import WalletLayout from "../index.page";
import { Icon } from "@difx/core-ui";
import { t } from "i18next";
import { ProfileWrapper, ProfileHeader, ProfileHeaderContent } from "../styled";
import Text from "antd/lib/typography/Text";

export function SettingsPage() {
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
                        src="/imgs/setting-illus.svg"
                        alt=""
                    />
                </div>
                <ProfileHeaderContent>
                    <Typography.Title level={3}>{t("profile.setting")}</Typography.Title>
                </ProfileHeaderContent>
            </ProfileHeader>
            <ProfileWrapper style={{marginBottom:20}}>
                <Typography.Title level={3}>{t("profile.account")} {t("profile.setting")}</Typography.Title>
                <div className="verifyIdsWrapper">
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <img
                                src="/imgs/id-card-illus.svg"
                                alt=""
                            />
                            <div className="profileId">
                                <h4>{t("profile.edit_user_name")}</h4>
                                <div>
                                    <Text type="secondary">Set a customized username</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary">Setup</Button>
                    </div>
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <img
                                src="/imgs/id-card-illus.svg"
                                alt=""
                            />
                            <div className="profileId">
                                <h4>{t("profile.edit_avatar")}</h4>
                                <div>
                                    <Text type="secondary">Set a customized username</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary">Setup</Button>
                    </div>
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <img
                                src="/imgs/id-card-illus.svg"
                                alt=""
                            />
                            <div className="profileId">
                                <h4>{t("profile.change_passowrd")}</h4>
                                <div>
                                    <Text type="secondary">Set a customized username</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary">Setup</Button>
                    </div>
                </div>
                <Typography.Title level={3}>{t("profile.general")} {t("profile.setting")}</Typography.Title>
                <div className="verifyIdsWrapper">
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <img
                                src="/imgs/id-card-illus.svg"
                                alt=""
                            />
                            <div className="profileId">
                                <h4>{t("profile.language")}</h4>
                                <div>
                                    <Text type="secondary">Set a customized username</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary">Setup</Button>
                    </div>
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <img
                                src="/imgs/id-card-illus.svg"
                                alt=""
                            />
                            <div className="profileId">
                                <h4>{t("profile.currency")}</h4>
                                <div>
                                    <Text type="secondary">Set a customized username</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary">Setup</Button>
                    </div>
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <img
                                src="/imgs/id-card-illus.svg"
                                alt=""
                            />
                            <div className="profileId">
                                <h4>{t("profile.candle_colors")}</h4>
                                <div>
                                    <Text type="secondary">Set a customized username</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary">Setup</Button>
                    </div>
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <img
                                src="/imgs/id-card-illus.svg"
                                alt=""
                            />
                            <div className="profileId">
                                <h4>{t("profile.candle_preference")}</h4>
                                <div>
                                    <Text type="secondary">Set a customized username</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary">Setup</Button>
                    </div>
                </div>
                <ProfileHeaderContent>
                    <div className="verifyIdsWrapper">
                        <Typography.Title level={3}>{t("header.notification")} {t("profile.setting")}</Typography.Title>
                        <div className="verifyIdCard noborder">
                            <div className="verifyid">
                                <img
                                    src="/imgs/id-card-illus.svg"
                                    alt=""
                                />
                                <div className="profileId">
                                    <h4>{t("profile.language")}</h4>
                                    <div>
                                        <Text type="secondary">Set a customized username</Text>
                                    </div>
                                </div>
                            </div>
                            <Button type="primary">Setup</Button>
                        </div>
                        <div className="profileVerify">
                            <ul>
                                <li><Icon.CheckCircleIcon />{t("profile.activities")}</li>
                                <li><Icon.CheckCircleIcon />{t("profile.price_alerts")}</li>
                                <li><Icon.CheckCircleIcon />{t("profile.difx_exclusives_news")}</li>
                                <li><Icon.CheckCircleIcon />{t("profile.system_messages")}</li>
                            </ul>
                        </div>
                    </div>
                </ProfileHeaderContent>
            </ProfileWrapper>
        </Layout>
    </WalletLayout>
  );
}

export default SettingsPage;
