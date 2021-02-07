// import functions from 'jest/functions';
const functions = require('../../jest/functions');

// functions which can be run before / after all tests
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// functions which which run one before / after the tests
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database initialized...');
// const closeDatabase = () => console.log('Database closed...');

const nameCheck = () => console.log('Checking name...');

// We can use a describe block to group tests...
// We can also use the before/after Each/All functions for tests just within the the describe block.
describe('Checking names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });
  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

// toBe (used when expecting primitive outcomes)
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeLessThan / toBeGreaterThan / toBeLessThanOrEqual / toBeGreaterThanOrEqual
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex - toMatch
test('There is no letter "B" in the word "team" ', () => {
  expect('team').not.toMatch(/B/);
});

// Arrays - toContain
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual - used for comparing equality for reference types like arrays or objects
test('User should be Daniel David object', () => {
  expect(functions.createUser()).toEqual({
    firstname: 'Daniel',
    lastname: 'David',
  });
});

// toBeDefined
test('Should be defined', () => {
  expect(functions.fetchUser).toBeDefined();
});

// Working with async data
// Note: if BOTH expect.assertions and the return statement is left out -
// then the expect function will always return true regardless

// Using Promises
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual('Leanne Graham');
  });
});
// Using Async / Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toBe('Leanne Graham');
});

// toBeTrue toBeFalse
test('Should detminine if string is a palindrome', () => {
  expect(functions.isPalindrome('hello')).toBeFalsy();
  expect(functions.isPalindrome('h')).toBeTruthy();
  expect(functions.isPalindrome('helloolleh')).toBeTruthy();
  expect(functions.isPalindrome('oooo')).toBeTruthy();
  expect(functions.isPalindrome('oho')).toBeTruthy();
  expect(functions.isPalindrome('ofooo')).toBeFalsy();
});

test('ChunkArray function should chunk array according to given length', () => {
  expect(functions.chunkArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7],
  ]);
});

test('Function to reverse an integer including signed integers', () => {
  expect(functions.reverseInt(123)).toBe(321);
  expect(functions.reverseInt(-123)).toBe(-321);
});

test('Function should determine if first string is an anagram of second string', () => {
  expect(functions.isAnagram('elbow', 'below')).toBeTruthy();
  expect(functions.isAnagram('Dormitory', 'dirtyroom')).toBeTruthy();
  expect(functions.isAnagram('Dormitory', 'dity room')).toBeFalsy();
});

test('intersection function should return an array consisting of elements in first array which are also present in second array (with no duplicates)', () => {
  expect(
    functions.intersection(['J', 'A', 'K', 'E'], ['S', 'T', 'E', 'A', 'K'])
  ).toEqual(expect.arrayContaining(['A', 'K', 'E']));
  expect(
    functions.intersection([4, 9, 5, 9], [9, 4, 9, 2, 3, 4, 9, 6, 7])
  ).toEqual(expect.arrayContaining([4, 9]));
});
