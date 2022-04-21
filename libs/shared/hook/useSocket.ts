import { useEffect, useState } from "react";
import isEqual from "lodash/isEqual";
import { socket } from "./../api/index";

export interface useSocketProps {
  event: "orderbook_limited";
  leavePair?: string;
  pair?: string;
}

export function useSocket({leavePair,  event, pair }: useSocketProps) {
  const [state, setState] = useState(null);

  useEffect(() => {
    if (pair) {
      if (event === "orderbook_limited") {
        if(leavePair) socket.send("leave", leavePair);
        socket.send("join", pair);
        socket.listen(event, (data) => {
          if(!isEqual(data,state)) setState(data);
        });
      }
    }
    
  }, [pair]);
  return state;
}
