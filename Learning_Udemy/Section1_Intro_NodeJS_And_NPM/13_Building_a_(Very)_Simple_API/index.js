const http = require('http');
const url = require('url'); 
const fs = require('fs');

const data = fs.readFileSync(`../../../Data_FullCourse_Udemy/1-node-farm/starter/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) =>{
    const path = req.url; 

    if (path === '/overview' || path === '/') {
        res.end('this is overview');
        return;
    }
    
    if (path === '/product') {
        res.end('this is product');
        return;
    }
    
    if(path === '/api'){
        // data = fs.readFile('../../../Data_FullCourse_Udemy/1-node-farm/starter/dev-data/data.json', 'utf-8', (err, data)=>{
        //     const productData = JSON.parse(data);
        //     console.log(productData);
        //     res.writeHead(200, {'Content-type': 'application/json'});
        //     res.end(data);
        // });
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data);
        return;
    }

    res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello-word',
    });
    res.end('<h1>Page not found</h1>');
});

server.listen(8001, '127.0.0.1', ()=>{
    console.log('listening req on port 8001');
});