const http = require('http');
const url = require('url'); 
const fs = require('fs');

function replaceTemplate(temp, product){
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    if(!product.organic) output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;
}

const data = fs.readFileSync(`../../../Data_FullCourse_Udemy/1-node-farm/starter/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const templateOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const templateCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const templateProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');

const server = http.createServer((req, res) =>{
    const path = req.url; 

    if (path === '/overview' || path === '/') {
        res.writeHead(200, {'Content-type': 'text/html'});
        const cardsHTML = dataObj.map(el => replaceTemplate(templateCard, el)).join('');
        const output = templateOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHTML);
        res.end(output);
        return;
    }
    
    if (path === '/product') {
        res.end('this is product');
        return;
    }
    
    if(path === '/api'){
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