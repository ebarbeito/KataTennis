'use strict';

function Player(name) {
  this.name = name || 'Anonymous';
  this.score = 0;
  return this;
}

Player.prototype.winPoint = function() {
  this.score = 15;
};

module.exports.Player = Player;
