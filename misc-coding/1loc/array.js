// Check if an array is empty
const isEmpty = (arr) => arr.length === 0;

// // `arr` is an array
// const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;

// // Examples
// isEmpty([]);            // true
// isEmpty([1, 2, 3]);     // false

// ==========================================

// Clone an Array

const cloneArray = arr => [...arr];

// // `arr` is an array
// const clone = arr => arr.slice(0);

// // Or
// const clone = arr => [...arr];

// // Or
// const clone = arr => Array.from(arr);

// // Or
// const clone = arr => arr.map(x => x);

// // Or
// const clone = arr => JSON.parse(JSON.stringify(arr));

// // Or
// const clone = arr => arr.concat([]);

//===================================================

// Compare two arrays regardless of order

// const isEqual = (arr1, arr2) => arr1.length === arr2.length
//         && arr1.every(item => arr2.includes(item))
//         && arr2.every(item => arr1.includes(item))

// isEqual([1, 2, 3], [1, 2, 3]);      // true
// isEqual([1, 2, 3], [1, 3, 2]);      // true
// isEqual([1, 2, 3], [1, '2', 3]);    // false
// isEqual([1, 2, 2, 3], [1, 2, 4, 3]); // false
// isEqual([1, 2, 2, 3], [1, 2, 3, 3]); // true! <--- fails

const isEqual = (a, b) => a.length === b.length && a.sort().every((v, i) => v === b.sort()[i]);



// // `a` and `b` are arrays
// const isEqual = (a, b) => JSON.stringify(a.sort()) === JSON.stringify(b.sort());

// // Examples
// isEqual([1, 2, 3], [1, 2, 3]);      // true
// isEqual([1, 2, 3], [1, 3, 2]);      // true
// isEqual([1, 2, 3], [1, '2', 3]);    // false

// ===================================================

// Compare two arrays

// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Or
const isEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

// Examples
isEqual([1, 2, 3], [1, 2, 3]);      // true
isEqual([1, 2, 3], [1, '2', 3]);    // false

// ====================================================

// Convert an array of objects to a single object based on a specified key

const toObject = (arr, key) => arr.reduce( (a, e) =>  , {})
