const fs = require("fs");
const path = require("path");

module.exports = function (dirPath, filter, callback) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return callback(err);
    }

    const filteredFiles = files.filter((file) => path.extname(file) === `.${filter}`);

    callback(null, filteredFiles);
  });
};
