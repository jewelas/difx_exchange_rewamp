import { DEFAULT_PAIR, STORE_KEY } from "@difx/constants";
import { useLocalStorage } from "@difx/shared";
import { Loading } from "@difx/core-ui";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AppLayout from "../index.page";
export function ExchangeDefault() {
  const router = useRouter();

  const { value: lastPair } = useLocalStorage(STORE_KEY.LAST_PAIR, null);
  useEffect(() => {
    router.push(`/exchange/${lastPair ? lastPair : DEFAULT_PAIR}`);
  });
  return (
    <AppLayout>
      <div style={{ position:'absolute', width:'100%', height: '100%' }}>
        <Loading style={{ height: '100%' }} />
      </div>
    </AppLayout>
  )
}

export default ExchangeDefault;
