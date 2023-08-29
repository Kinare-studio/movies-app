import { useEffect } from "react";

export function useOutside(ref, handler) {
  const listener = (event) => {
    const el = ref?.current;
    if (!el || el.contains(event?.target || null)) {
      return;
    }
    handler(event);
  };

  useEffect(() => {
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, listener]);
}
