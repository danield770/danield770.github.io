const reverseString = require('../../jest/reverseString');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('Should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
