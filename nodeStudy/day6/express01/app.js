// 引入express
let express = require("express");
// 实例化express
let app = express();

// 获取post参数需要引入
let bodyParser = require("body-parser");
// 必须用一下不然无效
app.use(bodyParser.json());

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

// 允许跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    next()
  })


// mysql 连接
// 引入mysql
let mysql = require("mysql");

// 配置mysql
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'daimei'
});

connection.connect();

connection.on('connect',()=>{
  console.log('连接成功');
})

// 请求数据
app.get("/search", (req, res) => {
  connection.query("select * from userinfo order by id DESC",(err,data)=>{
    res.send(data)
  })
})

app.post("/insert", (req, res) => {
  // console.log(req.body);
  let data = req.body;
  connection.query("INSERT INTO userinfo (name, age,sex,tel) VALUES ('"+data.name+"','"+data.age+"','"+data.sex+"','"+data.tel+"')",(err,rows)=>{
    console.log(rows);
    if(err == null){
      res.send(true)
    }else{
      res.send(false)
    }
  })
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

app.listen(9090)