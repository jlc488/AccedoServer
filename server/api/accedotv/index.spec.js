'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var accedotvCtrlStub = {
  index: 'accedotvCtrl.index',
  create: 'accedotvCtrl.create',
};

var routerStub = {
  get: sinon.spy(),
  post: sinon.spy(),
};

// require the index with our stubbed out modules
var historyIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './accedotv.controller': accedotvCtrlStub
});

describe('History API Router:', function() {

  it('should return an express router instance', function() {
    historyIndex.should.equal(routerStub);
  });

  describe('GET /v1/history', function() {

    it('should route to accedotv.controller.index', function() {
      routerStub.get
        .withArgs('/', 'accedotvCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/history', function() {

    it('should route to accedotv.controller.create', function() {
      routerStub.post
        .withArgs('/', 'accedotvCtrl.create')
        .should.have.been.calledOnce;
    });

  });
  });
