type ThreeDCoordinate = [x: number, y: number, z: number];

type User = [name: string, email: string, userName: string];

function createUser(u1: User, u2: User):User{
    return[
        u1[0] + " " + u2[0],
        u1[1] + " " + u2[1],
        u1[2] + " " + u2[2],
    ]
}

console.log(createUser(["illya", "illya@gmail.com", "illya123"], ["melt", "melt@yahoo.com", "melt24"]))

function addThreeCoordinates(c1: ThreeDCoordinate, c2: ThreeDCoordinate):ThreeDCoordinate{
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2],
    ]
}

console.log(addThreeCoordinates([10,20,30], [10,20,30]))

function useState(initial:number): [()=>number, (v:number)=>void]{
    let num: number = initial
    return [
        ()=>num,
        (v:number)=>{
            num = v;
        }
    ]
}

function simpleStringState(initial: string): [()=>string, (v: string)=> void] {
    let str: string = initial
    return [
        ()=>str,
        (v:string)=>{
            str = v;
        }
    ]
}

const [str, setStr] = simpleStringState("hello");
console.log(str())
setStr("goodbye")
console.log(str())

const [firstName, setFirstName] = simpleStringState("shuten");
console.log(firstName())
setFirstName("Illya")
console.log(firstName())

const [age, setAge] = useState(12);
console.log(age());
setAge(24);
console.log(age());