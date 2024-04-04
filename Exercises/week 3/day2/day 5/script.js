let numbers = [1,2,3,4,5]
let names = ['nadav', 'yaffa', 'israel']

// for (const number of numbers) {
//     console.log(number + 10);
// }

// for (const number of names) {
//     console.log();
// }

// for (const key of obj) {
//     console.log(key, '-', obj[key]);
// }

// for (let index = 0; index < names.length; index++) {
//     console.log(names[index]);
    
// }

let counter = 0 
// while (counter < names.length) {
//     counter++
//     console.log(counter);
// }

do {
    counter++
    console.log(counter);
}while (counter< names.length);

if (counter % 2 == 0){

}

for (let num = 0; num <=15; num++) {
    if (num % 2 == 0){
        console.log(num + 'is even');
    } else {
        console.log(num + 'is odd');
    }
    
}


let names2= ["john", "sarah", 23, "Rudolf",34]

for (let index = 0; index < names2.length; index++) {
    if (typeof names2[index] == 'string') {
      let nameItem = names2[index]  
      if (nameItem[0] === nameItem.toUpperCase()[0]){
        console.log(nameItem);
      }   
    
    }
    
}


function evenOdd(num, num2) {
    for (let index = 0; index <= num; index++) {
        if (index % num2 == 0) {
            console.log(index + 'is even');
        } else {
            console.log(index + 'is odd');
        }
        
    }
}
evenOdd(30, 2)
evenOdd(15, 3)
evenOdd(150, 7)
evenOdd(183, 10)


function FamilyAge(myAge) {
    const mumAge = myAge * 2;
    const dadAge = mumAge * 1.2;
    console.log("My mum's age is: " + mumAge);
    console.log("My dad's age is: " + dadAge);
}

FamilyAge(25);
