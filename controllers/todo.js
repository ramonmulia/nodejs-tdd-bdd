"use strict";

let model = require('../models/todo'),
    parse = require('co-body');

module.exports = {
    create: function*() {

        let body = yield parse(this),
            todoCreate = yield model.create(body);
            console.log('heeeee');

        if (todoCreate) {
            this.status = 200;
            this.body = todoCreate
        }
        else {
            this.status = 404;
        }
    },
    getAll: function*() {
        let getTodo = yield model.find({}).exec();
        this.body = getTodo;
    },

    getOne: function* () {
        let getTodo = yield model.findOne({_id: this.params.id}).exec();
        this.body = getTodo;
    },

    delete: function*() {
        let getTodo = yield model.remove({_id: this.params.id}).exec();
        this.status = getTodo ? 204 : 404;
    },

    update: function* () {

        let body = yield parse(this),
            todoCreate = yield model.update({_id:this.params.id},body);
        
        if (todoCreate) {
            this.status = 202;
        }
        else {
            this.status = 404;
        }
    }
}

