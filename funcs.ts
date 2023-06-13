export function printToFile(text:string, callback: () => void): void{
    console.log(text);
    callback();
}


export type Something = (t: number) => number;

//unlike interface, for type, you make it equal to a function
export type MutationFunction = (v:number) => number;

export function arrayMutate(numbers: number[], mutate: MutationFunction):number[]{ 
    return numbers.map(mutate)
}

export function testSomething(array: number[], some: Something):number[]{
    return array.map(some)
}

console.log(testSomething([1,2,3,4,5], (v)=>v*2))

//won't work cause MutationFunction is a number
// const myNewMutateFunc: MutationFunction = (v:string) => `${v}`
const myNewMutateFunc: MutationFunction = (v:number) => v*100
console.log(arrayMutate([1,2,3,4], (v)=> myNewMutateFunc(v)));


export type AdderFunction = (v: number) => number

// export function createAdder(num: number):(val:number)=>number {
//     return (val: number) => num + val;
// }

export function createAdder(num: number): AdderFunction {
        return (val: number) => num + val;
    }

const addOne = createAdder(1);
//since the paramater of createAdder is defined above, and addOne is a new function that will add 1 to any new paramaters
console.log(addOne(55))

export function createMutation(num: number): MutationFunction {
    return (unicorn: number) => num * unicorn
}

const multiplyNum = createMutation(22);
console.log(multiplyNum(11))