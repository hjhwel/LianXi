// 引入mongoose模块
const mongoose = require("mongoose");
// 连接数据库
mongoose.connect("mongodb://localhost/monTest", {
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

// 模式，用来初始化规定数据库集合里的字段类型
// Mongoose中一切开始于Schema。 每个schema映射着MongoDB的集合， 在集合中定义了文档的结构。
// 创建schemas 对象
const Schema = mongoose.Schema;
const Schemas = new Schema({
    name: String,
    age: Number,
    sex: {
        type: String,
        default: "男"
    },
    friend: Object,
})

// 创建model 对象
// 模型是根据Schema定义构造的奇妙构造函数。 一个模型的实例是一个文档。 Model是负责从底层MongoDB数据库。
// 第一个参数是模型的集合的单数名。Mongoose会自动寻找模型名字的复数版本。
let personModel = mongoose.model("person", Schemas);

// 插入文档
personModel.create({
    name: "何金昊",
    age: 18,
    friend: {
        name: "魏丽",
        age: 20,
        friend: {
            name: "何金昊"
        }
    }
}, (err) => {
    if (!err) {
        console.log("插入成功");
    } else {
        throw (err);
    }
})