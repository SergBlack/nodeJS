const fs = require("fs");

const path = process.argv[2];
const content = fs.readFileSync(path);
const lines = content.toString().split("/n").length - 1;

console.log(lines);
