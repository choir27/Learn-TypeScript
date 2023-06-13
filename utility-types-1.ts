interface MyUser {
    name: string,
    id: number,
    email?: string,
    phone?: string,
    twitter?: string,
}

//instead of copying and pasting MyUser properties to MyUserOptionals everytime you want to add another property to MyUser like below
// interface MyUserOptionals {
//     name?: string,
//     id?: number,
//     email?: string
// }

//you can use the following utility type to make all the properties in the MyUserOptionals type optional
type MyUserOptionals = Partial<MyUser>

const merge = (user: MyUser, overrides: MyUserOptionals ): MyUser => {
    return{
        ...user,
        ...overrides
    }
}

console.log(merge({
    name: "Illya",
    email: "illya@gmail.com",
    id: 14
}, {email: "illya123@gmail.com"}))

//makes all properties of MyUser required
type RequiredMyUser = Required<MyUser>

//only makes a type consisting of required name and optional email
type JustEmailAndName = Pick<MyUser, "email" | "name">

type UserWithoutID = Omit<MyUser, "id">

//MyUser["id"] makes it so Record changes the input type to whatever type id is
const mapById = (users: MyUser[]): Record<MyUser["id"], Omit<MyUser, "id">> => {
    return users.reduce((a, v)=> {
        const {id, ...other} = v;

        return {
            ...a,
            [id]: other,
        }
    }, {})
}

console.log(mapById([
    {
        id: 1233,
        name: "test"
    },
    {
        id: 3213232,
        name: "what"
    }
]))