const http = require("http");

// eslint-disable-next-line no-unused-vars
const [exec, path, ...urls] = process.argv;

const httpGet = url => new Promise((resolve, reject) => {
  http.get(url, response => {
    response.setEncoding("utf-8");

    let data = "";

    response.on("data", chunk => {
      data += chunk;
    });
    response.on("error", reject);
    response.on("end", () => {
      resolve(data);
    });
  }).on("error", console.error);
});

Promise.all(urls.map(url => httpGet(url))).then(data => {
  data.forEach(item => console.log(item));
});
