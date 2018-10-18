// 引入express
let express = require("express");
// 实例化express
let app = express();

// 1.路由配置
app.get("/index.html", (req, res) => {
  res.send("hjhlovewel")
})

app.get("/", (req, res) => {
  // send 只能用一次，不能和别的一起
  res.write("hjh")
  res.write("-love-")
  res.write("wel")
  res.end("hjhlovewel123")
  // 用send 会报错
  // res.send("err")
})

// 接收传入的参数
app.get("/cs/:name/:age", (req, res) => {
  // 点语法或者下标都可以
  console.log(req.params.name);
  console.log(req.params["name"]);
  console.log(req.params["age"]);
  res.send("hjhlovewel1314")
})

// 静态文件托管
// 访问的时候不用加静态文件目录
// 第一个参数不填，根目录直接进入静态库
app.use("/test",express.static("./hjh"))
// 可以托管多个
app.use("/test2",express.static("./wel"))

app.listen(8080)