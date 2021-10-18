import io from "socket.io";
import Twitter from "node-tweet-stream";

io.listen(8080);

const tw = new Twitter({
  consumer_key: "",
  consumer_secret: "",
  token: "",
  token_secret: ""
});

tw.track("socket.io");
tw.track("javascript");
tw.stream.on("tweet", (tweet) => {
  io.emit("tweet", tweet);
});
