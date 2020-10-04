// array

let arr = [];
console.log(typeof arr);

let detailsArr = [1, 'arvind', 29];
let numArr = [1, 2, 3, 4, 5];

for (let i = 0; i < numArr.length; i++) {
  console.log(`arr index ${i} and value ${numArr[i]}`);
}

// console.log('i val', i); // error bcoz i is let

numArr.forEach((val, index) => {
  console.log(`arr index ${index} and value ${val}`);
});

numArr.forEach(val => {
  console.log(`value ${val}`);
});

// get all odd nums from arr


let oddArr = [];

numArr.forEach(val => {
  if (val % 2 !== 0)
    oddArr.push(val);
});

console.log(oddArr);

// array.map -> returns a new array with same num of elems

arr = [1, 2, 3];

let twoTimesArr = arr.map(value => value * 2);
console.log(twoTimesArr)

// arr.filter -> can return less no of elems

// let oddNumArr = arr.filter((value) => {
//   if (value % 2 === 0) {
//     return false;
//   } else
//     return true;
// });

let oddNumArr = arr.filter(value => value % 2);
console.log(oddNumArr);

let greaterThan2 = arr.filter(value => value > 2);
console.log(greaterThan2);

console.log(arr.includes(100));
console.log(arr.indexOf(100));
