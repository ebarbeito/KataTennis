'use strict';

var Player = require('../src/Player').Player;

describe('When a player is created', function() {
  
  var anonymousPlayer;
  var nadal;
  
  beforeEach(function() {
    anonymousPlayer = new Player();
    nadal = new Player('Rafael Nadal');
  });
  
  it('anonymous player definition', function() {
    expect(anonymousPlayer.name).toBe('Anonymous');
  });
  
  it('rafael nadal player definition', function() {
    expect(nadal.name).toBe('Rafael Nadal');
  });
  
  it('player have their own score, zero initialized', function() {
    expect(nadal.score).toBe(0);
  });
  
});
