const net = require("net");

const PORT = Number(process.argv[2]) || 3000;
const server = net.createServer();

const zeroFill = i => i < 10 ? `0${i}` : i;

const now = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = zeroFill(date.getMonth() + 1);
  const day = zeroFill(date.getDate());
  const hours = zeroFill(date.getHours());
  const minutes = zeroFill(date.getMinutes());

  return `${year}-${month}-${day} ${hours}:${minutes}\n`;
};

server.on("connection", socket => {
  // socket.end(now());
  // OR
  socket.write(now());
  socket.end();
});

server.on("error", err => {
  console.log(`Server error: ${err}`);
});

server.listen(PORT);
