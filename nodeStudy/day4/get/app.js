let http = require("http");
let url = require("url");
http.createServer((req, res) => {

  let data = url.parse(req.url, true).query;
  console.log(data);
  res.end(data.name);
}).listen(8080);