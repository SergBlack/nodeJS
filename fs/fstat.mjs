import fs from "fs";

const files = ["fs/test.txt", "fs/unknown.txt"];

const stats = new Array(files.length);
const count = files.length - 1;

const print = (data) => {
  console.log({ data });
};

const getStats = (file, i) => {
  console.log({ file, i });

  fs.lstat(file, (err, stat) => {
    if (err) {
      console.log(`File ${file} not found`);
    } else {
      stats[i] = stat;
    }

    if (i === count) {
      print(stats);
    }
  });
};

files.forEach(getStats);
