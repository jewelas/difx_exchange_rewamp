/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAtom } from "jotai";
import { Button } from "antd";
import t from "./../../../locale";
import { useRouter } from "next/router";
import { previousPathAtom } from "./../../../shared/atom";

export function LoginSignUpButton({ className }: { className?: string }) {
  const [, setPrevousPath] = useAtom(previousPathAtom);
  const router = useRouter();
  const { asPath } = router;

  return (
    <Button htmlType="button" type='primary' className={className}>
      <div onClick={(e: any) => { setPrevousPath(asPath); !e.target.className.includes("signup") && router.push('/login') }} style={{ display: "flex", justifyContent: "center" }}>
        <div onClick={() => { setPrevousPath(asPath); router.push('/login') }} style={{ marginRight: 5 }}>{`${t("common.log_in")} ${t("common.or")}`}</div>
        <div className="signup" onClick={() => { setPrevousPath(asPath); router.push('/register') }}>{t("common.sign_up")}</div>
      </div>
    </Button>
  )
}

export default LoginSignUpButton;
