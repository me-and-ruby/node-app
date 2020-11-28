const express=require('express');
const route= express.Router();

//pages display  routes

//home page route
route.get("/", function(request, response) {
  response.render("index.ejs");
 });
 //about page  route
 route.get("/about", function(request, response) {
  response.render("about.ejs");
 });
 //contact page route
 route.get("/contact", function(request, response) {
  response.render("contact.ejs");
 });

 //post contact info
 route.post("/contact", function(request, response) {
  console.log("post request coming ......")
  if(request.body.name==undefined){
    response.end("Bad request")
    console.log("bad request")
  }else{
    console.log(request.body.name);
  }
  
  


 });

//  blog page route
 route.get("/blog", function(request, response) {
  response.render("blog.ejs");
 });

 module.exports=route;