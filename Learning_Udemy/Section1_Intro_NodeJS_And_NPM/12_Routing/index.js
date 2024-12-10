const http = require('http');
const url = require('url'); 

const server = http.createServer((req, res) =>{
    const path = req.url; 

    switch (path){
        case '/overview':
        case '/': res.end('this is overview'); break;
        case '/product': res.end('this is product'); break;
        default : res.writeHead(404,{
                'Content-type' : 'text/html',
                'my-own-header' : 'hello-word'
            }
        );
        res.end('<h1>Page not found</h1>');
        break;
    } 
    // res.end('hello server'); // ! it's "ERR_STREAM_WRITE_AFTER_END"
});

server.listen(8001, '127.0.0.1', ()=>{
    console.log('listening req on port 8001');
});