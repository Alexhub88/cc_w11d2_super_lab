const assert = require('assert');

const Card = require('../card.js');

describe('Card', function(){
  let card;

  beforeEach(function(){
    card = new Card('Superman', 6, 9, 7);
  });

  it('should have a card name', function(){
    const actual = card.name;
    assert.strictEqual(actual, 'Superman');
  });
  it('should have an intelligence rating', function(){
    const actual = card.intelligence;
    assert.strictEqual(actual, 6);
  });
});
