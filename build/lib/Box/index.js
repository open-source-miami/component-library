"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_system_1 = require("styled-system");
var layout = styled_system_1.compose(styled_system_1.space, styled_system_1.display, styled_system_1.width, styled_system_1.height, styled_system_1.maxWidth, styled_system_1.color);
var Box = styled_components_1.default("div")({
    boxSizing: "border-box",
    minWidth: 0
}, styled_system_1.width, styled_system_1.flex, styled_system_1.flexBasis, styled_system_1.flexDirection, styled_system_1.flexWrap, styled_system_1.border, styled_system_1.borderRadius, layout);
exports.default = Box;
//# sourceMappingURL=index.js.map