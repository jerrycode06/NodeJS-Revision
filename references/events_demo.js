const eventEmitter = require("events");

//Create Class
class MyEmitter extends eventEmitter {}

//Init Object
const myEmitter = new MyEmitter();

//create event listener
myEmitter.on("event", () => console.log("Event Fired"));

//Init Event
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
