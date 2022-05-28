import { useAtom } from "jotai";
import { withrawalDetailsModalAtom } from "..";

export function useTransactionDetailsModal() {
    const [modalVisible, setModalVisible] = useAtom(withrawalDetailsModalAtom);

    return { modalVisible, setModalVisible }
}