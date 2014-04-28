'use strict';

var Score = require('./Score.js').Score;

function Player(name) {
  this.name = name || 'Anonymous';
  this.score = new Score();
  return this;
}

Player.prototype.winPoint = function() {
  this.score.increment();
};

module.exports.Player = Player;
