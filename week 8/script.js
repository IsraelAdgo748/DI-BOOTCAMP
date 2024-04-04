let arr = [1,2,3,4,5]
arr.forEach((item,index)=> {
    console.log(`
    number is ${item}
    index is ${index}`);
    arr[index] = arr[index] * 2
})
console.log(arr);

const numbers = [10,11,12,15,20];

numbers.forEach((num, i) => {
    num % 2 == 0 ? console.log(num) : undefined
} )

let iFTrue = numbers.some((value, i) => {
    return (value < 13)
})

console.log(iFTrue);

const words = ["wow","hey","bye"];

let word = words.some((value) =>{
    value == 'h' ? console.log(value) : undefined
})

let ifStartH = words.some((value) => {
    return (value[0] == 'h')
})
console.log(ifStartH);

const words2 = ["hello","hey","hola"];

let ifStartH2 = words2.every((value) => {
    return (value[0] == 'h')
})
console.log(ifStartH2);




