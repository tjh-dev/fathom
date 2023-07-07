import React from "react";
import { fathomScript } from "./";
function FathomScript(_a) {
    var site = _a.site, exclude = _a.exclude, canonical = _a.canonical, auto = _a.auto;
    return (React.createElement("script", { src: fathomScript, "data-site": site, "data-excluded-domains": exclude === null || exclude === void 0 ? void 0 : exclude.map(function (domain) { return domain.trim(); }).join(","), "data-canonical": canonical, "data-auto": auto, "data-spa": "history", defer: true }));
}
export var Fathom = React.memo(FathomScript);
