"use strict";

let should = require('chai').should(),
    ch = require('charlatan'),
    request = require('superagent'),
    url = require('url');

const baseUrl = 'http://localhost:3000';

describe("routes todo testing", () => {

    let body = {
            details: ch.Name.name()
        };
    let id = null;

    it('should be create a todo', (done)=> {
        request
            .post(url.resolve(baseUrl, '/api/v1/todos'))
            .send(body)
            .end((err, res) => {
                res.body.details.should.be.exist;
                id = res.body._id;
                done();
            });
    });


    it('should be get all todos', (done)=> {
        request
            .get(url.resolve(baseUrl, '/api/v1/todos'))
            .end((err, res) => {
                res.body.should.be.a('array');
                done();
            });
    });

    it('should be get todos by id', (done)=> {
        request
            .get(url.resolve(baseUrl, '/api/v1/todos/'+id))
            .end((err, res) => {
                console.log(res.body);
                res.body.should.be.a('object');
                res.body._id.should.exist;
                done();
            });
    });
});
