/**
 * history model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var HistoryModel = require('./accedotv.history.model');
var AccedoTVEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AccedoTVEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  HistoryModel.HistorySchema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    AccedoTVEvents.emit(event + ':' + doc._id, doc);

    AccedoTVEvents.emit(event, doc);
  }
}

module.exports = AccedoTVEvents;
