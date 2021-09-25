import EventEmitter from "events";

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const alert = () => console.log("event happened");

myEmitter.on("eventName", alert);
myEmitter.emit("eventName");
myEmitter.emit("eventName");
myEmitter.off("eventName", alert);
myEmitter.emit("eventName");
