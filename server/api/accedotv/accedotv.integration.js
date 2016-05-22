'use strict';

var app = require('../..');
var request = require('supertest');

var newThing;

describe('History API:', function() {

  describe('GET /api/history', function() {
    var things;

    beforeEach(function(done) {
      request(app)
        .get('/api/history')
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

  describe('POST /api/history', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/history')
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

  describe('GET /api/history/:id', function() {
    var thing;

    beforeEach(function(done) {
      request(app)
        .get('/api/history/' + newThing._id)

        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          thing = res.body;
          done();
        });
    });

    afterEach(function() {
      thing = {};
    });

    it('should respond with the requested thing', function() {
      thing.name.should.equal('New Thing');
      thing.info.should.equal('This is the brand new thing!!!');
    });

  });

  describe('PUT /api/history/:id', function() {
    var updatedThing

    beforeEach(function(done) {
      request(app)
        .put('/api/things/' + newThing._id)

        .send({
          name: 'Updated Thing',
          info: 'This is the updated thing!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedThing = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedThing = {};
    });

    it('should respond with the updated thing', function() {
      updatedThing.name.should.equal('Updated Thing');
      updatedThing.info.should.equal('This is the updated thing!!!');
    });

  });

  describe('DELETE /api/history/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/history/' + newThing._id)

        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when thing does not exist', function(done) {
      request(app)
        .delete('/api/history/' + newThing._id)

        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
