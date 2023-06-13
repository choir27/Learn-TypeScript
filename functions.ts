//putting number type after the paranthesis lets it know what type is being outputted
const addNumbers = (v1:number,v2:number): number=>{
    return v1 + v2;
}

export const createStrings = (v1: string, v2: string = "illya"): string => {
    return `${v1} ${v2}`
}

console.log(createStrings("miyu"))

//don't do this in typeScript
// module.exports = addNumbers;
export default addNumbers;

// export const addStrings = (str1: string, str2: string): string => {
//     return `${str1} ${str2}`
// }

//how to add default paramaters to typescript functions
export const addStrings = (str1: string, str2: string = "momo"): string => {
    return `${str1} ${str2}`
}


// | is a union type where you can have either type for the variable/paramater
export const format = (title:string, param: string | number): string => `${title} ${param}`


//if there is no value being returned, you want to tell the function that it will be type void
export const printFormat = (title:string, param: string | number): void=> {
    console.log(format(title,param));
}

console.log(printFormat("string","test"))

//if typescript says that Promise is not defined, you can go to tsconfig and change "target" value to "esnext",which defines when you compile the target specification for the echamscript that you're looking for to support
export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`)


//multiple inputs for a paramater (rest)
    function introduce(salution: string, ...names:string[]):string{
        return `${salution} ${names.join(" ")}`
    }


//Typescript only enforces types at compile time, not at runtime
    //for example

    //user?.first checks if user is defined first before proceeding with the rest of the code
    //?? if you have undefined value on the left side of the operator, then use the right side value
export function getName(user: {first: string; last: string}):string{
    return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}

