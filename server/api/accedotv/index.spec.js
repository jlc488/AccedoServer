'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var accedotvCtrlStub = {
  index: 'accedotvCtrl.index',
  show: 'accedotvCtrl.show',
  create: 'accedotvCtrl.create',
  update: 'accedotvCtrl.update',
  destroy: 'accedotvCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
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

  describe('GET /api/history', function() {

    it('should route to accedotv.controller.index', function() {
      routerStub.get
        .withArgs('/', 'accedotvCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/history/:id', function() {

    it('should route to accedotv.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'accedotvCtrl.show')
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

  describe('PUT /api/history/:id', function() {

    it('should route to accedotv.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'accedotvCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/history/:id', function() {

    it('should route to accedotv.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'accedotvCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/history/:id', function() {

    it('should route to accedotv.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'accedotvCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
