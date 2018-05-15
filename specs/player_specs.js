const assert = require('assert');
const Card = require('../card.js');
const Player = require('../player.js');

describe('Player', function(){
  let player;
  let card;

  beforeEach(function(){
    card = new Card('Superman', 6, 9, 7);
    card2 = new Card('Scarlet Witch', 7,10,5);
    player = new Player();
  });

  it('should start with an empty array of cards', function(){
    const actual = player.cards;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a card to a player', function(){
    player.addCard(card);
    const actual = player.cards.length;
    assert.strictEqual(actual, 1);
  });

  it('should return the chosen attribute value', function(){
    player.addCard(card);
    player.addCard(card2);
    const actual = player.returnTopCardChosenAttributeValue("intelligence");
    assert.strictEqual(actual, 7);
  });

});
