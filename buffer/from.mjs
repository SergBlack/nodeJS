const buffer1 = Buffer.from([1, 2, 3, 4, 5, 6]);

console.log(buffer1);

const buffer2 = Buffer.from("Marcus Aurelius (Марк Аврелий)");

console.log(buffer2.toString("hex"));
console.log(buffer2.toString("base64"));
console.log(buffer2.toString("utf8"));
console.log(buffer2.toString("binary"));
