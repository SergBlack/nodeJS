import fs from "fs";
import { promisify } from "util";

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

async function copyFile(oldFilePath, newFilePath) {
  try {
    const fileContent = await readFileAsync(oldFilePath);
    await writeFileAsync(newFilePath, fileContent);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

copyFile(process.argv[2], process.argv[3])
  .then(
    () => console.log("File was copied"),
    () => console.log("Error.File was NOT copied")
  );

// node ./async/asyncFunction.mjs ./async/timers.mjs ./async/timers_copy.mjs
