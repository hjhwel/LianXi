var formidable = require('formidable'),
  http = require('http'),
  util = require('util'),
  uuidv1 = require("uuid/v1"),
  path = require("path"),
  fs = require("fs");

http.createServer(function (req, res) {
  if (req.url == '/postMsg' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    // 实例化
    var form = new formidable.IncomingForm();
    // 临时存储路径
    form.uploadDir = "./uploads";
    // 处理结果
    form.parse(req, function (err, fields, files) {
      res.writeHead(200, {
        'content-type': 'text/plain'
      });
      res.write('received upload:\n\n');
      res.end(util.inspect({
        fields: fields,
        files: files,
        uuid: uuidv1()
      }));
      // 重命名
      let old_path = "./" + files.pic.path;
      let new_path = "./uploads/" + uuidv1() + path.extname(files.pic.name);

      fs.rename(old_path, new_path, (err) => {
        console.log("成功");
      })
    });

    return;
  }
}).listen(8080);