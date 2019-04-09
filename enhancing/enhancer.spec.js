const enhancer = require('./enhancer.js');


describe('Enchant system', () => {

  const item1 = {
    originalName: 'shield',
    name: '[+5] shield',
    type: 'armor',
    durability: 50,
    enhancement: 5
  }

  const item2 = {
    originalName: 'sword',
    name: '[+16] shield',
    type: 'armor';
    durability: 20,
    enhancement:16
  }

  const item3 = {
    originalName: 'dagger',
    name: '[+8] dagger',
    type: 'weapon',
    durability: 25,
    enhancement: 8
  }

  describe('success()', () => {
    const result1 = enhancer.success(item1);
    const result2 = enhancer.success(item2);
    const result3 = enhancer.success(item3);

    item1('adds 1 to enhancement', () => {
      expect(result1).toEqual({
        originalName: 'shield',
        name: '[+6] shield',
        type: 'armor',
        durability: 50,
        enhancement:6
      });
    });
  });

  
});