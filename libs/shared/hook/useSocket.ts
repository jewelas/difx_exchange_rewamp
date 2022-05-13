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

  onSuccess?: (data: any) => void;
}

export function useSocketByEvent({ event, leavePair, pair, onSuccess }: useSocketProps) {
  const send = () => {
    if (leavePair) socket.send('leave', leavePair);
    if (pair) socket.send('join', pair);
    socket.listen(SocketEvent[event], (data: any) => {
      onSuccess && onSuccess(data)
    });
  }

  useEffect(() => {
    return () => {
      if (pair) socket.send("leave", pair);
      socket.off(SocketEvent[event])
    }
  }, [])

  return { send }
}

export function useSocket({ leavePair, event, pair,
}: useSocketProps) {
  const [state, setState] = useState(null);

  useEffect(() => {

    // Sending
    if (leavePair) socket.send("leave", leavePair);
    if (pair) socket.send("join", pair);

    // Receiving
    socket.listen(SocketEvent[event], (data: any) => {
      setState(data);
    });

    return () => {
      if (pair) socket.send("leave", pair);
      socket.off(SocketEvent[event])
    }

  }, [pair, event]);

  return state;
}
