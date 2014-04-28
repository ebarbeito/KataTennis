'use strict';

var Score = require('./Score.js').Score;

function Player(name) {
  this.name = name || 'Anonymous';
  this.score = new Score();
  return this;
}

Player.prototype.winPoint = function() {
  switch (this.score.value) {
    case 0:
      this.score.value = 15;
      break;
    
    case 15:
      this.score.value = 30;
      break;
    
    case 30:
      this.score.value = 40;
      break;
  }
};

module.exports.Player = Player;
