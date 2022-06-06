import { useAtom } from "jotai";
import { twoFactorModalAtom } from "..";

export function useTwoFactorModal() {
    const [twoFactorModal, setTwoFactorModal] = useAtom(twoFactorModalAtom);

    return { twoFactorModal, setTwoFactorModal }
}