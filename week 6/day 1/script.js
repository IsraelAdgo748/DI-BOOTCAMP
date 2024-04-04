// function sayHi(phrase, who) {
//     alert( phrase + ', ' + who );         //first way to make function
// }
                                        
// const sayhi = (phrase, who) => {           //another way to make function the arrow way
//     alert( phrase + ', ' + who );

// } 
// setTimeout(sayHi, 1000, "Hello", "John");

// setTimeout((phrase, who) => {
//     alert( phrase + ', ' + who );
// }, 1000, "Hello", "John");


// function EX(phrase) {
//     alert(phrase);         
// }
//setTimeout(EX, 5000, "The sales end in 10min ! ");

// let something = confirm('do you want to study in friday?')

// if (something) {
//     setTimeout((phrase) => {
//              alert( phrase);
//          }, 5000, "yes");              // function arrow way
// } else {
//     function saidNo() {
//         alert("no")
//     }                                 // normal function
//     setTimeout(saidNo, 5000)
// }


let counter = 0
setInterval(() => {
   console.log(counter);
   counter++ 
}, 3000);