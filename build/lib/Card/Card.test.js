"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@testing-library/react");
var Card_1 = require("./Card");
var CardContent_1 = require("./CardContent");
afterEach(react_1.cleanup);
describe("Card Component Test", function () {
    it("renders", function () {
        var getByText = react_1.render(React.createElement(Card_1.default, null, "Basic Card")).getByText;
        expect(getByText("Basic Card")).toBeInTheDocument();
    });
    it("passes html props", function () {
        var getByText = react_1.render(React.createElement(Card_1.default, { id: "myCard" }, "Card Component")).getByText;
        expect(getByText("Card Component")).toHaveAttribute("id", "myCard");
    });
    it("renders with content", function () {
        var getByText = react_1.render(React.createElement(Card_1.default, null,
            React.createElement(CardContent_1.default, null, "Card Content"))).getByText;
        expect(getByText("Card Content")).toBeInTheDocument();
    });
    it("passes html properties to content", function () {
        var getByText = react_1.render(React.createElement(Card_1.default, null,
            React.createElement(CardContent_1.default, { id: "myCardContent" }, "Card Content"))).getByText;
        expect(getByText("Card Content")).toHaveAttribute("id", "myCardContent");
    });
});
//# sourceMappingURL=Card.test.js.map