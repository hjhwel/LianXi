let http=require("http");
let fs = require("fs");

http.createServer((req,res)=>{
  if(req.url =="/hjhlovewel"){
    res.end("wellovehjh")
  }
    fs.readFile("." + req.url,(err,data)=>{
      console.log(data);
      res.end(data)
    })
}).listen(8080)