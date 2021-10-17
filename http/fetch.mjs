import https from "https";

const fetch = url => new Promise(((resolve, reject) => {
  https.get(url, response => {
    if (response.statusCode !== 200) {
      reject(new Error(`Status Code: ${response.statusCode}. Status Message: ${response.statusMessage}`));
    }

    response.setEncoding("utf-8");

    let rawData = "";
    response.on("data", (chunk) => {
      rawData += chunk;
    });
    response.on("end", () => {
      resolve(rawData);
    });
  });
}));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
