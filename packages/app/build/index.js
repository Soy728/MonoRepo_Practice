"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("@common/parser");
var utils_1 = require("@common/utils");
var testParser = (0, parser_1.parse)('30');
var testUtil = (0, utils_1.add)('20', '40');
console.log({ testParser: testParser, testUtil: testUtil });
