"use strict";

let should = require('chai').should(),
    ch = require('charlatan'),
    request = require('superagent'),
    url = require('url');

const baseUrl = 'http://localhost:3000';

describe("routes todo testing, test", () => {

    let body = {
        details: ch.Name.name()
    };
    let id = null;

    it('should be create todo', (done)=> {
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


    it('should update one todo by id', (done)=> {
        let body = {
            details: ch.Name.name()
        };

        request
            .put(url.resolve(baseUrl, '/api/v1/todos/' + id))
            .send(body)
            .end((err, res) => {
                res.status.should.be.equal(202);
                done();
            });
    });

    it('should be get todos by id', (done)=> {
        request
            .get(url.resolve(baseUrl, '/api/v1/todos/' + id))
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body._id.should.exist;
                done();
            });
    });

    it('should delete todos by id', (done)=> {
        request
            .del(url.resolve(baseUrl, '/api/v1/todos/' + id))
            .end((err, res) => {
                res.status.should.be.equal(204);
                done();
            });
    });


});
