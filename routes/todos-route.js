"use strict";

const url = "/api/v1/todos/";
let ctrl = require('../controllers/todo'),
    koaRouter = require('koa-router')();

module.exports = koaRouter
    .post(url, ctrl.create)
    .get(url, ctrl.getAll)
    .get(url+':id', ctrl.getOne)
    .del(url+':id',ctrl.delete)
    .put(url+':id',ctrl.update);

