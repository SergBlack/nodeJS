/* eslint-disable max-len */
import EventEmitter from "events";

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.setMaxListeners(5);
myEmitter.getMaxListeners(5);

const alert = () => console.log("event happened");
const sayHello = () => console.log("hello there");
const sayBye = () => console.log("bye bye");
const alert2 = () => console.log("event happened2");
const sayHello2 = () => console.log("hello there2");
const sayBye2 = () => console.log("bye bye2");

myEmitter.on("eventName", alert);
myEmitter.on("eventName", alert);
myEmitter.on("eventName", alert2);
myEmitter.on("eventName", alert2);
myEmitter.on("eventName", sayHello);
myEmitter.on("eventName", sayBye);
myEmitter.on("eventName", sayHello2);
myEmitter.on("eventName", sayBye2);
myEmitter.emit("eventName");

/*
event happened
event happened
event happened2
event happened2
hello there
bye bye
hello there2
bye bye2
(node:14600) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 6 eventName listeners added to [MyEmitter]. Use emitter.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)
*/
