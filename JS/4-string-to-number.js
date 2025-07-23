console.log(1 + "2"); // Output: "12"
// If either operand is a string, JavaScript converts the other to a string and performs string concatenation instead of numeric addition.

// Other operators like -, *, / always attempt numeric conversion:

console.log("5" - 2); // Output: 3
// If one operand is a string that can be converted to a number, JavaScript converts the string to a number and performs numeric subtraction.
console.log("5" * 2); // Output: 10
console.log(5 * "2"); // Output: 10

console.log(Number("2") + 1); // 3

console.log(3 + "1" + 7); // 317
console.log("3" + 1 + 7); // 317, not 3+8=11
console.log(3 + 1 + "7"); // 47, not 317

console.log("hello" + 3); // hello3
// console.log("hello" + tune); // tune is not defined
console.log("hello" + true); // hellotrue
console.log("Score: " + 100); // Score: 100

console.log("ten" - 2); // NaN → "ten" can't convert to number

// Think of [+value] as a shorthand for [Number(value)].
console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0
console.log(true + 1); // 2 → true becomes 1
console.log(false + 1); // 1 → false becomes 1
console.log(false + "1"); // "false1" → false coerces to string
