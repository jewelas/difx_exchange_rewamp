import t from "@difx/locale";
import 'antd/dist/antd.variable.min.css';
import Image from 'next/image';

export function ErrorFallback({ error }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', position: 'absolute', width: '100%' }}>
      <div style={{ textAlign: "center" }}>
        <Image
          src="/imgs/logo.svg"
          alt="Difx Logo"
          width={30}
          height={30}
        />
      </div>
      <div style={{ fontSize: '17px', textAlign: 'center' }}>{t("common.msg_wrong")}</div>
    </div>
  )
}

export default ErrorFallback;
