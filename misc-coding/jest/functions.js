// es modules don't natively work in node as yet.

// export default functions = {
//   add: (num1, num2) => num1 + num2,
// };

const axios = require("axios");

const functions = {
	add: (num1, num2) => num1 + num2,
	isNull: () => null,
	checkValue: (x) => x,
	createUser: () => {
		const user = { firstname: "Daniel" };
		user["lastname"] = "David";
		return user;
	},
	fetchUser: () => {
		return axios
			.get("https://jsonplaceholder.typicode.com/users/1")
			.then((res) => res.data)
			.catch((err) => "error");
	},
	isPalindrome: (str) => {
		for (let i = 0; i <= Math.floor(str.length / 2); i++) {
			if (str[i] !== str[str.length - 1 - i]) return false;
		}
		return true;
	},
	chunkArray: (arr, chunkLen) => {
		const chunkArr = [];
		let currentChunk = [];

		for (let elem of arr) {
			if (currentChunk.length === chunkLen) {
				chunkArr.push(currentChunk);
				currentChunk = [elem];
			} else {
				currentChunk.push(elem);
			}
		}
		currentChunk.length > 0 && chunkArr.push(currentChunk);
		return chunkArr;
	},
	reverseInt: (int) =>
		parseInt(int.toString().split("").reverse().join("")) * Math.sign(int),
	isAnagram: (str1, str2) =>
		str1
			.toLowerCase()
			.split("")
			.sort()
			.every(
				(value, index) => value === str2.toLowerCase().split("").sort()[index]
			),
	fizzBuzz: () => {
		for (let i = 1; i <= 100; i++) {
			let output = "";
			if (i % 3 === 0) output += "Fizz";
			if (i % 5 === 0) output += "Buzz";
			console.log(output || i);
		}
	},
	reverseAlphabetial: (str) => {
		let start = 0;
		let end = str.length - 1;
	},
	// this intersection version includes dupes
	// intersection: (arr1, arr2) => arr1.filter((el) => arr2.includes(el)),
	// intersection: (arr1, arr2) => {
	// 	const set = new Set(arr1);
	// 	const intersectSet = new Set(arr2.filter((el) => set.has(el)));
	// 	return [...intersectSet];
	// },
	// or the one-liner
	intersection: (arr1, arr2) => [
		...new Set(arr1.filter((el) => arr2.includes(el))),
	],
};

module.exports = functions;
