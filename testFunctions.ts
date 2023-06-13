
import addNumbers, {addStrings, getName} from "./functions"

console.log(addNumbers(1,2));
console.log(addStrings("a", "b"));
console.log(addStrings("a"));
//
// console.log(addNumbers(1,"test"));

//always avoid going for any type, you always want to control what type goes in/out

console.log(getName({first: "illya", last: "eizbern"}))