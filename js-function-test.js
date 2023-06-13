const {getName} = require('./functions');

console.log(getName({
    first: "Shuten",
    last: "Douji"
}));



//return undefined for first
console.log(getName());

//node js-function-test.js does not work, cause it can't find functions

//to compile a ts file to a js file, use the command npx tsc <file name>

//