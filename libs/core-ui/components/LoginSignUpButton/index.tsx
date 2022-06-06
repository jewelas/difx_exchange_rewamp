/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAtom } from "jotai";
import { Button } from "antd";
import t from "./../../../locale";
import { useRouter } from "next/router";

export function LoginSignUpButton({ className }: { className?: string }) {
  const router = useRouter();
  const { asPath } = router;

  const onRouting = (path:string)=>{
    localStorage.setItem("previousPath", asPath);
    router.push(path);
  }

  return (
    <Button htmlType="button" type='primary' className={className}>
      <div onClick={(e: any) => { !e.target.className.includes("signup") && onRouting('/login') }} style={{ display: "flex", justifyContent: "center" }}>
        <div onClick={() => { onRouting('/login') }} style={{ marginRight: 5 }}>{`${t("common.log_in")} ${t("common.or")}`}</div>
        <div className="signup" onClick={() => { onRouting('/register') }}>{t("common.sign_up")}</div>
      </div>
    </Button>
  )
}

export default LoginSignUpButton;
