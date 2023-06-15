//create no sql style simple in memory database

interface Database<T,K> {
    get(id: K): T;//given an id, returns a string
    set(id: K, value: T): void //given an id, sets that value and returns void
}

interface Persistable{
    saveToString(): string;
    restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

//3 visibility settings: private, where only this class can see it, protected, where this class and any of its decendents can see it/change it, and public, where it's a free-for-all

class InMemoryDatabase<T, K extends DBKeyType> implements Database<T,K> {
    protected db: Record<K, T> = {} as Record<K,T>;
    get(id: K): T{
        return this.db[id];
    }//given an id, returns a string
    set(id: K, value: T): void{
        this.db[id] = value;
    } //given an id, sets that value and returns void
}

class PersistentMemoryDB<T,K extends DBKeyType> extends InMemoryDatabase<T,K> implements Persistable {
    saveToString(): string{
        return JSON.stringify(this.db);
    }//JSON.stringify changes JS obj to JSON string, ie. JSON.stringify({ x: 5, y: 6 }) changes to "{"x":5,"y":6}"

    restoreFromString(storedState: string): void{
        this.db = JSON.parse(storedState);
    }//takes a string describing object and constructs JS object/value
}

const myDB = new PersistentMemoryDB<number, string>();
myDB.set("foo",22);
// myDB.db["foo"] = "baz"; same thing as the line of code above, but should not do to overwrite values of db, once changing the visibility to private, this is inable to run
console.log(myDB.get("foo"));
const saved = myDB.saveToString();  
myDB.set("foo",1); 

console.log(myDB.get('foo'));


const myDB2 = new PersistentMemoryDB<number, string>();
myDB2.restoreFromString(saved);
console.log(myDB2.get("foo"));