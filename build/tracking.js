export function disableTracking() {
    if (typeof document === "undefined") {
        console.error("cannot disable tracking during ssr");
        return;
    }
    if (typeof window.fathom === "undefined") {
        console.warn("Fathom analytics not loaded. Cannot disable tracking");
        return;
    }
    window.fathom.blockTrackingForMe();
}
export function enableTracking() {
    if (typeof document === "undefined") {
        console.error("cannot enable tracking during ssr");
        return;
    }
    if (typeof window.fathom === "undefined") {
        console.warn("Fathom analytics not loaded. Cannot enable tracking");
        return;
    }
    window.fathom.enableTrackingForMe();
}
