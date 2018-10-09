let http = require("http")
let fs = require("fs");
http.createServer((req,res)=>{
  if(req.url == "/index.html"){
    fs.readFile("./promiseAjax.html",(err,data)=>{
      res.end(data);
    })
  }else{
    res.end(req.url)
  }

}).listen(8080)