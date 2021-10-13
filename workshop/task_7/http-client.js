const http = require("http");

const url = process.argv[2];

http.get(url, response => {
  response.setEncoding("utf-8");

  // response.on("data", (chunk => {
  //   console.log(chunk);
  // }));
  response.on("data", console.log);
  response.on("error", console.error);
}).on("error", (err) => {
  console.error(`Error: ${err.message}`);
});
