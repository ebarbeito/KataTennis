'use strict';

var Player = require('../src/Player').Player;
var ScoreTypes = require('../src/Score').ScoreTypes;

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
    expect(nadal.score.value).toBe(ScoreTypes.love);
  });
  
  describe('and a player wins, from love to fifteen', function() {

    beforeEach(function() {
      nadal.addPoint();
    });
    
    it('rafael nadal wins (fifteen)', function() {
      expect(nadal.score.value).toBe(ScoreTypes.fifteen);
    });
    
    describe('and a player wins, from fifteen to thirty', function() {
      
      beforeEach(function() {
        nadal.addPoint();
      });

      it('rafael nadal wins (thirty)', function() {
        expect(nadal.score.value).toBe(ScoreTypes.thirty);
      });
      
      describe('and a player wins, from thirty to forty', function() {

        beforeEach(function() {
          nadal.addPoint();
        });

        it('rafael nadal wins (forty)', function() {
          expect(nadal.score.value).toBe(ScoreTypes.forty);
        });

      });

    });

  });

});

describe("when a player's score is forty", function() {

  var nadal;
  
  beforeEach(function() {
    nadal = new Player('Rafael Nadal');
    nadal.addPoint(); // love to fifteen
    nadal.addPoint(); // fifteen to thirty
    nadal.addPoint(); // thirty to forty
    nadal.addPoint(); // still forty!
  });

  it('rafael nadal has the highest score in this game', function() {
    expect(nadal.score.value).toBe(ScoreTypes.forty);
  });

});
