import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { pageTitleAtom } from "../atom/index";
import t from "./../../locale";

export function useTitle() {
    const router = useRouter();
    const { pathname } = router;
    const [value, setValue] = useAtom(pageTitleAtom);

    useEffect(() => {
        // Set default title
        if (pathname !== '/exchange/[pair]') {
            setValue(t("common.title"));
            return;
        }
    }, [router]);

    const setTitle = (title: string) => { setValue(title) };
    return { title: value, setTitle };
}