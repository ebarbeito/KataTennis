'use strict';

var Player = require('./Player').Player;

function Match(player1, player2) {
  this.players = [
    new Player(player1 || 'Player 1'),
    new Player(player2 || 'Player 2')
  ];
  this.winner = null;
}

Match.prototype.addPoint = function(player) {
  this.winner = this.players[0];
};

module.exports.Match = Match;
