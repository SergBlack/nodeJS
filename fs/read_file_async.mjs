import fs from "fs";

fs.readFile("./fs/test.txt", "utf8", (err, fileContent) => {
  if (err !== null) {
    return console.log(err);
  }
  return console.log(fileContent);
});

console.log("Reading file...");
