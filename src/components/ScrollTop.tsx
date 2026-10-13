import { useEffect } from "react";
import { useLocation } from "react-router";


export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if(hash) return
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}