'use strict';

var Match = require('../src/Match').Match;
var Player = require('../src/Player').Player;
var ScoreTypes = require('../src/Score').ScoreTypes;

describe('When a tennis match starts', function() {
  
  var anonymousMatch;
  
  beforeEach(function() {
    anonymousMatch = new Match();
  });
  
  it('a match must have two players', function() {
    anonymousMatch.players.map(function(pj, i) {
      expect(anonymousMatch.players[i]).toBe(pj);
    });
  });
  
  it('both players have the same score at the beginning', function() {
    expect(anonymousMatch.players[0].score.value).toBe(anonymousMatch.players[1].score.value);
  });
  
  it('both anonymous players have different names', function() {
    expect(anonymousMatch.players[0].name).not.toBe(anonymousMatch.players[1].name);
  });
  
  it('there is no winner at the beginning', function() {
    expect(anonymousMatch.winner).toBe(null);
  });

});

describe("when a Nadal-Sampras tennis match starts", function() {

  var match;
  var nadal;
  var sampras;
  
  beforeEach(function() {
    match = new Match('Rafael Nadal', 'Pete Sampras');
    
    // 'nadal' alias for player 1
    nadal = match.players[0];
    
    // 'sampras' alias for player 0
    sampras = match.players[1];
  });
  
  describe('and no other player can play the match', function() {
    var ilegalPlayer;
    
    beforeEach(function() {
      ilegalPlayer = new Player('Ilegal player');
    });
    
    it('ilegal player cant add points to this match', function() {
      expect(function(){ match.addPoint(ilegalPlayer) }).toThrow(new Error('Ilegal player'));
    });
    
  });

  describe('and rafael nadal wins the point', function() {
    
    beforeEach(function() {
      match.addPoint(nadal);
    });
    
    it('Nadal:fifteen, Sampras:love', function() {
      expect(nadal.score.value).toEqual(ScoreTypes.fifteen);
      expect(sampras.score.value).toEqual(ScoreTypes.love);
    });
    
    describe('and rafael nadal wins the next two points', function() {

      beforeEach(function() {
        match.addPoint(nadal);
        match.addPoint(nadal);
      });

      it('Nadal:forty, Sampras:love', function() {
        expect(nadal.score.value).toEqual(ScoreTypes.forty);
        expect(sampras.score.value).toEqual(ScoreTypes.love);
      });

      it('the game isnt in deuce state', function() {
        expect(match.isDeuce()).toBe(false);
      });

      describe('and pete sampras wins the next three points', function() {

        beforeEach(function() {
          match.addPoint(sampras);
          match.addPoint(sampras);
          match.addPoint(sampras);
        });

        it('Nadal:forty, Sampras:forty', function() {
          expect(nadal.score.value).toEqual(ScoreTypes.forty);
          expect(sampras.score.value).toEqual(ScoreTypes.forty);
        });

        it('the game is in deuce state', function() {
          expect(match.isDeuce()).toBe(true);
        });
        
        it('neither player has advantage in this deuce', function() {
          match.players.map(function(pj) {
            expect(pj.score.isAdvantage()).toBe(false);
          });
        });
        
        describe('and rafael nadal wins the next point', function() {

          beforeEach(function() {
            match.addPoint(nadal);
          });

          it('there isnt a winner yet', function() {
            expect(match.winner).toBe(null);
          });
          
          it('the game is in deuce state', function() {
            expect(match.isDeuce()).toBe(true);
          });
          
          it('rafael nadal has advance in this deuce state', function() {
            expect(nadal.score.isAdvantage()).toBe(true);
          });
          
          describe('and pete sampras wins the next point', function() {

            beforeEach(function() {
              match.addPoint(sampras);
            });

            it('there isnt a winner yet', function() {
              expect(match.winner).toBe(null);
            });

            it('the game is in deuce state', function() {
              expect(match.isDeuce()).toBe(true);
            });

            it('neither player has advantage in this deuce', function() {
              match.players.map(function(pj) {
                expect(pj.score.isAdvantage()).toBe(false);
              });
            });
            
            describe('and rafael nadal wins the next two points!', function() {

              beforeEach(function() {
                match.addPoint(nadal);
                match.addPoint(nadal);
              });

              it('Rafael Nadal wins the game', function() {
                expect(match.winner).toEqual(nadal);
              });
              
              describe('and there is a winner', function() {

                it("the players' score is initialized", function() {
                  match.players.map(function(pj) {
                    expect(pj.score.value).toBe(ScoreTypes.love);
                  });
                });

              });

            });

          });

        });
        
      });

    });

  });

});

describe("when current game is Nadal:40, Sampras:30", function() {

  var match;
  var nadal;
  var sampras;
  
  beforeEach(function() {
    match = new Match('Rafael Nadal', 'Pete Sampras');
    
    // 'nadal' alias for player 1
    nadal = match.players[0];
    nadal.addPoint();
    nadal.addPoint();
    nadal.addPoint();
    
    // 'sampras' alias for player 0
    sampras = match.players[1];
    sampras.addPoint();
    sampras.addPoint();
  });

  describe('and rafael nadal wins the game', function() {
    
    beforeEach(function() {
      match.addPoint(nadal);
    });
    
    it('Rafael Nadal wins the game', function() {
      expect(match.winner).toEqual(nadal);
    });
    
  });

});

describe("when current game is Nadal:30, Sampras:40", function() {

  var match;
  var nadal;
  var sampras;
  
  beforeEach(function() {
    match = new Match('Rafael Nadal', 'Pete Sampras');
    
    // 'nadal' alias for player 1
    nadal = match.players[0];
    nadal.addPoint();
    nadal.addPoint();
    
    // 'sampras' alias for player 0
    sampras = match.players[1];
    sampras.addPoint();
    sampras.addPoint();
    sampras.addPoint();
  });

  describe('and pete sampras wins the game', function() {
    beforeEach(function() {
      match.addPoint(sampras);
    });
    
    it('Pete Sampras wins the game', function() {
      expect(match.winner).toEqual(sampras);
    });
    
  });

});
