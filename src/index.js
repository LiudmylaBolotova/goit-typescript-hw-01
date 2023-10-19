"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concatination_1 = require("./concatination");
var button = document.querySelector('button');
var input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', function () {
        (0, concatination_1.concatenation)(input.value, 'hello!');
    });
}
