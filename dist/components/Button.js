"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
require("../styles/Button.css");
var Button = function (_a) {
    var _b = _a.loading, loading = _b === void 0 ? false : _b, iconLeft = _a.iconLeft, iconRight = _a.iconRight, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, tooltip = _a.tooltip, _e = _a.debounceTime, debounceTime = _e === void 0 ? 300 : _e, children = _a.children, props = __rest(_a, ["loading", "iconLeft", "iconRight", "variant", "size", "tooltip", "debounceTime", "children"]);
    var debounceTimeout = (0, react_1.useRef)(null);
    var handleClick = function (event) {
        if (debounceTimeout.current)
            clearTimeout(debounceTimeout.current);
        debounceTimeout.current = setTimeout(function () {
            if (props.onClick)
                props.onClick(event);
        }, debounceTime);
    };
    return (react_1.default.createElement("button", __assign({}, props, { className: (0, classnames_1.default)('btn', "btn-".concat(variant), "btn-".concat(size), { loading: loading }), onClick: handleClick, title: tooltip }),
        loading && react_1.default.createElement("span", { className: "spinner" }),
        iconLeft && react_1.default.createElement("span", { className: "icon-left" }, iconLeft),
        children,
        iconRight && react_1.default.createElement("span", { className: "icon-right" }, iconRight)));
};
exports.default = Button;
