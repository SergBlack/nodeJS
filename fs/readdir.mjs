import fs from "fs";

const printResult = (err, files) => {
  if (err) {
    console.error(err);
  } else {
    console.log(files);
  }
};

fs.readdir(".", printResult);
fs.readdir("..", printResult);
fs.readdir("./async", printResult);
