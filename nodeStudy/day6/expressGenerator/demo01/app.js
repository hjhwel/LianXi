let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
// 引入路由文件
let indexRouter = require('./routes/index');
// 新配置路由
let loginRouter = require('./routes/login');
let regRouter = require('./routes/reg');
// 生成express实例
let app = express();

// view engine setup 设置视图引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// 使用包
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 让用户访问到路由
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/reg', regRouter);

// catch 404 and forward to error handler  生成404
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler 错误处理机制
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// 对外暴露app
module.exports = app;
