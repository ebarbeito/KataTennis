'use strict';

var Match = require('../src/Match').Match;

describe('Match', function() {
  
  it('can create a new tennis match', function() {
    var match = new Match();
    expect(match).toBeDefined();
  });
  
  it('a match must have players', function() {
    var match = new Match();
    expect(match.players).toBeDefined();
  });
  
});