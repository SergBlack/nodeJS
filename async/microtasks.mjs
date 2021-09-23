Promise.resolve().then(() => console.log("promise1 resolved"));
Promise.resolve().then(() => console.log("promise2 resolved"));
Promise.resolve().then(() => {
  console.log("promise3 resolved");
  process.nextTick(() => console.log("nexttick inside promise resolve handler"));
});
Promise.resolve().then(() => console.log("promise3 resolved"));
Promise.resolve().then(() => console.log("promise4 resolved"));

setImmediate(() => console.log("setImmediate1"));
setImmediate(() => console.log("setImmediate2"));

process.nextTick(() => console.log("nextTick1"));
process.nextTick(() => console.log("nextTick2"));
process.nextTick(() => console.log("nextTick3"));

setTimeout(() => console.log("setTimeout"), 0);

setImmediate(() => console.log("setImmediate3"));
setImmediate(() => console.log("setImmediate4"));

/*
promise1 resolved
promise2 resolved
promise3 resolved
promise3 resolved
promise4 resolved
nextTick1
nextTick2
nextTick3
nexttick inside promise resolve handler
setImmediate1
setImmediate2
setImmediate3
setImmediate4
setTimeout
*/
