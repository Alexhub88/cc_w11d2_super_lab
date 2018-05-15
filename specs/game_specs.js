const assert = require('assert');
const Card = require('../card.js');
const Player = require('../player.js');
const Game = require('../game.js');

describe('Game', function(){
  let player1;
  let player2;
  let game;
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;

  beforeEach(function(){
      player1 = new Player();
      player2 = new Player();
      game = new Game(player1, player2);
      card1 = new Card ('Superman', 6, 9, 7);
      card2 = new Card ('Scarlet Witch', 7, 10, 5);
      card3 = new Card ('Black Widow', 8, 6, 9);
      card4 = new Card ('The Flash', 7, 4, 10);
      card5 = new Card ('Wonder Woman', 8, 7, 5);
      card6 = new Card ('Batman', 10, 5, 6);
  });

  it('should start with two players', function(){
   const actual = game.players.length;
   assert.strictEqual(actual, 2);
  });

  // it('should start with 6 cards', function(){
  //
  //   const actual = game.deck.length;
  //   assert.strictEqual(actual, 6);
  // });

  it('should start with no cards', function(){
    const actual = game.deck;
    assert.deepStrictEqual(actual, []);
  });

  it('should take 6 cards', function(){
    game.addCardToDeck(card1);
    game.addCardToDeck(card2);
    game.addCardToDeck(card3);
    game.addCardToDeck(card4);
    game.addCardToDeck(card5);
    game.addCardToDeck(card6);
    const actual = game.deck.length;
    assert.strictEqual(actual, 6);

  });

  it('should give a card to player', function(){
    game.addCardToDeck(card1);
    game.addCardToDeck(card2);
    game.dealCardToPlayer(player1);
    // const actual = game.deck.length;
    assert.strictEqual(game.deck.length, 1);
    assert.strictEqual(player1.cards.length, 1);

  });

});
