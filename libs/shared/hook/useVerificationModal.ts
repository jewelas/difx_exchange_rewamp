import { useAtom } from "jotai";
import { walletVerificationModalAtom } from "..";

export function useVerificationModal() {
    const [modalVisible, setModalVisible] = useAtom(walletVerificationModalAtom);

    return { modalVisible, setModalVisible }
}