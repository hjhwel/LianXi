// 模块一
let md2 = require("./md2.js")
let md1Var = 'HJH';

let md1Fun = () => {
    console.log(md1Var + "love" + md2.str);
}

// 在模块中定义的变量或者函数是不能直接被别的文件拿到的，必须通过exports 进行暴露

exports.md1Var = md1Var;
exports.md1Fun = md1Fun;