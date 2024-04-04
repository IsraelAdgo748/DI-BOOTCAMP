let five = 5
let x = 5
let b = 1<10

let a = [1,2,3,4, {age:25}, []];
let o = {
    age:25,
    list: [1 , 2 ,3,4,5],
    obj: {
        name: 'avi'
    }
};
o.age
console.log(o.obj.name);
console.log(o.list[4]);

x = 10

const adi = (num) => {
    num * 2
};

let num = 10

if (num<10) {
    console.log('num is smaller than 10');
} else if (num > 10){
    console.log('num is bigger than 10');
} else {
    console.log('num is equal to 10');
}


let num2 = 20

while (num2 > 10) {
    num2--
}


let numbers = [1,2,3,4,5]

for (const number of numbers) {
    console.log(`this number is ${number}`);
}


for (const key in o) {
    const element = o [key];

    console.log(`${key} is the kayWord for ${element}`);
}


for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    
}


function name(params) {
    
}

let people = [
    {name:'nadav', age:25, color:'red'},
    {name:'shoshi', age:12, color:'yellow'},
    {name:'odaya', age:25, color:'blue'},
]



const sentence = (name, age, color='blue') =>{
    let out = `hello i'm ${name}, i'm ${age} years old. my favorite color is ${color}`;
    return out
}

console.log(sentence('nadav', 25, 'red'));
console.log(sentence('shoshi', 12, 'yellow'));
console.log(sentence('odaya', 25,));

for (const person of people) {
    console.log(sentence(person.name, person.age, person.color));
    
}


const weather = (x) => {
    let y = x * 9 / 5 + 32
    return `${x} in celsius in equal to ${y} in fahrenheit`
}

console.log(weather(16));