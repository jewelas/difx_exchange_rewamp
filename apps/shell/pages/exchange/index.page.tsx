import { API_ENDPOINT, DEFAULT_PAIR, QUERY_KEY, STORE_KEY } from "@difx/constants";
import { Loading } from "@difx/core-ui";
import { useHttpGet, useLocalStorage } from "@difx/shared";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AppLayout from "../index.page";
export function ExchangeDefault() {
  const router = useRouter();

  const { value: lastPair } = useLocalStorage(STORE_KEY.LAST_PAIR, null);
  const { data: resData } = useHttpGet<null, any>(QUERY_KEY.PAIRS, API_ENDPOINT.GET_PAIRS, { refetchOnMount: true });

  useEffect(() => {
    if (resData) {
      if (lastPair) {
        const { spot } = resData;
        if (spot.find(e => e.symbol === lastPair)) router.push(`/exchange/${lastPair}`);
        else router.push(`/exchange/${spot[0].symbol}`);
      } else if (resData) {
        const { spot } = resData;
        if (!isEmpty(spot)) router.push(`/exchange/${spot[0].symbol}`);
        else router.push(`/exchange/${lastPair || DEFAULT_PAIR}`);
      } else router.push(`/exchange/${DEFAULT_PAIR}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resData]);
  return (
    <AppLayout>
      <div style={{ left: 0, top: 0, position: 'absolute', width: '100%', height: '100%' }}>
        <Loading style={{ padding: 'unset', height: '100%' }} />
      </div>
    </AppLayout>
  )
}

export default ExchangeDefault;
