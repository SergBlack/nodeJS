import http from "http";

const users = {
  1: { name: "Ivan Ivanovich", city: "Peter", age: 21 }
};

const admins = {
  1: { name: "Alex Alexovich", city: "Moscow", born: 25 }
};

const routing = {
  "/api/user": id => users[id],
  "/api/admin": id => admins[id]
};

http.createServer((request, response) => {
  const url = request.url.split("/");
  const params = url.pop();
  const method = routing[url.join("/")];
  const result = method ? method(params) : { error: "not found" };
  /* {
    url: [ '', 'api', 'user' ],
    params: '1',
    method: [Function: /api/user],
    result: { name: 'Ivan Ivanovich', city: 'Peter', age: 21 }
  }
  {
    url: [ '', 'api', 'admin' ],
    params: '1',
    method: [Function: /api/admin],
    result: { name: 'Alex Alexovich', city: 'Moscow', born: 25 }
  } */

  response.end(JSON.stringify(result));
}).listen(3003);
