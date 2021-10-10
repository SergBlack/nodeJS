const fs = require("fs");
// const path = require("path");

// eslint-disable-next-line no-unused-vars
const dirPath = process.argv[2];
const ext = `.${process.argv[3]}`;

fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error(err);
  }

  const filteredFiles = files.filter(file => file.includes(ext));

  // eslint-disable-next-line no-restricted-syntax
  for (const file of filteredFiles) {
    console.log(file);
  }

  // alternative
  // files.forEach((file) => {
  //   if (path.extname(file) === ext) {
  //     console.log(file);
  //   }
  // });
});
