'use strict';

var Match = require('../src/Match').Match;

describe('When a tennis match starts', function() {
  
  var anonymousMatch;
  var match;
  
  beforeEach(function() {
    anonymousMatch = new Match();
    match = new Match('Nadal', 'Pete Sampras');
  });
  
  it('can create a new tennis match', function() {
    expect(anonymousMatch).toBeDefined();
  });
  
  it('a match must have players', function() {
    expect(anonymousMatch.players).toBeDefined();
  });
  
  it('a match must have two players', function() {
    expect(anonymousMatch.players.length).toBe(2);
  });
  
  it('a match must have two players defined by user', function() {
    match.players.map(function(pj, i) {
      expect(match.players[i]).toBe(pj);
    });
  });
  
  it('players have their own score, zero initialized', function() {
    match.players.map(function(pj) {
      expect(pj.score).toBe(0);
    });
  });
  
});