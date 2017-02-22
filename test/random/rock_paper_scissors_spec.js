var rockPaperScissors = require('../../lib/random/rock_paper_scissors.js');
var expect = require('chai').expect;

describe('rockPaperScissors', function(){
  describe('Smoke tests', function() {
    it('should exist', function() {
      expect(rockPaperScissors).to.exist;
    });
    it('should be a function', function() {
      expect(rockPaperScissors).to.be.a('function');
    });
  });
  describe('Tie Game', function() {
    it('should return tie for rock vs rock', function() {
      expect(rockPaperScissors('rock', 'rock')).to.eq('tie');
    });
    it('should return tie for paper vs paper', function() {
      expect(rockPaperScissors('paper', 'paper')).to.eq('tie');
    });
    it('should return tie for scissors vs scissors', function() {
      expect(rockPaperScissors('scissors', 'scissors')).to.eq('tie');
    });
  });
  describe('Player1 Wins', function() {
    it('should return player1 for rock vs scissors', function() {
      expect(rockPaperScissors('rock', 'scissors')).to.eq('player1');
    });
    it('should return player1 for paper vs rock', function() {
      expect(rockPaperScissors('paper', 'rock')).to.eq('player1');
    });
    it('should return player1 for scissors vs paper', function() {
      expect(rockPaperScissors('scissors', 'paper')).to.eq('player1');
    });
  });
  describe('Player2 Wins', function() {
    it('should return player2 for rock vs scissors', function() {
      expect(rockPaperScissors('scissors', 'rock')).to.eq('player2');
    });
    it('should return player2 for paper vs rock', function() {
      expect(rockPaperScissors('rock', 'paper')).to.eq('player2');
    });
    it('should return player2 for scissors vs paper', function() {
      expect(rockPaperScissors('paper', 'scissors')).to.eq('player2');
    });
  });
});
