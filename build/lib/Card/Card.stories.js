"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var README_md_1 = require("./README.md");
var Card_1 = require("./Card");
var CardContent_1 = require("./CardContent");
var Typography_1 = require("../Typography");
var Flex_1 = require("../Flex");
var stories = react_1.storiesOf("Card", module).addParameters({
    readme: {
        content: README_md_1.default,
        codeTheme: "atom-dark"
    }
});
stories.add("Card", function () {
    var cardImageText = function (content) { return (React.createElement(Typography_1.default, { margin: "1rem", fontWeight: "lighter", color: "#fff", variant: "h2" }, content)); };
    return (React.createElement(Flex_1.default, { justifyContent: "space-evenly" },
        React.createElement(Card_1.default, { height: "15rem" },
            React.createElement(CardContent_1.default, { borderBottom: "1px solid #ccc" },
                React.createElement(Typography_1.default, { m: "0", variant: "h2", fontWeight: "lighter" }, "Basic Card")),
            React.createElement(CardContent_1.default, null,
                React.createElement(Typography_1.default, { variant: "p" }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex rerum consequuntur iusto animi deleniti ducimus neque cum iste esse, et itaque quaerat iure ullam quod doloremque provident optio quam sint!")),
            React.createElement(CardContent_1.default, { borderTop: "1px solid #ccc" },
                React.createElement(Typography_1.default, { variant: "span" }, "Details"))),
        React.createElement(Card_1.default, null,
            React.createElement(CardContent_1.default, { position: "absolute", backgroundImage: "url(\"https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/oitqabmddnnagdth6wyj/air-max-270-react-bauhaus-mens-shoes-DcpzJF.jpg\")", backgroundSize: "cover", backgroundPosition: "50% 60%", width: "100%", height: "13rem" }),
            React.createElement(CardContent_1.default, { mt: "12rem" },
                React.createElement(Typography_1.default, { variant: "h1" }, " Card With Image "),
                React.createElement(Typography_1.default, { variant: "p" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo, voluptate autem eum cumque aut distinctio provident earum animi similique.")),
            React.createElement(CardContent_1.default, { borderTop: "1px solid #ccc" },
                React.createElement(Typography_1.default, { m: "0", variant: "h4", textAlign: "center" }, "BUY NOW!"))),
        React.createElement(Card_1.default, { backgroundImage: "url(\"https://media.gq.com/photos/5c65b35e73213b217a33093f/3:4/w_2250%2Ch_3000%2Cc_limit/air-max-dia-1163.jpg\")", backgroundPosition: "center", backgroundSize: "cover" },
            React.createElement(CardContent_1.default, { position: "absolute", top: "0", left: "0" }, cardImageText("Air Max")),
            React.createElement(CardContent_1.default, { position: "absolute", bottom: "0", right: "0" }, cardImageText("$200")))));
});
//# sourceMappingURL=Card.stories.js.map