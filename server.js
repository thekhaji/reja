const express = require("express");
const app = express();
const http = require('http');

// 1: Introduction codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// 2: Session code

// 3: Views code (backend server-side rendering) 
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code

app.get("/hello", function(req,res){
    res.end("<h1>HELLO WORLD by Andrew!</h1>");
});

app.get("/gift", function(req,res){
    res.end("<h1>You will recieve gifts soon by Andrew!</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running sufficiently on port ${PORT}`);
});