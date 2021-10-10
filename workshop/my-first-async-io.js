const fs = require("fs");

const path = process.argv[2];

fs.readFile(path, "utf8", (err, content) => {
  if (err) {
    console.error(err);
  }

  const lines = content.split("\n").length - 1;
  console.log(lines);
});
