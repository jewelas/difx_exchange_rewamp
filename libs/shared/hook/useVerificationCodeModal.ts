import { useAtom } from "jotai";
import { verificationCodeModalAtom } from "..";

export function useVerificationCodeModal() {
    const [verificationCodeModal, setVerificationCodeModal] = useAtom(verificationCodeModalAtom);

    return { verificationCodeModal, setVerificationCodeModal }
}