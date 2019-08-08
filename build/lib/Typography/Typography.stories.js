"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var _1 = require(".");
var README_md_1 = require("./README.md");
react_1.storiesOf("Typography", module)
    .addParameters({
    readme: {
        content: README_md_1.default,
        codeTheme: "atom-dark"
    }
})
    .add("Text", function () { return (React.createElement("div", null,
    React.createElement(_1.default, { variant: "h1", fontFamily: "Notable" }, "H1: Heading h1"),
    React.createElement(_1.default, { variant: "h2", fontFamily: "Notable" }, "H2: Heading h2"),
    React.createElement(_1.default, { variant: "h3", fontFamily: "Roboto" }, "H3: Heading h3"),
    React.createElement(_1.default, { variant: "h4", fontFamily: "Roboto" }, "H4: Heading h4"),
    React.createElement(_1.default, { variant: "h5", fontFamily: "Roboto" }, "H5: Heading h5"),
    React.createElement(_1.default, { variant: "h6", fontFamily: "Roboto" }, "H6: Heading h6"),
    React.createElement(_1.default, { variant: "p", fontFamily: "Roboto" }, "P: Paragraph p"))); });
//# sourceMappingURL=Typography.stories.js.map