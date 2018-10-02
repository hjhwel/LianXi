// 1.node里面没有window对象；

// console.log(window); //会报错
// 1.1 node 里面的全局变量是global

// console.log(global); //不报错 输出一个对象

// 2. require 和 exports 是全局变量吗

// console.log(global.require); // undefined
// console.log(global.exports); // undefined

// 2.1 验证发现不是全局变量

// 2.2 正确的答案是 函数的参数
// 2.2.1 可以通过打印arguments 来判断我们是不是处于一个函数中
// console.log(arguments); // 没有报错 并打印了arguments的实参
// 2.2.2 验证可知我们就在一个函数中 , 我们可以通过 arguments.callee 来输出这个函数
// console.log(arguments.callee); // 输出function
// 我们可以将这个函数转换成字符串来看到函数的全貌
// console.log(arguments.callee + ""); // 输出结果如下所示

/*

整体是一个函数，exports and require 是函数的参数；

function (exports, require, module, __filename, __dirname) {

    函数内部就是我们写的全部内容

    // 1.node里面没有window对象；
    // console.log(window); //会报错
    // node 里面的全局变量是global

    // console.log(global); //不报错 输出一个对象

    // 2. require 和 exports 是全局变量吗

    // console.log(global.require); // undefined
    // console.log(global.exports); // undefined

    // 2.1 验证发现不是全局变量

    // 2.2 正确的答案是 函数的参数
    // 2.2.1 可以通过打印arguments 来判断我们是不是处于一个函数中
    // console.log(arguments); // 没有报错 并打印了arguments的实参
    // 2.2.2 验证可知我们就在一个函数中 , 我们可以通过 arguments.callee 来输出这个函数
    // console.log(arguments.callee); // 输出function
    // 我们可以将这个函数转换成字符串来看到函数的全貌
    console.log(arguments.callee + "");

    函数结尾
}

*/


// 3. exports, require, module, __filename, __dirname 参数解析

// 3.1 exports
// 是个对象，用于将函数内部的局部变量或者局部函数暴露到外部；
// console.log(exports); //{}

// 3.2 require
// 是个函数，用来引入外部的模块
// console.log(typeof require);//function

// 3.3 module 代表当前模块
// 是个对象，exports 就是他的一个属性
// 所以exports 和 module.exports 是一样的
// 但是exports 和 module.exports 是有区别的
// exports 只可以通过点语法 输出东西，不可以直接去赋值输出；
// module.exports 都可以；
// 因为我们真正用的其实是module.exports 这个对象只不过程序内部 通过 let exports = module.exports
// 将module.exports对象的地址赋给了变量exports;如果再次赋值，两者的联系就失效了；

// console.log(module); //对象
// console.log(module.exports === exports); // true

// 3.4 __filename //当前模块的绝对路径
// console.log(__filename);

// 3.5 __dirname 当前目录的绝对路径
// console.log(__dirname);