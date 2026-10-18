import { useSyncExternalStore } from "react";

const QUERY = "(max-width: 1028px)";

function subscribe(callback: () => void) {
    const mediaQuery = window.matchMedia(QUERY);

    mediaQuery.addEventListener("change", callback);

    return () => {
        mediaQuery.removeEventListener("change", callback);
    };
}

function getSnapshot() {
    return window.matchMedia(QUERY).matches;
}

export function useIsMobile() {
    return useSyncExternalStore(
        subscribe,
        getSnapshot
    );
}