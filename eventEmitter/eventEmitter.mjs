import EventEmitter from "events";

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const alert = () => console.log("event happened");
const alert2 = () => console.log("event2 happened");

myEmitter.on("eventName1", alert);
myEmitter.emit("eventName1");
myEmitter.emit("eventName1");
myEmitter.emit("eventName1");

// event happened
// event happened
// event happened

myEmitter.once("eventName2", alert2);
myEmitter.emit("eventName2");
myEmitter.emit("eventName2");
myEmitter.emit("eventName2");

// event2 happened
