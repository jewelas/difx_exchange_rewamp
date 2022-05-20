import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { useUpdateAtom, useAtomValue} from "jotai/utils";
import { currentUserAtom, isLoggedInAtom } from "../atom/index";
import { User } from "..";

export function useResize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      const width: number = document?.body?.clientWidth;
      const height: number = document?.body?.clientHeight;
      if (width && height) {
        setWidth(width);
        setHeight(height);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return { width, height };
}
