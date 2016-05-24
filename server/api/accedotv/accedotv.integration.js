'use strict';

var app = require('../..');
var request = require('supertest');

var newThing;

describe('History API:', function() {

  describe('GET /v1/history', function() {
    var things;

    beforeEach(function(done) {
      request(app)
        .get('/v1/history')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          things = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      things.should.be.instanceOf(Array);
    });

  });

  describe('POST /v1/history', function() {
    beforeEach(function(done) {
      request(app)
        .post('/v1/history')
        .send({
          name: 'History Tracking',
          info: 'Tracking record is done saving!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newThing = res.body;
          done();
        });
    });

    it('should respond with the newly created history', function() {
      newThing.name.should.equal('History Tracking');
      newThing.info.should.equal('Tracking record is done saving!!');
    });

  });
  });
