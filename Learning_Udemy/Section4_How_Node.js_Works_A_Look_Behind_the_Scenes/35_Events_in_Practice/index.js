const EventEmitter = require("events");

var myEmitter = new EventEmitter;

// Example 1
// myEmitter.on("newSale", ()=>{
//     console.log("There was a new Sale!");
// });
// myEmitter.on("newSale", () => {
//     console.log("My name is Khoi");
// })
// myEmitter.emit("newSale");

// Example 2
// myEmitter.on("newSale", ()=>{
//     console.log("There was a new Sale!");
// });
// myEmitter.on("newSale", () => {
//     console.log("My name is Khoi");
// });
// myEmitter.on("newSale", stock => {
//     console.log(`There are now ${stock} items left in stock`);
// });
// myEmitter.emit("newSale", 9);

// Example 3
// class Sales extends EventEmitter{
//     constructor(){
//         super();
//     }
// }
// var myEmitter = new Sales();
// myEmitter.on("newSale", ()=>{
//     console.log("There was a new Sale!");
// });
// myEmitter.on("newSale", () => {
//     console.log("My name is Khoi");
// });
// myEmitter.on("newSale", stock => {
//     console.log(`There are now ${stock} items left in stock`);
// });
// myEmitter.emit("newSale", 9);

// Example 4
const http = require("http");
const server = http.createServer();

server.on("request", (req, res)=>{
    console.log("Request received!");
    console.log(req.url);
    res.end("Request received");
})

server.on("close", ()=>{
    console.log("server closed");
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Waiting for requests...");
});