'use strict';

var Match = require('../src/Match').Match;

describe('Match', function() {
  
  it('can create a new tennis match', function() {
    var match = new Match();
    expect(match).toBeDefined();
  });
  
});