"use strict";

let model = require('../models/todo'),
    parse = require('co-body');

module.exports = {
    create: function*() {

        let body = yield parse(this),
            todoCreate = yield model.create(body);

        if(todoCreate){
            this.status = 200;
            this.body = todoCreate
        }
        else{
            this.status = 404;
        }
    },
    getAll: function*(){
        let getTodo = yield model.find({}).exec();
        this.body = getTodo;
    },

    getOne: function* (){
        let getTodo = yield model.findOne({_id : this.params.id}).exec();
        this.body = getTodo;
    }
}

