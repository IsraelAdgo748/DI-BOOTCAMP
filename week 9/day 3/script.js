// const firstArr = [1, 4, 9, 16];

// const secondArr = firstArr.map((value, index, arr) => {
//     console.log(value); // each element
//     console.log(index); // each index
//     console.log(arr); // the firstArr (logged 4 times)
//     return value * index;
// });

// console.log(secondArr);


myArr = [10,20,30,40];

let newArr = myArr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
});

console.log(newArr);