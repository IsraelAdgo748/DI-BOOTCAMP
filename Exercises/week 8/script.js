// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// funcOne()

// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// funcThree()
// funcTwo()
// funcThree()

// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// #4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?

// Exercise 2 : Ternary Operator

// let winBattle = () => true; 

// let experiencePoints = winBattle() ? 10 : 1; 

// console.log(experiencePoints); 

// 🌟 Exercise 3 : Is It A String ?

// let words = (value) => typeof value === 'string';

// console.log(words('hello')); 
// console.log(words([1, 2, 4, 0])); 

// 🌟 Exercise 4 : Colors

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, index) => {
//     console.log(`${index + 1} choice is ${color}`);
// });

// if (colors.includes("Violet")) {
//     console.log("Yeah");
// } else {
//     console.log("No");
// }

// 🌟 Exercise 5 : Colors #2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// colors.forEach((color, index) =>{
//     const word = index < 3 ? ordinal[index + 1] : ordinal[0];
//     console.log(`${index + 1} ${word} choice is ${color}`);
// })


