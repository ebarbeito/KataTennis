'use strict';

var scores = require('../src/Score').scores;

describe('Score', function() {
  
  it('score must be 0 or 15 or 30 or 40', function() {
    var allowedScores = [0, 15, 30, 40];
    expect(scores).toEqual(allowedScores);
  });
  
});
