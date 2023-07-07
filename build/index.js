"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGoal = exports.Fathom = exports.fathomScript = exports.fathomDomain = void 0;
exports.fathomDomain = "https://cdn.usefathom.com";
exports.fathomScript = exports.fathomDomain + "/script.js";
var fathom_1 = require("./fathom");
Object.defineProperty(exports, "Fathom", { enumerable: true, get: function () { return fathom_1.Fathom; } });
var use_goal_1 = require("./use-goal");
Object.defineProperty(exports, "useGoal", { enumerable: true, get: function () { return use_goal_1.useGoal; } });
