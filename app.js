"use strict"
let koa = require('koa'),
    router = require('koa-router')(),
    app = koa(),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo');

console.log('test...')

app.use(require('./routes/todos-route').routes())

app.listen(3000);
