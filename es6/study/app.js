var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    if (req.url == "/app") {
        res.end("hjh");
    } else {
        fs.readFile("static" + req.url, function (err, data) {
            if (err) {
                console.log(err);
                return false;
            }
            res.end(data);
        })
    }
}).listen(8080)