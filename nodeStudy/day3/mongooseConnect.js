// 引入mongoose模块
const mongoose = require("mongoose");
// 连接数据库
mongoose.connect("mongodb://localhost/it_666", {
    useNewUrlParser: true
})

// 监听连接状态
const db = mongoose.connection;
db.on('error', () => {
    console.log("连接失败");
});
db.once('open', () => {
    console.log("连接成功");
});
db.once('close', () => {
    console.log("连接关闭");
});