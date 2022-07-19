const EventEmmiter = require("events");

const emitter = new EventEmmiter();

emitter.on("response", () => {
  console.log(`data recieved`);
});

emitter.emit("response");
