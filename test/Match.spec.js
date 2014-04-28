'use strict';

var Match = require('../src/Match').Match;

describe('When a tennis match starts', function() {
  
  var anonymousMatch;
  
  beforeEach(function() {
    anonymousMatch = new Match();
  });
  
  it('a match must have two players', function() {
    anonymousMatch.players.map(function(pj, i) {
      expect(anonymousMatch.players[i]).toBe(pj);
    });
  });
  
  it('both players have the same score at the beginning', function() {
    expect(anonymousMatch.players[0].score).toBe(anonymousMatch.players[1].score);
  });
  
  it('both anonymous players have different names', function() {
    expect(anonymousMatch.players[0].name).not.toBe(anonymousMatch.players[1].name);
  });
  
  it('score must be 0 or 15 or 30 or 40', function() {
    var allowedScores = [0, 15, 30, 40];
    expect(scores).toBe(allowedScores);
  });
  
});