interface Cat{
    readonly name: string, //makes only name property readonly, preventing it from being changed
    breed: string,
}

type ReadonlyCat = Readonly<Cat>

// function makeCat(name: string, breed:string): ReadonlyCat{
//     return{
//         name,
//         breed
//     }
// }

//type utility readonly makes all property types of Cat readonly
function makeCat(name: string, breed: string): Readonly<Cat>{
    return{
        name,
        breed
    }
}

const usul = makeCat("Usul", "Tabby");
// can't do this because readonly
// usul.name = "Piter";

function makeCoordinate(x: number, y: number, z: number): readonly [number, number, number]{
    return [x,y,z];
}

const c1 = makeCoordinate(10,20,30);
//can't do this because readonly
// c1[0] = 50


const reallyConst = [1,2,4] as const;//makes all values of array as if it's const variable
// reallyConst[0] = 50;