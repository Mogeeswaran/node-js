// using http module
const http = require('http');

// Creating a server
http.createServer((req, res) => {
    console.log('Request is hitting the server');
    // handle req
    console.log(req.url);
    if (req.url == '/') {
        console.log('Inside the home page req');
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h1>Home Page</h1>`);
        res.end();
    }
}).listen(3000, (err) => {
    if(!err){
    console.log('Server Started');
    }
});