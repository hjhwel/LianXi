let express = require('express');
let router = express.Router();
let userModel = require("../config/mogodb")
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('register', {
        title: '注册'
    });
});

router.post('/', function (req, res, next) {
    // 注册逻辑
    // 1. 通过reg.body 拿到post传的参数
    console.log(req.body);
    userModel.find({
        username: req.body.userName
    }, (err, datas) => {
        if (!datas.length) {
            userModel.create({
                username: req.body.userName,
                password: req.body.loginPwd
            }, (err) => {
                if (err) {
                    console.log("插入失败");
                } else {
                    // 注册成功直接跳转到登录页
                    // 重定向方法
                    res.redirect("/login");
                }
            })
        } else {
            res.send("用户名重复")
        }
    })


});

module.exports = router;