import net from "net";

const socket = new net.Socket();

const { bytesRead, bytesWritten } = socket;

const send = message => {
  console.log(`Client > ${message}`);
  socket.write(message);
};

socket.on("data", data => {
  console.log(`Server > ${data.toString()}`);
});

socket.on("drain", () => {
  console.log("Event: drain");
});

socket.on("end", () => {
  console.log("Event: end");
  console.log({ bytesRead, bytesWritten });
});

socket.on("error", err => {
  console.log("Event: error", err);
});

socket.on("timeout", () => {
  console.log("Event: timeout");
});

// 2. send to server
socket.on("connect", () => {
  send("Text message #1");
  send("Text message #2");
  send("Text message #3");
});

// 1. create connect
socket.connect({
  port: 2000,
  host: "127.0.0.1"
});
