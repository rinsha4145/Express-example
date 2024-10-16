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

var express = require('express');  
var app = express();  
app.use(express.static('public'));  
  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.get('/process_get', function (req, res) {  
response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
var server = app.listen(8000, function () {  
  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
  
})  