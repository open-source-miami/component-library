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
var styled_system_1 = require("styled-system");
var typography = styled_system_1.compose(styled_system_1.fontSize, styled_system_1.fontStyle, styled_system_1.fontWeight, styled_system_1.letterSpacing, styled_system_1.lineHeight, styled_system_1.textAlign);
var returnStyled = function (arg) {
    return styled_components_1.default[arg];
};
var Typography = function (props) {
    var StyledTypography = returnStyled(props.variant)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n    ", "\n    ", "\n    \n    font-family: ", ";\n    font-face: {\n      src: @import ('/assets/fonts/Notable-Regular.ttf')\n    }\n    font-face: {\n      src: @import ('/assets/fonts/Roboto-Regular.ttf')\n    }\n "], ["\n    ", "\n    ", "\n    ", "\n    \n    font-family: ",
        ";\n    font-face: {\n      src: @import ('/assets/fonts/Notable-Regular.ttf')\n    }\n    font-face: {\n      src: @import ('/assets/fonts/Roboto-Regular.ttf')\n    }\n "])), styled_system_1.color, typography, styled_system_1.space, function (p) {
        return p.fontFamily === "Notable"
            ? "Notable, sans-serif"
            : "Roboto, sans-serif";
    });
    return (React.createElement(StyledTypography, __assign({ fontFamily: props.fontFamily }, props), props.children));
};
exports.default = Typography;
var templateObject_1;
//# sourceMappingURL=Typography.js.map