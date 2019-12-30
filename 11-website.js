const http = require('http');

function getTemplate(data) {

    return (
        `<html>
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <title>Trying NodeJS Http</title>
    </head>
    <body>
    <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/product'>product</a></li>
        <li><a href='/services'>services</a></li>
        <li><a href='/contacts'>contacts</a></li>
    </ul>
    <h1>Welcome to ${data} page</h1>
    </body>
</html>`
    )
};




http.createServer((req, res) => {
    console.log('Request is hitting the server');
    console.log(req.url);

    switch (req.url) {
        case '/':
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(getTemplate('Home'));
            break;
        case '/about':
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(getTemplate('About'));
            break;
        case '/product':
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(getTemplate('product'));
            break;
        case '/services':
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(getTemplate('services'));
            break;
        case '/contacts':
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(getTemplate('contacts'));
            break;
        
        default:
            res.write(`<h1>Route ${req.url} Not found</h1>`);
    }
    res.end();

}).listen(3000, (err) => {
    if (!err) {
        console.log('Server Started');
    }
});