import fs from "fs";

const load = path => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log("\x1Bc");
    console.log(`Data length: ${data.length}`);
    console.log(data);
  });
};

const watch = path => {
  fs.watch(path, () => {
    load(path);
  });
};

const path = "./fs/test.txt";

load(path);
watch(path);
