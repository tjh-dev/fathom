"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fathom = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require("./");
function FathomScript(_a) {
    var site = _a.site, exclude = _a.exclude, canonical = _a.canonical, auto = _a.auto, scriptUrl = _a.scriptUrl;
    return (react_1.default.createElement("script", { src: scriptUrl !== null && scriptUrl !== void 0 ? scriptUrl : _1.fathomScript, "data-site": site, "data-excluded-domains": exclude === null || exclude === void 0 ? void 0 : exclude.map(function (domain) { return domain.trim(); }).join(","), "data-canonical": canonical, "data-auto": auto, "data-spa": "history", defer: true }));
}
exports.Fathom = react_1.default.memo(FathomScript);
