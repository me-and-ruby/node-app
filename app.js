var express = require("express");
var path = require("path");
var http = require("http");
var bodyParser=require('body-parser')

var route=require('./routes/route.js');

//create app
var app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use('/', route);

const PORT= process.env.PORT;

//middleware called only when no page available
app.use(function(request, response,next) {
 response.statusCode = 404;
 response.render("404.ejs");
 next();
});

app.use(function(request, response,next) {
   console.log("A requrest has come from......"+request.method)
   next();
 });

app.listen(PORT,function(){
  console.log('App listening on port 3000...'+ PORT)
});