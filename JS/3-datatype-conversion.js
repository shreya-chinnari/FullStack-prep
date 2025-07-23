// ==========================================
// 🔢 NUMBER TYPE & CONVERSIONS
// ==========================================

// Number literal
let score1 = 45;
console.log(score1); //   45
console.log(typeof score1); //   "number" — primitive number

// String representing a number
let score2 = "45";
console.log(score2); //   "45"
console.log(typeof score2); //   "string"

// Convert valid numeric string to number
let x = Number(score2);
console.log(x); //   45
console.log(typeof x); //   "number"

// Invalid numeric string
let score3 = "45abc";
console.log(score3); //   "45abc"
console.log(typeof score3); //   "string"

// Attempt to convert invalid string to number
let y = Number(score3);
console.log(y); //   NaN
console.log(typeof y); //   "number" — NaN is a special numeric value

// Explanation:
// "45abc" is not fully numeric → Number("45abc") = NaN
// typeof NaN === "number" → because it's a numeric type representing "Not a Number"

// More numeric conversions:
console.log(Number("")); //   0 — empty string becomes 0
console.log(Number(" ")); //   0 — whitespace also becomes 0
console.log(Number(true)); //   1 — true coerces to 1
console.log(Number(false)); //   0 — false coerces to 0
console.log(Number(null)); //   0 — null coerces to 0
console.log(Number(undefined)); //   NaN — undefined is not numeric
console.log(Number([])); //   0 — empty array becomes ""
console.log(Number([1, 2])); //   NaN — [1,2] becomes "1,2" which is invalid
console.log(Number({})); //   NaN — object becomes "[object Object]"
console.log(Number(NaN)); //   "NaN"

// ==========================================
// 🔤 STRING CONVERSIONS
// ==========================================

console.log(String(123)); //   "123"
console.log(String(true)); //   "true"
console.log(String(null)); //   "null"
console.log(String(undefined)); //   "undefined"
console.log(String([1, 2, 3])); //   "1,2,3"
console.log(String({ a: 1 })); //   "[object Object]"
console.log(String(new Date())); //   "Wed Jul 23 2025 17:03:14 GMT+0530 (India Standard Time)"
console.log(String(NaN)); //   "NaN"
console.log(String(null)); //  "null"

const obj = { a: 1 };
console.log(obj.toString()); // ➤ "[object Object]"
console.log(String(obj)); // ➤ "[object Object]"

// ==========================================
// ✅ BOOLEAN CONVERSIONS
// ==========================================

console.log(Boolean("")); //   false — empty string is falsy
console.log(Boolean("hello")); //   true — non-empty string is truthy
console.log(Boolean(0)); //   false — zero is falsy
console.log(Boolean(1)); //   true — non-zero is truthy
console.log(Boolean(undefined)); //   false
console.log(Boolean(null)); //   false
console.log(Boolean(NaN)); //   "false"
console.log(Boolean([])); //   true — arrays are always truthy
console.log(Boolean({})); //   true — objects are always truthy

// ==========================================
// 🧪 TYPEOF CHECKS & EDGE BEHAVIOR
// ==========================================

console.log(typeof NaN); //   "number" — still a number
console.log(typeof null); //   "object" (legacy JS bug)
console.log(typeof undefined); //   "undefined"

// ==========================================
// 🔄 COMPARISON (== vs ===)
// ==========================================

console.log(null == undefined); //   true — both are loosely equal (falsy)
console.log(null === undefined); //   false — strict type mismatch

console.log([] == false); //   true
// [] ➝ "" ➝ 0; false ➝ 0 ⇒ 0 == 0

console.log([] == ![]); //   true
// ![] is false ⇒ [] == false
// [] ➝ "" ➝ 0; false ➝ 0 ⇒ 0 == 0

// ==========================================
// ✅ Summary Table (Output Recap)
// ==========================================
// typeof NaN                => "number"
// Number(null)             => 0
// Number(undefined)        => NaN
// Number("")               => 0
// Boolean([])              => true
// Boolean({})              => true
// null == undefined        => true
// null === undefined       => false
// [] == false              => true
// [] == ![]                => true
// Number("45")             => 45
// Number("45abc")          => NaN
// Number(" ")              => 0
// Number(true)             => 1
// Number(false)            => 0
// Number([])               => 0
// Number([1,2])            => NaN
// Number({})               => NaN
