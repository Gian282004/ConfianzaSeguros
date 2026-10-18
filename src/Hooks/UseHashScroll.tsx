import { useEffect } from "react";
import { useLocation } from "react-router";

export function useHashScroll() {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const element = document.querySelector(location.hash);

        element?.scrollIntoView({
            behavior: "smooth"
        });
    }, [location.hash]);
}