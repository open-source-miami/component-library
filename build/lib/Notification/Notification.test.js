"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@testing-library/react");
var Notification_component_1 = require("./Notification.component");
describe("Notification", function () {
    test("renders", function () {
        var getByText = react_1.render(React.createElement(Notification_component_1.default, { kind: "normal" }, "Normal notification")).getByText;
        expect(getByText("Normal notification")).toBeInTheDocument();
    });
    test("forward props to container", function () {
        var getByText = react_1.render(React.createElement(Notification_component_1.default, { kind: "normal", id: "myAlert" }, "Normal notification")).getByText;
        expect(getByText("Normal notification")).toHaveAttribute("id", "myAlert");
    });
});
//# sourceMappingURL=Notification.test.js.map