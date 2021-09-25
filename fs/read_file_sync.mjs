import fs from "fs";

const fileContent = fs.readFileSync("./fs/test.txt");
console.log(fileContent); // <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64 21 21>
console.log(fileContent.toString()); // Hello world!!

const fileContent2 = fs.readFileSync("./fs/test.txt", "utf-8");
console.log(fileContent2); // Hello world!!
