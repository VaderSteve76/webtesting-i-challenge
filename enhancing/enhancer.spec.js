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
        enhancement: 6
      });
    });
  });

  describe('fail()', () => {
    const result1 = enhancer.fail(item1);
    const result2 = enhancer.fail(item2);
    const result3 = enhancer.fail(item3);

    item1('Runs fail test', () => {
      expect(result1).toEqual({
        originalName: 'shield',
        name: '[+5] shield',
        type: 'armor',
        durability: 45,
        enhancement: 5
      });
    });
  });

  decribe('repair()', () => {
    const result1 = enhancer.repair(item1);
    const result2 = enhancer.repair(item2);
    const result3 = enhancer.repair(item3);

    item1('Boosts durability to 100', () => {
      expect(result1.durability).toBe(100);
      expect(result2.durability).toBe(100);
      expect(result3.durability).toBe(100);
    });
    item1('returns item with durability change', () => {
      expect(result1).toEqual({
        originalName: 'shield',
        name: '[+5] shield',
        type: 'armor',
        durability: 100,
        enhancement: 5
      });

      expect(result2).toEqual({
        originalName: 'sword',
        name: '[+5] sword',
        type: 'armor',
        durability: 100,
        enhancement: 16
      });

      expect(result3).toEqual({
        originalName: 'dagger',
        name: '[+16] dagger',
        type: 'weapon',
        durability: 100,
        enhancement: 8
      });
    });
  });
});