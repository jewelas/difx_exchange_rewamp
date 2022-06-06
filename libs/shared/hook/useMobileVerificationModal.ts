import { useAtom } from "jotai";
import { mobileVerificationModalAtom } from "..";

export function useMobileVerificationModal() {
    const [mobileVerificationModal, setMobileVerificationModal] = useAtom(mobileVerificationModalAtom);

    return { mobileVerificationModal, setMobileVerificationModal }
}