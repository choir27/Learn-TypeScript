// const beforeLoad = "beforeLoad";
// const loading = "loading";
// const loaded = "loaded";

//enumeration

enum LoadingState{
    beforeLoad = "beforeLoad",
    loading = "loading",
    loaded = "loaded",
}

const englishLoadingStates = {
    [LoadingState.beforeLoad]: "Before Load"
};

// const isLoading = (state: string) => state === loading;

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.beforeLoad));

//Literal types

//how to do this function where the input number is restricted to a certain range without using if/else conditionals
// function rollDice (dice: number):number{
//     let pip = 0
    
//     for(let i = 0; i < dice; i++){
//         pip += Math.floor((Math.random() *5)) +1
//     }

//     return pip;
// }

// console.log(rollDice(4));

function rollDice (dice: 1 | 2 | 3):number{
    let pip = 0
    
    for(let i = 0; i < dice; i++){
        pip += Math.floor((Math.random() *5)) +1
    }

    return pip;
}

console.log(rollDice(3));

//here, we use literal types to restrict the data input for particular name, addToCart, to the desired data property, productID
function sendEvent(name: "addToCart", data: {productId: number}): void
function sendEvent(name: "checkout", data: {cartCount: number}): void
function sendEvent(name: string, data:unknown):void{
    console.log(`${name}: ${JSON.stringify(data)}`)
}

sendEvent("addToCart", {productId: 123345});