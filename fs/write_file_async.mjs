import fs from "fs";

const fileData = "some text";

const filePath = "./fs/some_text.txt";

fs.writeFile(filePath, fileData, "utf8", (err) => {
  if (err !== null) {
    return console.log(err);
  }

  return console.log("File has been changed");
});
