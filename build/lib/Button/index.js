"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var buttonStyled = styled_system_1.compose(styled_system_1.background, styled_system_1.backgroundColor, styled_system_1.border, styled_system_1.borderBottom, styled_system_1.borderColor, styled_system_1.borderLeft, styled_system_1.borderTop, styled_system_1.borderRadius, styled_system_1.borderRight, styled_system_1.width, styled_system_1.height);
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), buttonStyled);
exports.default = StyledButton;
var templateObject_1;
//# sourceMappingURL=index.js.map