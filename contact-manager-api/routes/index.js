var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.url);
  // res.render('index', { title: 'Express JS' });
  res.send(`<html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                    <title>NodeJS App</title>
                </head>
                <body>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/api/contacts'>Contacts</a></li>
                </ul>
                <h1>Welcome to Home page</h1>
                </body>
          </html>`);
});

// router.get('/about',function(req,res,next){
//   console.log(req.url);
//   res.send(`<html>
//                 <head>
//                     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
//                     <title>NodeJS App</title>
//                 </head>
//                 <body>
//                 <ul>
//                     <li><a href='/'>Home</a></li>
//                     <li><a href='/about'>About</a></li>
//                 </ul>
//                 <h1>Welcome to About page</h1>
//                 </body>
// </html>`);
// });


module.exports = router;
