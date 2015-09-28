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

    it('should be create a todo', (done)=> {
        request
            .post(url.resolve(baseUrl, '/api/v1/todos'))
            .send(body)
            .end((err, res) => {
                res.body.details.should.be.exist;
                done();
            });
    });
});
