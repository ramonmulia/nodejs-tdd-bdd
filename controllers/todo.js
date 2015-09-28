"use strict";

let model = require('../models/todo'),
    parse = require('co-body');

module.exports = {
    create: function* create() {

        let body = yield parse(this),
            todoCreate = yield model.create(body);

        if(todoCreate){
            this.status = 200;
            this.body = todoCreate
        }
        else{
            this.status = 404;
        }
    }
}

