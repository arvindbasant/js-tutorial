
function printName(name) {
  console.log('name is %s', name);
  console.log(`name is ${name}`);
}

printName('arvind');

function addTwoNum(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNum(12, 23));

function printer(value) {
  console.log(`value: ${value}`);
}

function printerWithMessage(value) {
  console.log(`hello ${value}! welcome to js tutorial`);
}

// printGoodName is func that take another func as a param
function printGoodName(name, fn) {
  fn(name);
}

printGoodName('anurag', printer);
printGoodName('anurag', printerWithMessage);

// a function returns another function
function num1(a) {
  return function (b) {
    return a + b;
  }
}
let func1 = num1(10);
console.log(func1(20));


// arrow function

const namePrinter = function (name) {
  console.log(name);
};

const namePrinterArrow = name => console.log(name); // no need of args parenthesis and function block 
const sumTwo = (num1, num2) => num1 + num2; // no need of return keyword

const calProductDiscount = (price, disPercentage) => {
  const discount = price * disPercentage / 100;
  return price - discount;
};

namePrinterArrow('arvind');
console.log(sumTwo(21, 23));
console.log(calProductDiscount(100, 10));
