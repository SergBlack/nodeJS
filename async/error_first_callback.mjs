import fs from "fs";

function copyFile(oldFilePath, newFilePath, cb) {
  fs.readFile(oldFilePath, (err, fileContent) => {
    if (err) {
      console.error(err);
      cb(err);
      return;
    }

    fs.writeFile(newFilePath, fileContent, (e) => {
      if (e) {
        console.error(e);
        cb(e);
        return;
      }

      cb(null);
    });
  });
}

copyFile(process.argv[2], process.argv[3], (err) => {
  if (err) {
    console.log("Error.File was not copied");
  } else {
    console.log("File was copied");
  }
});

// node ./async/error_first_callback.mjs ./async/timers.mjs ./async/timers_copy.mjs
