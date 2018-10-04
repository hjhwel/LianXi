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

// 增加

// personModel.create([{
//         name: "何金昊2",
//         age: 48,
//         friend: {
//             name: "魏丽2",
//             age: 20,
//             friend: {
//                 name: "何金昊2"
//             }
//         }
//     },
//     {
//         name: "何金昊3",
//         age: 38,
//         friend: {
//             name: "魏丽3",
//             age: 20,
//             friend: {
//                 name: "何金昊3"
//             }
//         }
//     },
//     {
//         name: "何金昊4",
//         age: 28,
//         friend: {
//             name: "魏丽4",
//             age: 20,
//             friend: {
//                 name: "何金昊4"
//             }
//         }
//     }
// ], (err) => {
//     if (!err) {
//         console.log("增加成功");
//     }
// })

// 查询
// 1.查找所有的 通过异步回调返回结果，在回调函数里进行错误或者数据处理
// personModel.find({}, (err, datas) => {
//     console.log(datas);
// })

//2.查询单个字段
// personModel.find({}, {name:1},(err, datas) => {
//     console.log(datas);
// })

// 按条件查询
personModel.find({}, {
    name: 1
}, {
    skip: 1,
    limit: 1
}, (err, datas) => {
    if (err) return false;
    console.log(datas);
})

// 修改

// personModel.updateOne({
//     name: "何金昊2"
// }, {
//     $set: {
//         age: 8
//     }
// }, (err) => {
//     if (!err) {
//         console.log('修改成功');
//     }
// })

// 删除
// personModel.deleteOne({
//     name: "何金昊0.5"
// }, (err) => {
//     if (!err) {
//         console.log('删除成功');
//     }
// })

// 统计文档总数
personModel.countDocuments({}, (err, data) => {
    console.log(data + 4);
})