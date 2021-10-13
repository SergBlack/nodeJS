import http from "http";

const ajax = (base, methods) => {
  const api = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const method of methods) {
    api[method] = (...args) => {
      const callback = args.pop();
      const url = `${base}${method}/${args.join("/")}`;
      console.log(url);

      http.get(url, res => {
        if (res.statusCode !== 200) {
          callback(`Status Code: ${res.statusCode}. Status Message: ${res.statusMessage}`);

          return;
        }

        let rawData = "";
        res.on("data", chunk => { rawData += chunk; });
        res.on("end", () => callback(null, rawData));
      });
    };
  }

  return api;
};

const api = ajax("http://localhost:3003/api/", ["user", "admin"]);

api.user("1", (err, data) => {
  if (err) throw err;
  console.log({ data });
});

api.admin("1", (err, data) => {
  if (err) throw err;
  console.log({ data });
});

// http://localhost:3003/api/user/1
// http://localhost:3003/api/admin/1
// { data: '{"name":"Ivan Ivanovich","city":"Peter","age":21}' }
// { data: '{"name":"Alex Alexovich","city":"Moscow","born":25}' }
