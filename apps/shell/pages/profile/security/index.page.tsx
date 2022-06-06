import React, { useState } from "react";
import { Button, Layout, Typography} from 'antd';
import WalletLayout from "../index.page";
import { Icon } from "@difx/core-ui";
import { t } from "i18next";
import { WhiteBG, ProfileWrapper, ProfileHeader, ProfileHeaderContent } from "../styled";
import Text from "antd/lib/typography/Text";
import LoginHistoryTable from "../../../components/profile/security/loginHistory";
import DeviceHistoryTable from "../../../components/profile/security/deviceHistory";
import EmailVerificationModal from "../../../components/profile/security/emailVerificationModal";
import MobileVerificationModal from "../../../components/profile/security/mobileVerificationModal";
import VerificationCodeModal from "../../../components/profile/security/verificationCodeModal";
import TwoFactorModal from "../../../components/profile/security/twoFactorModal";
import Image from "next/image";

export function SecurityPage() {
    const [ emailVerificationModal, setEmailVerificationModal ] = useState(false)
    const [ mobileVerificationModal, setMobileVerificationModal ] = useState(false)
    const [ verificationCodeModal, setVerificationCodeModal ] = useState(false)
    const [ twoFactorModal, setTwoFactorModal ] = useState(false)
  return (
    <WalletLayout>
        <Layout style={{ padding: '24px' }}>
            <ProfileHeader>
                <div className="profileHeaderLeftImg">
                    <Image
                        src="/imgs/profile-header.svg"
                        alt=""
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className="profileHeaderRightImg">
                    <Image
                        src="/imgs/security-illus.svg"
                        alt=""
                        width="100%"
                        height="100%"
                    />
                </div>
                <div className="profileHeaderContent">
                    <Typography.Title level={3}>{t("profile.security_setting")}</Typography.Title>
                    <ProfileHeaderContent>
                        <div className="profileVerify">
                            <ul>
                                <li><Icon.CheckCircleIcon /><Text>{t("profile.email_verification")}</Text></li>
                                <li><Icon.CheckCircleIcon /><Text>{t("profile.mobile_verification")}</Text></li>
                                <li><Icon.CheckCircleIcon /><Text>{t("profile.two_fa")}</Text></li>
                            </ul>
                        </div>
                    </ProfileHeaderContent>
                </div>
            </ProfileHeader>
            <ProfileWrapper style={{marginBottom:20}}>
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
                                <Typography.Title level={4}>{t("profile.email_verification")}</Typography.Title>
                                <div>
                                    <Icon.CheckCircleIcon /> <Text>nitin@gmail.com</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary" onClick={() => {setEmailVerificationModal(!emailVerificationModal)}}>Change</Button>
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
                                <Typography.Title level={4}>{t("profile.mobile_verification")}</Typography.Title>
                                <div>
                                    <Icon.CheckCircleIcon /> <Text>nitin@gmail.com</Text>
                                </div>
                            </div>
                        </div>
                        <Button type="primary" onClick={() => {setMobileVerificationModal(!mobileVerificationModal)}}>Change</Button>
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
                                <Typography.Title level={4}>{t("profile.two_fa")}</Typography.Title>
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
            <EmailVerificationModal setEmailVerificationModal={setEmailVerificationModal} emailVerificationModal={emailVerificationModal} />
            <MobileVerificationModal setMobileVerificationModal={setMobileVerificationModal} mobileVerificationModal={mobileVerificationModal} />
            <VerificationCodeModal userEmail={"nitin@gmail.com"} verificationCodeModal={verificationCodeModal} setVerificationCodeModal={setVerificationCodeModal} />
            <TwoFactorModal twoFactorModal={twoFactorModal} setTwoFactorModal={setTwoFactorModal} />
        </Layout>
    </WalletLayout>
  );
}

export default SecurityPage;
