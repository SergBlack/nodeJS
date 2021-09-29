import fs from "fs";

const files = ["fs/test.txt", "fs/unknown.txt"];

const stats = new Array(files.length);

const print = (data) => {
  console.log({ data });
};

const getStat = (file, i) => {
  console.log({ file, i });

  fs.lstat(file, (err, stat) => {
    if (err) {
      console.log(`File ${file} not found`);
    } else {
      stats[i] = stat;
    }

    print(stats);
  });
};

files.forEach(getStat);
