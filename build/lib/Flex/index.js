"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var Box_1 = require("../Box");
var flexProps = styled_system_1.compose(styled_system_1.flexWrap, styled_system_1.flexDirection, styled_system_1.justifyContent, styled_system_1.alignContent, styled_system_1.alignItems);
/**
 * Flex container
 */
var Flex = styled_components_1.default(Box_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  ", ";\n"], ["\n  display: flex;\n  ", ";\n"])), flexProps);
exports.default = Flex;
var templateObject_1;
//# sourceMappingURL=index.js.map