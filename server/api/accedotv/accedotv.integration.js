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

      var tmp = {
                  'title': '22 Jump Street',
                  'description': 'After making their way through high school (twice), big changes are in store for officers Schmidt and Jenko when they go deep undercover at a local college.',
                  'type': 'movie',
                  'publishedDate': 1402012800000,
                  'availableDate': 1402012800000,
                  'metadata': [
                  {
                  'value': 'en',
                  'name': 'language'
                  }
                  ],
                  'contents': [
                  {
                  'url': 'http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4',
                  'format': 'mp4',
                  'width': 640,
                  'height': 360,
                  'language': 'en',
                  'duration': 9000000,
                  'geoLock': false,
                  'id': 'vid_102'
                  }
                  ],
                  'credits': [
                  {
                  'role': 'Director',
                  'name': 'Phil Lord, Christopher Miller'
                  },
                  {
                  'role': 'Channing Tatum',
                  'name': 'Channing Tatum'
                  },
                  {
                  'role': 'Jonah Hill',
                  'name': 'Jonah Hill'
                  },
                  {
                  'role': 'Ice Cube',
                  'name': 'Ice Cube'
                  }
                  ],
                  'parentalRatings': [
                  {
                  'scheme': 'MPAA',
                  'rating': 'R'
                  }
                  ],
                  'images': [
                  {
                  'type': 'cover',
                  'url': 'http://lorempixel.com/214/317/?t=5',
                  'width': 214,
                  'height': 317,
                  'id': '549cdb6bbb45b6eef0f52ff03fd7d545'
                  }
                  ],
                  'categories': [
                  {
                  'title': 'Action',
                  'description': 'Action movies',
                  'id': 'movies-action'
                  },
                  {
                  'title': 'Comedy',
                  'description': 'Comedy movies',
                  'id': 'movies-comedy'
                  },
                  {
                  'title': 'Crime',
                  'description': 'Crime movies',
                  'id': 'movies-crime'
                  }
                  ],
                  'id': '22-jump-street'
                };

      request(app)
        .post('/v1/history')
        .send(tmp)
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
