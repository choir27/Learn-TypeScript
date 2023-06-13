let userName: string = "melt"
//To define the data type in ts, you have to do variable: data type
let check: boolean = true;
let number: number = 12;
//regex
let regex: RegExp = /foo/;

userName += " llya";

//by defining a variable to a value and hovering over it, you can see what data type Typescript sees that value as

//array of strings
const names: string[] = userName.split(" ");


// const myValues: Array<number> = ["a"] or const myValues: Array<number> = [1, 2, 3, "a"] will return error cause string is not assignable to type number
const myValues: Array<number> = [1,2,3];

//Can't do this cause objects are assigned as string types const myPerson: {first: string, last: string} = {
//     first: "richard",
//     last: "choi",
//     check: true,
// }


//so you don't have to copy and past {first: string, last: string} for every object
interface Hikari {
    first: string,
    last: string
} 

//object
const myPerson: {first: string, last: string} = {
    first: "richard",
    last: "choi"
}

//OR 

const Person: Hikari = {
    first: "richard",
    last: "choi"
}

interface Illya {
    firstName: string,
    lastName: string,
    age: number
}

const employees : Illya = {
    firstName: "Shuten",
    lastName: "Douji",
    age: 22
}


//How to make the below code work (it won't work cause it infers types from 10 and 20)
// const ids = {
//     10: "a",
//     20: "b"
// }

// ids[30] = "c"

//utility type, which defines key type and the value type
const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c";

//can't do this, cause you're comparing a string to a number

// if(ids[30]=== 20){
//     console.log("test")
// }

if(ids[30]=== "D"){
    console.log("test")
}

//i is inferred to be a number type
for(let i = 0; i < 10; i++){
    console.log(i);
}

// //i is inferred to be a number type
// for(let i:number = 0; i < 10; i++){
//     console.log(i);
// }

// [1,2,3].forEach((v)=>console.log(v));
[1,2,3].forEach((v:number)=>console.log(v));
[1,2,3].map((v)=>v*2);
[1,2,3].map((v:number)=>v*2);

//from the template string literal, it infers the output to be a string
const test = [1,2,3].map((v)=>`${v*2}`);
//since input type is a number(the array), there is no error here
const anotherTest = [1,2,3].map((v:number)=>`${v*2}`);
//this doesn't work because it's expecting the output to be a number type, not a string type
// const test2:number[] = [1,2,3].map((v:number)=>`${v*2}`);


const onemore: string = ["illya", "is", "in", "the", "game", "," , "fgo"].reduce((acc:string,ele:string)=> ele === "," ? acc + ele : acc + " " + ele)

//*********************************************************/

console.log(onemore)


