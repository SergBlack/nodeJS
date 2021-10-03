import fs from "fs";

const changes = [];

const display = files => {
  console.log("\x1Bc");

  while (changes.length > 10) {
    changes.shift();
  }

  console.log("Changes:");

  // eslint-disable-next-line no-restricted-syntax
  for (const item of changes) {
    console.log(item.date.toISOString(), item.event, ":", item.file);
  }

  console.log("\nFiles:");

  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    console.log(file);
  }
};

const ls = path => {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.error(err);
      throw err;
    }

    display(files);
  });
};

const watch = path => {
  fs.watch(path, (event, file) => {
    console.log("\x1Bc");

    changes.push({ date: new Date(), event, file });
    ls(path);
  });
};

const path = "./async";
ls(path);
watch(path);
