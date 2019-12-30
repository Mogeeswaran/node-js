// using http module
const http = require('http');

// Creating a server
http.createServer((req, res) => {
    console.log('Request is hitting the server');
    // handle req
    console.log(req.url);
    switch (req.url) {
        case '/':
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(`<html>
                             <head>
                                  <title>Trying NodeJS Http</title>
                             </head>
                             <body>
                                 <h1>Welcome to Home Page</h1>
                             </body>
                     </html>`);
            break;
        case '/about':
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(`<html>
                            <head>
                             <title>Trying NodeJS Http</title>
                             </head>
                             <body>
                                <h1>Learn more about us here</h1>
                             </body>
                        </html>`);
            break;
    }
    res.end();

}).listen(3000, (err) => {
    if (!err) {
        console.log('Server Started');
    }
});