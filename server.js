const express = require("express");
const app = express();
const http = require('http');
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err,data)=>{
    if(err){
        console.log("Error:", err);
    }
    else{
        user = JSON.parse(data);
    }
});

// 1: Introduction codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// 2: Session code

// 3: Views code (backend server-side rendering) 
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req,res)=>{
    console.log(req.body);
    res.json({test: "success"});
})
app.get("/", function(req,res){
    res.render('harid');
});

app.get("/author", function(req,res){
    res.render("author", { user: user });
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running sufficiently on port ${PORT}`);
});