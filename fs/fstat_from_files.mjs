import fs from "fs";

const files = ["fs/test.txt", "fs/unknown.txt"];

const stats = new Array(files.length);
const count = files.length - 1;

const print = (data) => {
  console.log({ data });
};

const addToStats = (file, i, err, stat) => { // file, i из частичного применения
  if (err) {
    console.log(`File ${file} not found`);
  } else {
    stats[i] = stat;
  }

  if (i === count) {
    print(stats);
  }
};

const getStats = (file, i) => {
  console.log({ file, i });
  const cb = addToStats.bind(null, file, i); // частичное применение

  fs.lstat(file, cb);
};

files.forEach(getStats);
