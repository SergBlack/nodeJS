const buffer = Buffer.alloc(1024);

console.log({ isBuffer: Buffer.isBuffer(buffer) });
console.log(buffer);

const unsafeBuffer = Buffer.allocUnsafe(1024);
console.log({ isBuffer: Buffer.isBuffer(unsafeBuffer) });
console.log(unsafeBuffer);
