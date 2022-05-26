import { useAtom } from "jotai";
import { convertSmallBalModalAtom } from "..";

export function useConvertSmallBalModal() {
    const [modalVisible, setModalVisible] = useAtom(convertSmallBalModalAtom);

    return { modalVisible, setModalVisible }
}