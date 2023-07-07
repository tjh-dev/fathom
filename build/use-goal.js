export function useGoal(code) {
    return function (value) {
        if (value === void 0) { value = 0; }
        if (typeof document === "undefined") {
            console.error("cannot track event '".concat(code, "' during ssr"));
            return;
        }
        if (typeof window.fathom === "undefined") {
            console.warn("Fathom analytics not loaded. Cannot track event '".concat(code, "'"));
            return;
        }
        window.fathom.trackGoal(code, value);
    };
}
