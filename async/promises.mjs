import fs from "fs";
import { promisify } from "util";

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

function copyFile(oldFilePath, newFilePath) {
  return readFileAsync(oldFilePath)
    .then((fileContent) => writeFileAsync(newFilePath, fileContent))
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

copyFile(process.argv[2], process.argv[3])
  .then(
    () => console.log("File was copied"),
    () => console.log("Error.File was NOT copied")
  );

// Run
// node ./async/error_first_callback.mjs ./async/timers.mjs ./async/timers_copy.mjs

// =================================================================================================
// with using new Promise
function copyFile2(file, dest) {
  return new Promise(function (res, rej) {
    fs.copyFile(file, dest, (err, data) => {
      if (err) {
        return rej(err); // Reject the promise with err as a reason
      }

      return res(`File was copied! ${data ? `Data: ${data}` : ""}`); // Fullfills the promise with 'data' as the value
    });
  });
}

let promise = copyFile2("./async/timers.mjs", "./async/timers_copy2.mjs");
promise.then(console.log, console.error);

// Run
// node ./async/promises.mjs
