import React from "react";
import { Button, Layout, Typography} from 'antd';
import WalletLayout from "../index.page";
import { Icon } from "@difx/core-ui";
import { t } from "i18next";
import { WhiteBG, ProfileWrapper, ProfileHeader, ProfileHeaderContent } from "../styled";
import Text from "antd/lib/typography/Text";
import LoginHistoryTable from "../../../components/profile/security/loginHistory";
import DeviceHistoryTable from "../../../components/profile/security/deviceHistory";
import { useEmailVerificationModal, useMobileVerificationModal, useTwoFactorModal, useVerificationCodeModal } from "@difx/shared";
import EmailVerificationModal from "../../../components/profile/security/emailVerificationModal";
import MobileVerificationModal from "../../../components/profile/security/mobileVerificationModal";
import VerificationCodeModal from "../../../components/profile/security/verificationCodeModal";
import TwoFactorModal from "../../../components/profile/security/twoFactorModal";

export function SecurityPage() {
    const { emailVerificationModal, setEmailVerificationModal } = useEmailVerificationModal()
    const { mobileVerificationModal, setMobileVerificationModal } = useMobileVerificationModal()
    // const { verificationCodeModal, setVerificationCodeModal } = useVerificationCodeModal()
    const { twoFactorModal, setTwoFactorModal } = useTwoFactorModal()
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
                        src="/imgs/security-illus.svg"
                        alt=""
                    />
                </div>
                <div className="profileHeaderContent">
                    <Typography.Title level={3}>{t("profile.security_setting")}</Typography.Title>
                    <ProfileHeaderContent>
                        <div className="profileVerify">
                            <ul>
                                <li><Icon.CheckCircleIcon />{t("profile.email_verification")}</li>
                                <li><Icon.CheckCircleIcon />{t("profile.mobile_verification")}</li>
                                <li><Icon.CheckCircleIcon />{t("profile.two_fa")}</li>
                            </ul>
                        </div>
                    </ProfileHeaderContent>
                </div>
            </ProfileHeader>
            <ProfileWrapper style={{marginBottom:20}}>
                <div className="verifyIdsWrapper">
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <img
                                src="/imgs/id-card-illus.svg"
                                alt=""
                            />
                            <div className="profileId">
                                <h4>Email verification</h4>
                                <div>
                                    <Icon.CheckCircleIcon /> <span>nitin@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <Button type="primary" onClick={() => {setEmailVerificationModal(!emailVerificationModal)}}>Change</Button>
                    </div>
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <img
                                src="/imgs/id-card-illus.svg"
                                alt=""
                            />
                            <div className="profileId">
                                <h4>Mobile verification</h4>
                                <div>
                                    <Icon.CheckCircleIcon /> <span>nitin@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <Button type="primary" onClick={() => {setMobileVerificationModal(!mobileVerificationModal)}}>Change</Button>
                    </div>
                    <div className="verifyIdCard">
                        <div className="verifyid">
                            <img
                                src="/imgs/id-card-illus.svg"
                                alt=""
                            />
                            <div className="profileId">
                                <h4>2FA</h4>
                                <div>
                                    <Text type="secondary">Set a customized username</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary" onClick={() => {setTwoFactorModal(!twoFactorModal)}}>Change</Button>
                    </div>
                </div>
            </ProfileWrapper>
            <ProfileWrapper>
                <Typography.Title level={3}>{t("profile.login_history")}</Typography.Title>
            </ProfileWrapper>
            <WhiteBG style={{paddingBottom: '50px',marginBottom:20}}>
                <LoginHistoryTable />
            </WhiteBG>
            <ProfileWrapper>
                <Typography.Title level={3}>{t("profile.device_history")}</Typography.Title>
            </ProfileWrapper>
            <WhiteBG style={{paddingBottom: '50px'}}>
                <DeviceHistoryTable />
            </WhiteBG>
            <EmailVerificationModal />
            <MobileVerificationModal />
            <VerificationCodeModal userEmail={"nitin@gmail.com"}/>
            <TwoFactorModal />
        </Layout>
    </WalletLayout>
  );
}

export default SecurityPage;
