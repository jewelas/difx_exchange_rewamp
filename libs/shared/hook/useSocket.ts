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
  leave?: string;
  join?: string;

  onSuccess?: (data: any) => void;
}

export function useSocketByEvent({ event, leave, join, onSuccess }: useSocketProps) {
  const send = () => {
    if (leave) socket.send('leave', leave);
    if (join) socket.send('join', join);
    socket.listen(SocketEvent[event], (data: any) => {
      onSuccess && onSuccess(data)
    });
  }

  useEffect(() => {
    return () => {
      if (join) socket.send("leave", join);
      socket.off(SocketEvent[event])
    }
  }, [])

  return { send }
}

export function useSocket({ leave, event, join,
}: useSocketProps) {
  const [state, setState] = useState(null);

  useEffect(() => {

    // Sending
    if (leave) socket.send("leave", leave);
    if (join) socket.send("join", join);

    // Receiving
    socket.listen(SocketEvent[event], (data: any) => {
      setState(data);
    });

    return () => {
      if (join) socket.send("leave", join);
      socket.off(SocketEvent[event])
    }

  }, [leave, join, event]);

  return state;
}
