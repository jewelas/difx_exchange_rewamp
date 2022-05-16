import { DEFAULT_PAIR, STORE_KEY } from "@difx/constants";
import { useLocalStorage } from "@difx/shared";
import { useRouter } from "next/router";
import { useEffect } from "react";
export function ExchangeDefault() {
  const router = useRouter();

  const { value: lastPair } = useLocalStorage(STORE_KEY.LAST_PAIR, null);
  useEffect(() => {
    router.push(`/exchange/${lastPair ? lastPair : DEFAULT_PAIR}`);
  });
  return null;
}

export default ExchangeDefault;
