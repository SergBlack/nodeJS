import fs from "fs";

const options = {
  encoding: "utf8",
  highWaterMark: 256 // max chunk size
};

const readStream = fs.createReadStream("data.json", options);

readStream.on("data", chunk => {
  console.log(chunk);

  readStream.pause();
  setTimeout(() => {
    readStream.resume();
  }, 2000);
});

readStream.on("end", () => {
  console.log("File was read successfully");
});

readStream.on("error", () => {
  console.error("File read error");
});
