import { useEffect, useState } from "react";
import { socket } from "./../api/index";

export enum SocketEvent {
  orderbook_limited,
  trades,
  user_orders,
  user_stoplimits,
  user_balances,
  off
}
export interface useSocketProps {
  event: SocketEvent;
  leavePair?: string;
  pair?: string;
  refetchOnWindowFocus?: boolean;
}

export function useSocket({
  leavePair,
  event,
  pair,
  refetchOnWindowFocus = true,
}: useSocketProps) {
  const [state, setState] = useState(null);

  const [isTurnOnReceiving, setIsTurnOnReceiving] = useState(true);

  useEffect(() => {
    if (pair && isTurnOnReceiving) {

      // Sending
      switch (event) {
        case SocketEvent.orderbook_limited:
          if (leavePair) socket.send("leave", leavePair);
          socket.send("join", pair);
          break;
      }
    }

    // Receiving
    if(event !== SocketEvent.off){
      socket.listen(SocketEvent[event], (data: any) => {
        setState(data);
      });
    } else {
      socket.off();
    }


  }, [pair, event, isTurnOnReceiving]);

  // Only get websocket data when user focus on browser
  useEffect(() => {
    const onFocus = () => {
      setIsTurnOnReceiving(true);
    };

    const onBlur = () => {
      socket.off();
      setIsTurnOnReceiving(false);
    };
    if (refetchOnWindowFocus) {
      window.addEventListener("focus", onFocus);
      window.addEventListener("blur", onBlur);
    }
    return () => {
      if (refetchOnWindowFocus) {
        window.removeEventListener("focus", onFocus);
        window.removeEventListener("blur", onBlur);
      }
    };
  }, []);

  return state;
}
