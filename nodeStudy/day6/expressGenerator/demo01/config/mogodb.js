const mongoose = require('mongoose');
const config = require('../config/config');
const mongodb = require('../config/mogodb.js');

//  mongoose.Promise = global.Promise;//如果有promise的问题，可以用这个试试
mongoose.connect(config.mongodb); //连接mongodb数据库
// 实例化连接对象

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

// 定义模式
const Schema = mongoose.Schema;
let userSchemas = new Schema({
    username: String,
    password: String
})

// 创建model 对象
// 模型是根据Schema定义构造的奇妙构造函数。 一个模型的实例是一个文档。 Model是负责从底层MongoDB数据库。
// 第一个参数是模型的集合的单数名。Mongoose会自动寻找模型名字的复数版本。
let userModel = mongoose.model("userMessage", userSchemas);

module.exports = userModel;