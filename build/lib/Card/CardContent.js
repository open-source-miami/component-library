"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var Box_1 = require("../Box");
var Card_1 = require("./Card");
var content = styled_system_1.compose(styled_system_1.position, styled_system_1.top, styled_system_1.left, styled_system_1.right, styled_system_1.bottom, Card_1.bgAndBorders);
var CardContent = styled_components_1.default(Box_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0.5rem;\n  ", "\n"], ["\n  padding: 0.5rem;\n  ", "\n"])), content);
exports.default = CardContent;
var templateObject_1;
//# sourceMappingURL=CardContent.js.map