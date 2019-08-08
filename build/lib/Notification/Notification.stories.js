"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var grid_1 = require("@rebass/grid");
var _1 = require(".");
var utils_1 = require("../utils");
react_1.storiesOf("Notification", module).add("Default", function () { return (React.createElement(grid_1.Flex, { width: 1 / 2, flexDirection: "column" }, ["normal", "success", "error"].map(function (kind) { return (React.createElement(grid_1.Box, { key: kind, my: 2 },
    React.createElement(_1.default, { kind: kind },
        React.createElement("h3", null,
            utils_1.capitalize(kind),
            " notification"),
        React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quia distinctio ab consequuntur nisi dolores harum mollitia quam consectetur atque, obcaecati repellat enim, voluptas quibusdam. Esse itaque debitis expedita adipisci.")))); }))); });
//# sourceMappingURL=Notification.stories.js.map