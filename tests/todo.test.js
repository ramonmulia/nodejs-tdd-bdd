"use strict";

var should = require('chai').should(),
    Todo = require('../models/todo');

describe("models test todo", () => {

    let body = {
        details: 'Hello body'
    },
        todo = new Todo(body);

    it('should be have in Todo, descricao, date e status', ()=> {
        todo.should.be.a('object');
        todo.should.have.property('details');
        todo.should.have.property('initialDate');
        todo.should.have.property('isDone');
    });

    it('details is required and isDode is false', () => {
        todo.details.should.be.a('String');
        todo.isDone.should.be.false;
    });


});
