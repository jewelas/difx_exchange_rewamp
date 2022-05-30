import React from "react";
import { Layout } from 'antd';
import WalletLayout from "../index.page";
import WalletStepper from "../../../components/wallet/stepper";
import DepositForm from "../../../components/wallet/deposit/DepositForm";

export function DepositPage() {

  return (
    <WalletLayout>
        <Layout style={{ padding: '24px' }}>
            <WalletStepper />
            <DepositForm />
        </Layout>
    </WalletLayout>
  );
}

export default DepositPage;
