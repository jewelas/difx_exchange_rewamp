import { useAtom } from "jotai";
import { withdrawModalTabsAtom } from "..";

export function useWithdrawTabs() {
    const [tab, setTabsVisible] = useAtom(withdrawModalTabsAtom);

    return { tab, setTabsVisible }
}