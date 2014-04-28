'use strict';

var Player = require('./Player').Player;

var scores = [0, 15, 30, 40];

function Match(player1, player2) {
  this.players = [
    new Player(player1 || 'Player 1'),
    new Player(player2 || 'Player 2')
  ];
}

module.exports.Match = Match;
module.exports.scores = scores;