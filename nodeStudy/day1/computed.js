/**
 * 求和
 * 求平均数
 */

exports.sum = (...nums) => {
    //  定义一个变量
    let result = 0;

    // 遍历传入的参数
    nums.forEach((num) => {
        result += num;
    })

    // 结果返回
    return result;
}

exports.avg = (...nums) => {
    //  定义一个变量
    let result = 0;

    // 遍历传入的参数
    nums.forEach((num) => {
        result += num;
    })

    // 结果返回
    return result / nums.length;
}