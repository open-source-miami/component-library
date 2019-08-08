"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var grid_1 = require("@rebass/grid");
var styled_components_1 = require("styled-components");
var README_md_1 = require("./README.md");
var StyledBox = styled_components_1.default(grid_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  border: ", ";\n  height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &:hover {\n    background-color: lightgray;\n  }\n"], ["\n  cursor: pointer;\n  border: ", ";\n  height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &:hover {\n    background-color: lightgray;\n  }\n"])), function (props) { return "1px solid " + props.borderColor; });
var renderGridBoxes = function () {
    var boxes = [];
    var i;
    for (i = 0; i < 32; i += 1) {
        boxes.push(React.createElement(StyledBox, { borderColor: "gray", width: 1 / 8, key: i },
            "Space ",
            i));
    }
    return boxes;
};
react_1.storiesOf("Grid", module)
    .addParameters({
    readme: {
        content: README_md_1.default,
        codeTheme: "atom-dark"
    }
})
    .add("Grid", function () {
    return (React.createElement(grid_1.Flex, { flexWrap: "wrap", justifyContent: "center" }, renderGridBoxes()));
});
var templateObject_1;
//# sourceMappingURL=Grid.stories.js.map