"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("header", { className: "App-header" },
            react_1.default.createElement("img", { src: "./logo.svg", className: "App-logo", alt: "logo" }),
            react_1.default.createElement("p", null,
                "Edit ",
                react_1.default.createElement("code", null, "src/App.js"),
                " and save to reload."),
            react_1.default.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
exports.default = App;
//# sourceMappingURL=App.js.map