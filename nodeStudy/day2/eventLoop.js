/**
 * node.js 里的事件循环和浏览器是有区别的
 *
 * node.js
 * 1.先执行栈里的所有任务
 * 2.执行微观任务里的所有任务
 * 3.执行宏观任务里的所有任务，中间在产生的微观任务不会执行
 * 4.宏观任务执行完，执行中间产生的所有微观任务
 *
 * 浏览器
 * 1.先执行栈里的所有任务
 * 2.执行微观任务里的所有任务
 * 3.执行宏观任务里的排第一的任务，执行完毕后再去执行微观任务里的所有任务。
 * 4.不停的循环第三步，每次执行一个宏观任务，并执行所有的微观任务，一直到执行结束
 */
setTimeout(() => {
    console.log("宏观任务1");
    new Promise(function (resolved, reject) {
        resolved();
    }).then(function () {
        console.log("微观任务2");
    })
}, 0);

new Promise(function (resolved, reject) {
    console.log("立即执行任务1");
    resolved();
}).then(function () {
    console.log("微观任务1");
})

setTimeout(() => {
    console.log("宏观任务2");

    new Promise(function (resolved, reject) {
        resolved();
    }).then(function () {
        console.log("微观任务3");
    })
}, 0);

setTimeout(() => {
    console.log("宏观任务3");
}, 0);