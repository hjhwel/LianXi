// buffer 缓存器 缓存node中的二进制数据
// 1 字符串转化为buffer二进制数据
let str = "hjhlove魏丽";
let buffer = Buffer.from(str);
console.log(buffer);
// 2 buffer转为字符串；
console.log(buffer.toString());

// 创建一个buffer
// buffer.alloc(size//规定buffer的大小，fill//默认填充的内容,不填默认0，encoding//编码方式)
let buffer2 = Buffer.alloc(10,"hjh");
// 可以按照数组方式操作
buffer2[6] = 20;
buffer2[2] = 52;
console.log(buffer2);
console.log(buffer2.toString());

buffer2.forEach((item,index)=>{
    console.log(item,index);
})
