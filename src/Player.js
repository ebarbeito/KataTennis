'use strict';

function Player(name) {
  this.name = name || 'Anonymous';
  this.score = 0;
  return this;
}

module.exports.Player = Player;
