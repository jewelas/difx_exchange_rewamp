import { useAtom } from "jotai";
import { transferModalAtom } from "..";

export function useTransferModal() {
    const [transferModalVisible, setTransferModalVisible] = useAtom(transferModalAtom);

    return { transferModalVisible, setTransferModalVisible }
}