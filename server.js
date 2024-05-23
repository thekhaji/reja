const http = require('http');
const mongodb = require("mongodb");

const connectionString = "mongodb+srv://thekhaji:N20IfRfqoxHIEdG2@cluster0.8avjbsb.mongodb.net/Reja?authSource=admin&replicaSet=atlas-13ore5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

mongodb.connect( connectionString, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    },
    (err,client)=>{
    if(err) console.log("Error");
    else{
        console.log("Success");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function(){
        console.log(`The server is running sufficiently on port ${PORT}, http://localhost:${PORT}`);
        });
    }
}
)

