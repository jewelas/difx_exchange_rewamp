import { useEffect, useState } from "react";
import { socket } from "./../api/index";

export enum SocketEvent {
  orderbook_limited,
  prices,
  trades,
  user_orders,
  user_stoplimits,
  user_balances,
  user_trades,
  off,
  qr_listen,
  graph_data
}
export interface useSocketProps {
  event: SocketEvent;
  leave?: string | number;
  join?: string | number;
  onSuccess?: (data: any) => void;
}

export function useSocketByEvent({ event, onSuccess }: useSocketProps) {
  const [currentJoin, setCurrentJoin] = useState<any>(null);
  const send = ({ leave, join }: { leave?: string | number, join?: string | number }) => {
    
    if (leave) socket.send('leave', leave);
    if (join){
      setCurrentJoin(join);
      socket.send('join', join);
    }
    socket.listen(SocketEvent[event], (data: any) => {
      onSuccess && onSuccess(data)
    });
  }

  useEffect(() => {
    return () => {
      if (currentJoin) socket.send("leave", currentJoin);
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
