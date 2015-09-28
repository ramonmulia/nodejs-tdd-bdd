"use strict";

var todoModel = () => {
    let mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        schema = null;

    schema = new Schema({
        details: {type: String, required: true, trin: true},
        initialDate: {type: Date, default: Date.now},
        isDone: {type: Boolean, default: false}
    });

    return mongoose.model('Todo', schema)
}

module.exports = todoModel();