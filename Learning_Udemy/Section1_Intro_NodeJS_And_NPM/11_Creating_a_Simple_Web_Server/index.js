const http = require('http');

const server = http.createServer((req, res) =>{
    console.log('Server is started');
    res.end('hello server');
});

server.listen(8001, '127.0.0.1', ()=>{
    console.log('listening req on port 8001');
});