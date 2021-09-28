import fs from "fs";

const { promises } = fs;
const path = "./fs/test.txt";
const path2 = "./fs/test2.txt";
const path3 = "./fs/test3.txt";

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

// eslint-disable-next-line max-len
const readFile = (filename, encoding) => new Promise((res, rej) => fs.readFile(filename, encoding, (err, data) => {
  if (err) {
    rej(err);
  } else {
    res(data.toString());
  }
}));

readFile(path, "utf8")
  .then(data => {
    console.log(data);
    return readFile(path2, "utf8");
  })
  .then(data => {
    console.log(data);
    return readFile(path3, "utf8");
  })
  .then(data => {
    console.log(data);
  });
