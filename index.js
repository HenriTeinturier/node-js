function greet(name) {
  console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
  callback("Henri");
}

higherOrderFunction(greet);

let numbers = [1, 2, 3, 4, 5];

numbers.sort((a, b) => a - b);
numbers.filter((number) => number % 2 === 0);
numbers.map((number) => number * 2);
