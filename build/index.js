"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGoal = exports.enableTracking = exports.disableTracking = exports.Fathom = exports.fathomScript = exports.fathomDomain = void 0;
exports.fathomDomain = "https://cdn.usefathom.com";
exports.fathomScript = exports.fathomDomain + "/script.js";
var fathom_1 = require("./fathom");
Object.defineProperty(exports, "Fathom", { enumerable: true, get: function () { return fathom_1.Fathom; } });
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
function useGoal(code) {
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
exports.useGoal = useGoal;
