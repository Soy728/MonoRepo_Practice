"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = add;
const parser_1 = require("parser");
function add(num1, num2) {
    return (0, parser_1.parse)(num1) + (0, parser_1.parse)(num2);
}
