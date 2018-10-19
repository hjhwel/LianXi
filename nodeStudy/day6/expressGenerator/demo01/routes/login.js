let express = require('express');
let router = express.Router();
let userModel = require("../config/mogodb")
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', {
        title: '登陆'
    });
});


router.post('/', function (req, res, next) {
    // 注册逻辑
    // 1. 通过reg.body 拿到post传的参数
    console.log(req.body);
    userModel.find({
        username: req.body.userName,
        password: req.body.loginPwd
    }, (err, datas) => {
        console.log(datas);
        console.log(datas.length);
        if (datas.length == 1) {
            res.redirect("/chat")
        } else {
            res.send("账号密码不正确")
        }
    })
});

module.exports = router;
