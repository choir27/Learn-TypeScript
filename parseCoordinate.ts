interface Coordinate {
    x: number,
    y: number,
}


// function parseCoordinateFromObject(obj: Coordinate): Coordinate {
//     return {
//         ...obj,
//     }
// }

// function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
//     return {
//         x,
//         y,
//     }
// }


//unkown is basically any, but you have to cast it before you use it, kind of like a safe any
//in the below function, ? indicates that arg2 is optional, or could be null
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate{
    let coord: Coordinate = {
        x: 0,
        y: 0,
    };
    

    //since we're doing this check at runtime, arg1 is an object and not a Coordinate here
    if (typeof arg1 === "object"){
        coord = {
            //keyword as defines a variable as certain type, in this case, a coordinate
            ...(arg1 as Coordinate)
        }
    }else if(typeof arg1 === "string"){
        (arg1 as string).split(",").forEach(str => {
            
            const [key, value] = str.split(":");
            coord[key.trim() as "x" | "y"] = parseInt(value.split(" ").join(""), 10);
        })
    
    }else{
        coord = {
            x: arg1 as number,
            y: arg2 as number,
        }
    }

    return coord;
};

console.log(parseCoordinate(10, 20)) // outputs as {x:10, y: 20}
console.log(parseCoordinate({x: 10, y: 50}));


console.log(parseCoordinate("x:12,y:22")); //should output {x: 12, y: 22}
console.log(parseCoordinate(" x : 4  2, y : 5  5 ")); //should output {x: 12, y: 22}
