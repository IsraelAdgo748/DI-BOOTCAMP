let num = 5
let string = 'word'
let real = true

console.log(num,string,real);

for (let i = 1; i < 6; i++) {
    console.log("i = " + i)
}

let colors = ['yellow', 'blue', 'red']
    for (let i=0; i<colors.length; i++) {
        console.log(colors[i]);
    }

// const obj = {name:'bob', age:20, pro:'Dr'}
// console.log(obj.age);

function drinking(obj) {
     obj = {name:'bob', age:20, pro:'Dr'}
    if (obj.age>18) {
        console.log(`${obj.name} its above the drinking age`);
    } else {
        console.log(`${obj.name} its not above the drinking age`);
  
    }
}
drinking()

// function calculateTax(amount, tax){
//     amount = 100
//     tax = amount * 8 / 100
//     let totally = amount + tax
//     console.log(totally+'$');
// }
// calculateTax()


function calculateTax(amount, tax) {
    let x=tax/100
    return amount *x
}
calculateTax(100, 8)
console.log(calculateTax(100, 8));

function doubleNumber(num) {
    return num*2
}


function squareAndDouble(num2) {
    let double=doubleNumber(num2)
     return double*double
}
console.log(squareAndDouble(2));


let but = document.getElementById('clickMe')
but.addEventListener('click',()=>{
console.log("Button clicked!");
})

function test(num, num2) {
    return num/num2
}
test(6,10)
console.log(test(6,10));



let MyName = document.getElementById('name4')
MyName.textContent ='israel'

//--------------------------------------------------

let title = document.getElementById('title')
