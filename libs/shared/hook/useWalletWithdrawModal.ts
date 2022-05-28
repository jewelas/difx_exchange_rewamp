import { useAtom } from "jotai";
import { walletWithdrawModalAtom } from "..";

export function useWalletWithdrawModal() {
    const [modalVisible, setModalVisible] = useAtom(walletWithdrawModalAtom);

    return { modalVisible, setModalVisible }
}