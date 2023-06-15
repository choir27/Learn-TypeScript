// type MyFlexibleDogInfo = {
//     name: string;
// } & Record<string, string>;

type MyFlexibleDogInfo = {
    name: string
    [key:string]: string | number;
}

const dog: MyFlexibleDogInfo ={
    name: "Illya",
    breed: "Magical Girl",
    age: 18,
    18: 122
}

interface DogInfo {
    name: string;
    age: number;
}

type OptionsFlags<Type> = {
    [Property in keyof Type]: string;
}

//changes all the value types of DogInfo to boolean type (established with the code above, where if [Property in keyof Type]: string, they would all be string)
type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<Type> = {
    [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (newValue: Type[Property]) => void;
} &  {
    [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: () => void;
}


function listenToObject<T>(obj: T, listeners: Listeners<T>): void{
    throw "Needs to be implemented";
}

const lg:DogInfo = {
    name: "Illya",
    age: 18
}

type DogInfoListeners = Listeners<DogInfo>

listenToObject(lg, {
    onNameChange: (v: string) => {},
    onAgeChange: (v: number) => {},
    onAgeDelete: () => {},
})