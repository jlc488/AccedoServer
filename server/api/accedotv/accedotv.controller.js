/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /v1/history              ->  index
 * POST    /v1/history              ->  create

 */

'use strict';

var _ = require('lodash');
var HistoryModel = require('./accedotv.history.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(function(updated) {
        return updated;
      });
  };
}


// Gets a list of History
exports.index = function(req, res) {
  HistoryModel.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
};


// Creates a new HistoryModel in the DB
exports.create = function(req, res) {
  HistoryModel.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};
