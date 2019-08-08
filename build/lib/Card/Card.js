"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var Box_1 = require("../Box");
exports.bgAndBorders = styled_system_1.compose(styled_system_1.background, styled_system_1.backgroundColor, styled_system_1.backgroundImage, styled_system_1.backgroundPosition, styled_system_1.backgroundSize, styled_system_1.backgroundRepeat, styled_system_1.border, styled_system_1.borderBottom, styled_system_1.borderColor, styled_system_1.borderLeft, styled_system_1.borderRight, styled_system_1.borderRadius, styled_system_1.borderWidth, styled_system_1.borderStyle, styled_system_1.borderTop, styled_system_1.borders);
var Card = styled_components_1.default(Box_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  ", "\n"], ["\n  position: relative;\n  overflow: hidden;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  ", "\n"])), exports.bgAndBorders);
Card.defaultProps = {
    width: [1, 1 / 2, 1 / 4]
};
exports.default = Card;
var templateObject_1;
//# sourceMappingURL=Card.js.map