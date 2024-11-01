const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("order-pizza", ({ size, toppings }) => {
  console.log(`Pizza is ordered! Baking a ${size} pizza with ${toppings}`);
});

emitter.on("order-pizza", ({ size }) => {
  if (size === "large") {
    console.log("Serving complimentary drink");
  }
});

emitter.emit("order-pizza", {
  size: "large",
  toppings: "pepperoni, mushroom",
});
