const http = require("http");

const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding("utf-8");

  let rawData = "";
  response.on("data", (chunk => {
    rawData += chunk;
  }));
  response.on("error", console.error);
  response.on("end", () => {
    console.log(rawData.length);
    console.log(rawData);
  });
}).on("error", (err) => {
  console.error(err);
});
