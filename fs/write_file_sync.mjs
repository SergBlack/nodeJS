import fs from "fs";

const fileData = "some text";

const filePath = "./fs/some_text.txt";
fs.writeFileSync(filePath, fileData, "utf8");

const newFileContent = fs.readFileSync(filePath);
console.log(newFileContent); // <Buffer 73 6f 6d 65 20 74 65 78 74>

const newFileContent2 = fs.readFileSync(filePath, "utf8");
console.log(newFileContent2); // some text

const buffer = Buffer.from([
  0x73, 0x6f, 0x6d, 0x65, 0x20, 0x74, 0x65, 0x78, 0x74
]);

const filePath2 = "./fs/some_text2.txt";
fs.writeFileSync(filePath2, buffer);

const newFileContent3 = fs.readFileSync(filePath2);
console.log(newFileContent3); // <Buffer 73 6f 6d 65 20 74 65 78 74>
console.log(newFileContent3.toString()); // some text

// const newFileContent3 = fs.readFileSync(filePath2, 'utf8'); // some text
