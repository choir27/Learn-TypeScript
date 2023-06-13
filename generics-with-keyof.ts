//DataType and KeyType are generics because we want the array input and the key types for the objects to be any type without using the "any" type
function pluck <DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][]{
    return items.map(item=>item[key]);
}

const dogs = [
    {name: "illya", age: 12},
    {name: "melt", age: 13}
]

console.log(pluck(dogs, "name"));
console.log(pluck(dogs, "age"));
//it knows dogs is an array, and dogs is an array of objects, and those objects consist of a name and an age property, 
//which becomes DataType, and the KeyType needs to extend from the Datatype, in this case the dogs array


//Example of Event Map
interface BaseEvent {
    time: number;
    user: string;
}


//here you're taking the BaseEvent type and adding it to the quantity productID object type
interface EventMap {
    addToCart: BaseEvent & {quantity: number; productID: string;}
    checkout: BaseEvent
}

//sendEvent is checked, it has to be an event that is listed in the EventMap, and the data going into that event needs to match the API given in EventMap
function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void{
    console.log([name, data])
}

sendEvent("addToCart", {productID: "foo", quantity: 10, time: 12, user: "Illya"})
sendEvent("checkout",  {time: 20, user: "melt"})