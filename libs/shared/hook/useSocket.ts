import { useEffect, useState } from "react";
import { socket } from "./../api/index";

export enum SocketEvent {
  orderbook_limited,
  trades,
  user_orders,
  user_stoplimits,
  user_balances,
  off,
  qr_listen,
}
export interface useSocketProps {
  event: SocketEvent;
  leavePair?: string;
  pair?: string;
}


export function useSocket({event, leavePair, pair}:useSocketProps){
  
}

export function _useSocket({
  leavePair,
  event,
  pair,
}: useSocketProps) {
  const [state, setState] = useState(null);

  useEffect(() => {
    if (pair) {

      // Sending
      switch (event) {
        case SocketEvent.orderbook_limited:
          if (leavePair) socket.send("leave", leavePair);
          socket.send("join", pair);
          break;
      }
    }

    // Receiving
    if (event !== SocketEvent.off) {
      socket.listen(SocketEvent[event], (data: any) => {
        setState(data);
      });
    }

    return () => { socket.off(SocketEvent[event]) }

  }, [pair, event]);

  return state;
}
