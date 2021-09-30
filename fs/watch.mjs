import fs from "fs";

const path = "./fs/test.txt";

fs.watch(path, (event, file) => {
  // event = 'rename' | 'change';

  console.log("File has been modified");
  console.log({ event, file });
});
