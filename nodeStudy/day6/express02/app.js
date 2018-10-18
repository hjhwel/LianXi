// 引入express
let express = require("express");
// 实例化express
let app = express();

// 使用ejs模板引擎
// 1. 指定视图位置
app.set("views", "./views");
// 2. 注册模板引擎 engine 引擎
app.set("view engine", "ejs")

// 开启路由
app.get("/", (req, res) => {
  // 返回里面的render
  res.render("index", {
    obj: {
      "name": "hjh",
      "age": 18,
      "girlFriend": "wel"
    }
  })
})
app.listen(8080)