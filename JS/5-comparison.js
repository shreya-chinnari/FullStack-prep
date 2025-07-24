/*
   * == (loose equality): Performs type coercion but uses different rules than comparison operators (<, >, >=, etc.)

   * >=, >, <, <=: These convert both operands to numbers (if not strings) using ToNumber().

   * null becomes:
   - 0 when coerced in a numeric context
   - false in a Boolean context
   - But behaves differently in loose equality
*/

console.log(null == 0);
/*
   * == compares null and 0 using loose equality, but there's a specific rule:

   - null is only loosely equal to undefined, and nothing else.
   - It is not equal to 0, false, or "".
*/

console.log(null > 0);
/*
 * null is coerced to a number using ToNumber(null):
 * 0 > 0 → false
 */

console.log(null >= 0);

/**
 * Again, null becomes 0, so:
 * 0 >= 0 → true
 */

console.log(null == 0); // false
// null loosely equals only undefined, not 0

console.log(null > 0); // false
// Number(null) = 0 → 0 > 0 → false

console.log(null >= 0); // true
// Number(null) = 0 → 0 >= 0 → true

console.log("\n");

console.log(undefined == 0); // false
// undefined is not loosely equal to 0 or any number

console.log(undefined > 0); // false
// Number(undefined) = NaN → NaN > 0 → false

console.log(undefined >= 0); // false
// Number(undefined) = NaN → NaN >= 0 → false

console.log("\n");
console.log("" == 0); // true
// "" → 0, so 0 == 0 → true

console.log(false == 0); // true
// false → 0, so 0 == 0 → true

console.log(false == ""); // true
// false → 0, "" → 0 → 0 == 0 → true

console.log("" === false); // false
// Different types: string !== boolean

console.log("\n");
console.log([] == 0); // true
// [] → "" → 0, so 0 == 0 → true

console.log([] == false); // true
// [] → "" → 0, false → 0 → 0 == 0 → true

// console.log([] === false); // false
// Array !== Boolean — no coercion in strict comparison
// This condition will always return 'false' since JavaScript compares objects by reference, not value.

console.log([0] == 0); // true
// [0] → "0" → 0, so 0 == 0 → true

console.log([1] == true); // true
// [1] → "1" → 1, true → 1 → 1 == 1 → true

console.log([2] == true); // false
// [2] → "2" → 2, true → 1 → 2 == 1 → false

console.log("\n");

console.log({} == "[object Object]"); // false
// {} → "[object Object]" (via toString), but no coercion occurs in == with string

console.log({} == {}); // false
// Reference comparison: different objects

console.log(null == undefined); // true
// Only case where null and undefined are loosely equal

console.log(null === undefined); // false
// Different types: object vs undefined

console.log("\n");
console.log(true + false); // 1
// true → 1, false → 0 → 1 + 0 = 1

console.log(true == 1); // true
console.log(false == 0); // true

console.log(true === 1); // false
// boolean !== number (strict type check)

console.log("\n");

// strict check : === compares data types and values
console.log(null === 0); // false
// null is not equal to 0 in strict comparison

console.log(null === undefined); // false
// null is not equal to undefined in strict comparison

console.log("2" === 2); // false
// string !== number (strict type check)
