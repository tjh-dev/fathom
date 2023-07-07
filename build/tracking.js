"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableTracking = exports.disableTracking = void 0;
var TRACKING_KEY = "blockFathomTracking";
function disableTracking(options) {
    var _a;
    if (typeof document === "undefined") {
        console.error("cannot disable tracking during ssr");
        return;
    }
    if (!options || options.quietly === false) {
        if (typeof window.fathom === "undefined") {
            console.warn("Fathom analytics not loaded. Cannot disable tracking");
            return;
        }
        window.fathom.blockTrackingForMe();
    }
    else {
        (_a = window.localStorage) === null || _a === void 0 ? void 0 : _a.setItem(TRACKING_KEY, "true");
    }
}
exports.disableTracking = disableTracking;
function enableTracking(options) {
    var _a;
    if (typeof document === "undefined") {
        console.error("cannot enable tracking during ssr");
        return;
    }
    if (!options || options.quietly === false) {
        if (typeof window.fathom === "undefined") {
            console.warn("Fathom analytics not loaded. Cannot enable tracking");
            return;
        }
        window.fathom.enableTrackingForMe();
    }
    else {
        (_a = window.localStorage) === null || _a === void 0 ? void 0 : _a.removeItem(TRACKING_KEY);
    }
}
exports.enableTracking = enableTracking;
