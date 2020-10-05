let arr = [1, 'arvind', [1, 2], { name: 'anurag', age: 21 }, (a, b) => a + b];

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[0].length);
console.log(typeof arr[2]); // can't be sure if array
console.log(Array.isArray(arr[2])) // correct way to check if array


if (typeof arr[3] === 'object') {
  if (arr[3].hasOwnProperty('name')) {
    console.log(arr[3].name);
  }
}

if (typeof arr[4] === 'function') {
  console.log(arr[4](2, 3));
}

arr = ["b", "c", "d"];
console.log(arr.push("e"), arr); // returns 4; arr is now ["b", "c", "d", "e"]
arr.pop(); // returns "e"; arr is now ["b", "c", "d"]
arr.unshift("a"); // returns 4; arr is now ["a", "b", "c", "d"]
arr.shift(); // returns "a"; arr is now ["b", "c", "d"]

