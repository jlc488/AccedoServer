'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:7878',
  SESSION_SECRET:   'accedoserver-secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
