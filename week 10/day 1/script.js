let obj = {
    arr: [1,2,3,4,5],
    car: {
        model: 'ford focus',
        color: 'gold'
    },
    func: ()=> {
        console.log('i am in an object');
    }
}
obj.func()

let {car: {model, color}, key} = obj
console.log(model, color, key);
                                 
// let thing = 'thing'

// console.log(object.keys(obj));
// console.log(object.value(obj));
// console.log(Object.entries(obj));

// for (const [key, value] of Object.entries(obj)){
//     console.log(`this is the key: ${key}, this is the value
//     ${value}`);
// }

let toBeObject = [['a', 'bob'], ['b', 40], ['c', true]]
let newObj = Object.fromEntries(toBeObject)
console.log(newObj);

// let {a: person, b: num, c: bool} = newObj
// let {key: varName} = nameOfObject
// console.log(Object.fromEntries(toBeObject));

let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}

let {name:personName, lastName: lname, age: johnAge,
friends:friendsArr} = myObj

let {name, lastName, age, friends} = myObj

// console.log(lastName);

function sayHey(name, lastName, age, friends){

}
sayHey(myObj)

// const keys = Object.keys(myObj).length;
// const values = Object.values(myObj).length;

// console.log(`Number of keys: ${keys}`);
// console.log(`Number of values: ${values}`);
