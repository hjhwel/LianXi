let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', {
        title: '登陆'
    });
});

module.exports = router;
