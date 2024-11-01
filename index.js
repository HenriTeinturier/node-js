function greet(name) {
  console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
  callback("Henri");
}

higherOrderFunction(greet);
