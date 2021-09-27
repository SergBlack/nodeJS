import fs from "fs";

const { promises } = fs;
const path = "./fs/test.txt";

promises.readFile(path, "utf-8")
  .then((fileContent) => console.log(fileContent))
  .catch((err) => console.error(err));

console.log("Reading file...");

const read = async () => {
  const fileContent = await promises.readFile(path, "utf-8");
  console.log("Reading file with read()...");

  return fileContent;
};

read()
  .then((fileContent) => console.log(fileContent))
  .catch((err) => console.error(err));
