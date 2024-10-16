// Map Filter Reduce
let arr=[1,2,3,4,5];
// let newArr=arr.map((item)=>item*2);
// console.log(newArr);

// let evenArr=arr.filter((item)=>item%2==0);
// console.log(evenArr);

let sum=arr.reduce((acc,item)=>acc+item,0);

let evenSum = arr.filter((item) => item % 2 === 0).reduce((acc, item) => acc + item, 0);
console.log(evenSum);