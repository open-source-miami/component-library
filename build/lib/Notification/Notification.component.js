"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
/**
 * Returns text color css value for the given `kind`.
 */
var getTextColor = function (kind) {
    switch (kind) {
        case "normal":
            return "#1576ca";
        case "success":
            return "green";
        case "error":
            return "#ce0303";
        default:
            return "#1576ca";
    }
};
/**
 * Returns border color css value for the given `kind`.
 */
var getBorderColor = function (kind) {
    switch (kind) {
        case "normal":
            return "#1576ca";
        case "success":
            return "#44b329";
        case "error":
            return "#ce0303";
        default:
            return "#1576ca";
    }
};
/**
 * Returns background color css value for the given `kind`.
 */
var getBackgroundColor = function (kind) {
    switch (kind) {
        case "normal":
            return "rgba(14, 77, 255, 0.09)";
        case "success":
            return "rgba(2, 189, 2, 0.09)";
        case "error":
            return "rgba(255, 0, 0, 0.09)";
        default:
            return "rgba(14, 77, 255, 0.09)";
    }
};
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n  padding: 15px;\n  border-radius: 3px;\n"], ["\n  color: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n  padding: 15px;\n  border-radius: 3px;\n"
    /**
     * Notification.
     */
])), function (_a) {
    var kind = _a.kind;
    return getTextColor(kind);
}, function (_a) {
    var kind = _a.kind;
    return getBorderColor(kind);
}, function (_a) {
    var kind = _a.kind;
    return getBackgroundColor(kind);
});
/**
 * Notification.
 */
var Notification = function (props) { return (React.createElement(Container, __assign({ role: "alert" }, props), props.children)); };
exports.default = Notification;
var templateObject_1;
//# sourceMappingURL=Notification.component.js.map