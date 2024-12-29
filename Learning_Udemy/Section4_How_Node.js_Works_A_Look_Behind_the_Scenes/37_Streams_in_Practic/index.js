const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request", (req, res)=>{
    // Solution 1
    // fs.readFile("../test-file.txt", (err, data)=>{
    //     if(err) console.log(err);
    //     res.end(data);
    // });

    // Solution 2: Stream
    // const readable = fs.createReadStream('../tesssssssssst-file.txt');
    // readable.on('data', chuck => {
    //     res.write(chuck);
    // });
    // readable.on('end', () => {
    //     res.end();
    // });
    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File not found');
    // });

    // Solution 3: 
    const readable = fs.createReadStream("../test-file.txt");
    readable.pipe(res);
    // readableSource.pipe(writeableDest);
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Waiting for requests...");
});