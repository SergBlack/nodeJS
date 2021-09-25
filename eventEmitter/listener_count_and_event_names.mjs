import EventEmitter from "events";

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const eventName = "eventName";
const alert = () => console.log("event happened");

console.log(myEmitter.listenerCount(eventName)); // 0
console.log(myEmitter.eventNames()); // []

myEmitter.on(eventName, alert);
myEmitter.on(eventName, alert);

console.log(myEmitter.listenerCount(eventName)); // 2
console.log(myEmitter.eventNames()); // ['eventName']
