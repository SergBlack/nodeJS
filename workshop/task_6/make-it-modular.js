const filteredLs = require("./mymodule");

const dirPath = process.argv[2];
const filter = process.argv[3];

filteredLs(dirPath, filter, (err, files = []) => {
  if (err) {
    console.error(`Error: ${err}!`);
  }

  files.forEach((file) => console.log(file));
});
