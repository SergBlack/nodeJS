import EventEmitter from "events";

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on("eventName", (a, b) => {
  setImmediate(() => {
    console.log(`Values: a = ${a} and b = ${b}`);
    console.log("this happens asynchronously");
  });
});

myEmitter.on("eventName", (a, b) => {
  process.nextTick(() => {
    console.log(`Values: a = ${a} and b = ${b}`);
    console.log("this happens on tick");
  });
});

myEmitter.on("eventName", (a, b) => {
  console.log(`Values: a = ${a} and b = ${b}`);
  console.log("this happens synchronously");
});

myEmitter.emit("eventName", 42, 777);
