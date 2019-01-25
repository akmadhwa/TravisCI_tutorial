const {sum} = require('../sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Testing null values', () => {
  const n = null;
  expect(n).toBeNull();
})
