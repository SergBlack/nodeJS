import EventEmitter from "events";

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
const myEmitter2 = new MyEmitter();

const sayHello = () => console.log("hello there");
const sayBye = () => console.log("bye bye");

// prependListener
myEmitter.on("eventName", sayHello);
myEmitter.on("eventName", sayHello);
myEmitter.prependListener("eventName", sayBye);

myEmitter.emit("eventName");
/*
bye bye
hello there
hello there
*/

// prependOnceListener
myEmitter2.on("eventName2", sayHello);
myEmitter2.on("eventName2", sayHello);
myEmitter2.prependOnceListener("eventName2", sayBye); // only once

myEmitter2.emit("eventName2");
myEmitter2.emit("eventName2");
/*
bye bye
hello there
hello there
hello there
hello there
*/
