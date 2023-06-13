
//once you set a paramater function to optional using the ?, you cannot put any additional required paramater following it, but you can put additional optionals after it

function printIngredient(quantity: string, ingredient: string, extra?: string){
    console.log(`${quantity} ${ingredient} ${extra? extra : ""}`)
}


printIngredient("4", "flour")
printIngredient("4", "sugar", "eggs")

// interface User {
//     id: string,
//     info?: {
//         email?: string;
//     }
// }

//if an unexpected error occurs, like below, but you know that the input 100% will never be undefined/null, then put an ! after the returned value that you know will always be returned (don't use this too often, similar to CSS)
// function getEmail(user: User): string{
//     if(user.info){
//         return user.info.email!;
//     }
//     return "";
// }

//This function has the same functionality as the above, but less complex and less lines of code to write
// function getEmailEasy(user:User): string {
//     return user?.info?.email ?? ""
// }
// const getEmailEasy = (user: User): string => user?.info?.email ?? "";

function addwithCallback(x:number, y:number, callback?: ()=>void){
    console.log([x,y]);
    callback?.();
}
