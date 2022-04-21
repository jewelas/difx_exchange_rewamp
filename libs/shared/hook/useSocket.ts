import { useEffect, useState } from "react";
import { socket } from "./../api/index";

export interface useSocketProps {
  event: "orderbook_limited";
  pair?: string | string[];
}

export function useSocket({ event, pair }: useSocketProps) {
  const [state, setState] = useState(null);

  useEffect(() => {
    if (pair) {
      if (event === "orderbook_limited") {
        socket.send("leave", pair);
        socket.send("join", pair);
        socket.listen("orderbook_limited", (data) => {
          setState(data);
        });
      }
    }
  }, [pair]);
  return state;
}
