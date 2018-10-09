let http = require("http")
let fs = require("fs");
http.createServer((req,res)=>{
  if(req.url == "/index.html"){
    fs.readFile("./asyncAjax.HTML",(err,data)=>{
      res.end(data);
    })
  }else{
    res.end(req.url)
  }

}).listen(8080)