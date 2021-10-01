const buffer1 = Buffer.from([50, 51, 52, 53, 54, 55]);
const buffer2 = Buffer.from([56, 57, 58]);
const buffer3 = Buffer.alloc(10).fill("A");

const buffer = Buffer.concat([buffer1, buffer2, buffer3]);

console.log(buffer);
console.log(buffer.toString());
