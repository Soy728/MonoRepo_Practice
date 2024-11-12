"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("parser");
var utils_1 = require("utils");
var testParser = (0, parser_1.parse)('30');
var testUtil = (0, utils_1.default)('20', '40');
console.log(testParser, testUtil);
