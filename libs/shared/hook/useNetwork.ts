import { useEffect, useState } from "react";
import { NetworkType } from "./../type/Network";

function getNetworkConnection() {
  return navigator.connection || null;
}

function getNetworkConnectionInfo() {
  const connection: NetworkType | any = getNetworkConnection();
  if (!connection) {
    return {};
  }
  return {
    downlink: connection.downlink,
    rtt: connection.rtt,
    effectiveType: connection.effectiveType,
    saveData: connection.saveData,
  };
}

export function useNetwork() {
  const initState: NetworkType = {
    since: undefined,
    online: true,
  };
  const [state, setState] = useState<NetworkType>(initState);

  useEffect(() => {
    const handleOnline = () => {
      setState((prevState) => ({
        ...prevState,
        online: true,
        since: new Date().getTime(),
      }));
    };
    const handleOffline = () => {
      setState((prevState) => ({
        ...prevState,
        online: false,
        since: new Date().getTime(),
      }));
    };

    const handleConnectionChange = () => {
      setState((prevState) => ({
        ...prevState,
        ...getNetworkConnectionInfo(),
      }));
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const connection = getNetworkConnection();
    connection?.addEventListener("change", handleConnectionChange);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      connection?.removeEventListener("change", handleConnectionChange);
    };
  });
  return state;
}
