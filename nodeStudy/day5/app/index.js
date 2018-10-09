
var sub = require('./sub23');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello Wolrld</h1>';
app.appendChild(sub());
document.body.appendChild(app);