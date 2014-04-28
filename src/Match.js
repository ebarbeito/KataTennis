'use strict';

var Player = require('./Player').Player;
var ScoreTypes = require('../src/Score').ScoreTypes;

function Match(player1, player2) {
  this.players = [
    new Player(player1 || 'Player 1'),
    new Player(player2 || 'Player 2')
  ];
  this.winner = null;
}

Match.prototype.addPoint = function(player) {
  if (ScoreTypes.forty === player.score.value) {
    this.winner = player;
  } else {
    player.addPoint();
  }
};

module.exports.Match = Match;
