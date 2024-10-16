// const express = require("express");
// const app = express();

// app.use(express.static('view'));

// const path =require('path')

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'view',"index.html"));
// });

// app.get('/contact', (req, res) => {
//     res.send('<h1>Contact</h1>');
// });

// app.get('*', (req, res) => {
//     res.status(404).send('<h1>404</h1>');
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//second
// var express = require('express');  
// var app = express();  
// app.use(express.static('public'));  
  
// app.get('/index.html', function (req, res) {  
//    res.sendFile( __dirname + "/" + "index.html" );  
// })  
// app.get('/process_get', function (req, res) {  
// response = {  
//        first_name:req.query.first_name,  
//        last_name:req.query.last_name  
//    };  
//    console.log(response);  
//    res.end(JSON.stringify(response));  
// })  
// var server = app.listen(8000, function () {  
  
//   var host = server.address().address  
//   var port = server.address().port  
//   console.log("Example app listening at http://%s:%s", host, port)  
  
// })  

// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number
const port = 3000;

// Route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Route for /about path
app.get('/about', (req, res) => {
  res.send('This is the About Page!');
});

// Route for /users path
app.get('/users', (req, res) => {
  res.send('User List');
});

// Route for /users/:id path with URL parameter
app.get('/users/:id', (req, res) => {
  const userId = req.params.id; // Access the URL parameter
  res.send(`User ID: ${userId}`);
});

// Route for /products path
app.get('/products', (req, res) => {
  res.send('Product List');
});

// Route for /products/:productId path
app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId; // Access the URL parameter
  res.send(`Product ID: ${productId}`);
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
