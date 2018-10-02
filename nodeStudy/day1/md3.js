// 主要文件
// 想要使用彼得模块，要通过commonjs规范，使用require 进行引用,同级目录要加./  上级目录要加./../

let md1 = require("./md1.js");
let md2 = require("./md2.js");
let com = require("./computed.js");
console.log(md1.md1Var);
md1.md1Fun();
console.log(md2.str);

console.log(com.sum(1, 5, 63, 65));

console.log(com.avg(20, 20, 100, 20));

console.log(com);