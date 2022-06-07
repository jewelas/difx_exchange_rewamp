import React, { useState } from "react";
import { Button, Layout, Typography} from 'antd';
import WalletLayout from "../index.page";
import { Icon } from "@difx/core-ui";
import { t } from "i18next";
import { ProfileWrapper, ProfileHeader, ProfileHeaderContent } from "../styled";
import Text from "antd/lib/typography/Text";
import EditUsernameModal from "../../../components/profile/settings/editUsername";
import SelectAvatarModal from "../../../components/profile/settings/selectAvatar";
import Image from "next/image";
import SelectLanguageModal from "../../../components/profile/settings/languageModal";
import SelectCurrencyModal from "../../../components/profile/settings/currencyModal";
import NotificationTopicModal from "../../../components/profile/settings/notificationTopic";
import ResetPasswordModal from "../../../components/profile/settings/resetPasswordModal";

export function SettingsPage() {
    const [editUsernameModal, setEditUsernameModal] = useState(false)
    const [selectAvatarModal, setSelectAvatarModal] = useState(false)
    const [languageModal, setLanguageModal] = useState(false)
    const [currencyModal, setCurrencyModal] = useState(false)
    const [notificationTopicModal, setNotificationTopicModal] = useState(false)
    const [resetPasswordModal, setResetPasswordModal] = useState(false)
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
                            <Image
                                src="/imgs/id-card-illus.svg"
                                alt=""
                                width="100%"
                                height="100%"
                            />
                            <div className="profileId">
                                <Typography.Title level={4}>{t("profile.edit_username")}</Typography.Title>
                                <Text type="secondary">Set a customized username</Text>
                            </div>
                        </div>
                        <Button type="primary" onClick={() => {setEditUsernameModal(!editUsernameModal)}}>{t("common.setup")}</Button>
                    </div>
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <Image
                                src="/imgs/id-card-illus.svg"
                                alt=""
                                width="100%"
                                height="100%"
                            />
                            <div className="profileId">
                                <Typography.Title level={4}>{t("profile.edit_avatar")}</Typography.Title>
                                <div>
                                    <Text type="secondary">Set a customized username</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary" onClick={() => {setSelectAvatarModal(!selectAvatarModal)}}>{t("common.setup")}</Button>
                    </div>
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <Image
                                src="/imgs/id-card-illus.svg"
                                alt=""
                                width="100%"
                                height="100%"
                            />
                            <div className="profileId">
                                <Typography.Title level={4}>{t("profile.change_password")}</Typography.Title>
                                <div>
                                    <Text type="secondary">Set a customized username</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary" onClick={() => {setResetPasswordModal(!resetPasswordModal)}}>Setup</Button>
                    </div>
                </div>
                <Typography.Title level={3}>{t("profile.general")} {t("profile.setting")}</Typography.Title>
                <div className="verifyIdsWrapper">
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <Image
                                src="/imgs/id-card-illus.svg"
                                alt=""
                                width="100%"
                                height="100%"
                            />
                            <div className="profileId">
                                <Typography.Title level={4}>{t("profile.language")}</Typography.Title>
                                <div>
                                    <Text type="secondary">Set a customized username</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary" onClick={() => {setLanguageModal(!languageModal)}}>{t("common.setup")}</Button>
                    </div>
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <Image
                                src="/imgs/id-card-illus.svg"
                                alt=""
                                width="100%"
                                height="100%"
                            />
                            <div className="profileId">
                                <Typography.Title level={4}>{t("profile.currency")}</Typography.Title>
                                <div>
                                    <Text type="secondary">Set a customized username</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary" onClick={() => {setCurrencyModal(!currencyModal)}}>{t("common.setup")}</Button>
                    </div>
                    {/* <div className="verifyIdCard">
                        <div className="verifyid">
                            <Image
                                src="/imgs/id-card-illus.svg"
                                alt=""
                                width="100%"
                                height="100%"
                            />
                            <div className="profileId">
                                <Typography.Title level={4}>{t("profile.candle_colors")}</Typography.Title>
                                <div>
                                    <Text type="secondary">Set a customized username</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary">Setup</Button>
                    </div> */}
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <Image
                                src="/imgs/id-card-illus.svg"
                                alt=""
                                width="100%"
                                height="100%"
                            />
                            <div className="profileId">
                                <Typography.Title level={4}>{t("profile.candle_preference")}</Typography.Title>
                                <div>
                                    <Text type="secondary">Set a customized username</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary">{t("common.setup")}</Button>
                    </div>
                </div>
                <ProfileHeaderContent>
                    <div className="verifyIdsWrapper">
                        <Typography.Title level={3}>{t("header.notification")} {t("profile.setting")}</Typography.Title>
                        <div className="verifyIdCard noborder">
                            <div className="verifyid">
                                <Image
                                    src="/imgs/id-card-illus.svg"
                                    alt=""
                                    width="100%"
                                height="100%"
                                />
                                <div className="profileId">
                                    <Typography.Title level={4}>{t("profile.topics")}</Typography.Title>
                                </div>
                            </div>
                            <Button type="primary" onClick={() => {setNotificationTopicModal(!notificationTopicModal)}}>{t("common.setup")}</Button>
                        </div>
                        <div className="profileVerify">
                            <ul>
                                <li><Icon.CheckCircleIcon /><Text>{t("profile.activities")}</Text></li>
                                <li><Icon.CheckCircleIcon /><Text>{t("profile.price_alerts")}</Text></li>
                                <li><Icon.CheckCircleIcon /><Text>{t("profile.difx_exclusives_news")}</Text></li>
                                <li><Icon.CheckCircleIcon /><Text>{t("profile.system_messages")}</Text></li>
                            </ul>
                        </div>
                    </div>
                </ProfileHeaderContent>
            </ProfileWrapper>
            <EditUsernameModal editUsernameModal={editUsernameModal} setEditUsernameModal={setEditUsernameModal } />
            <SelectAvatarModal setSelectAvatarModal={setSelectAvatarModal} selectAvatarModal={selectAvatarModal} />
            <SelectLanguageModal languageModal={languageModal} setLanguageModal={setLanguageModal} />
            <SelectCurrencyModal currencyModal={currencyModal} setCurrencyModal={setCurrencyModal} />
            <NotificationTopicModal setNotificationTopicModal={setNotificationTopicModal} notificationTopicModal={notificationTopicModal} />
            <ResetPasswordModal resetPasswordModal={resetPasswordModal} setResetPasswordModal={setResetPasswordModal} />
        </Layout>
    </WalletLayout>
  );
}

export default SettingsPage;
