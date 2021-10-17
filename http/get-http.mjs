import http from "http";

const url = "http://jsonplaceholder.typicode.com/users";

http.get(url, (res) => {
  console.log(res.req._header);
  console.log(res.headers);

  if (res.statusCode !== 200) {
    console.log(`Status Code: ${res.statusCode}. Status Message: ${res.statusMessage}`);

    return;
  }

  console.log({ res });

  res.setEncoding("utf-8");
  let rawData = "";

  res.on("data", (chunk) => {
    rawData += chunk;
  });

  res.on("end", () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on("error", (e) => {
  console.error(`Got error: ${e.message}`);
});
