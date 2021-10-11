import fs from "fs";
import https from "https";

const url = "https://jsonplaceholder.typicode.com/users";

https.get(url, (res) => {
  if (res.statusCode !== 200) {
    console.log(`Status Code: ${res.statusCode}. Status Message: ${res.statusMessage}`);

    return;
  }

  res.setEncoding("utf-8");
  let rawData = "";

  res.on("data", (chunk) => {
    rawData += chunk;
  });

  res.on("end", () => {
    fs.writeFile("./httpRequest/response.json", rawData, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File has been changed");
      }
    });
  });
}).on("error", (e) => {
  console.error(`Got error: ${e.message}`);
});
