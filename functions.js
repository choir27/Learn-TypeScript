"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
//putting number type after the paranthesis lets it know what type is being outputted
var addNumbers = function (v1, v2) {
    return v1 + v2;
};
//don't do this in typeScript
// module.exports = addNumbers;
exports.default = addNumbers;
// export const addStrings = (str1: string, str2: string): string => {
//     return `${str1} ${str2}`
// }
//how to add default paramaters to typescript functions
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = "momo"; }
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
// | is a union type where you can have either type for the variable/paramater
var format = function (title, param) { return "".concat(title, " ").concat(param); };
exports.format = format;
//if there is no value being returned, you want to tell the function that it will be type void
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
//if typescript says that Promise is not defined, you can go to tsconfig and change "target" value to "esnext",which defines when you compile the target specification for the echamscript that you're looking for to support
var fetchData = function (url) { return Promise.resolve("Data from ".concat(url)); };
exports.fetchData = fetchData;
//multiple inputs for a paramater (rest)
function introduce(salution) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salution, " ").concat(names.join(" "));
}
//Typescript only enforces types at compile time, not at runtime
//for example
//user?.first checks if user is defined first before proceeding with the rest of the code
//?? if you have undefined value on the left side of the operator, then use the right side value
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "first", " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last");
}
exports.getName = getName;
