import { useAtom } from "jotai";
import { emailVerificationModalAtom } from "..";

export function useEmailVerificationModal() {
    const [emailVerificationModal, setEmailVerificationModal] = useAtom(emailVerificationModalAtom);

    return { emailVerificationModal, setEmailVerificationModal }
}