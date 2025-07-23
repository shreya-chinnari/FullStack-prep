// =======================
// 1. STRING
// =======================
let str = "Hello, Sachi!";
console.log(typeof str); // ✅ string

// String can also be created using constructor
let strObj = new String("Hello");
console.log(typeof strObj); // ✅ object (not primitive string)

// =======================
// 2. NUMBER
// =======================
let num = 42;
console.log(typeof num); // ✅ number

let floatNum = 3.14;
console.log(typeof floatNum); // ✅ number

let nanValue = NaN;
console.log(typeof nanValue); // ✅ number (weird quirk in JS)

// =======================
// 3. BIGINT (for very large integers)
// =======================
let bigIntVal = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntVal); // ✅ bigint

// =======================
// 4. BOOLEAN
// =======================
let isJSFun = true;
console.log(typeof isJSFun); // ✅ boolean

// =======================
// 5. UNDEFINED
// =======================
let notDefined;
console.log(typeof notDefined); // ✅ undefined

// It means a variable is declared but not assigned.
// Default state of all uninitialized variables.

// =======================
// 6. NULL
// =======================
let emptyValue = null;
console.log(typeof emptyValue); // ❗️object (this is a known bug in JS)

// Explanation: typeof(null) === "object" is due to historical reasons from early JS
// In reality, null is a **primitive** type, but typeof returns "object"
// null is a primitive value that represents intentional absence of any object value.

// Historic Legacy Reason : : Internally, JS used 32 bits to represent types. The type tag for objects was 0, and null was represented with all 0s in memory — so it incorrectly tagged it as object. This remained for compatibility.

// =======================
// 7. SYMBOL (for unique keys)
// =======================
let sym = Symbol("id");
console.log(typeof sym); // ✅ symbol

// =======================
// 8. OBJECT (non-primitive)
// =======================
let person = { name: "Sachi", age: 23 };
console.log(typeof person); // ✅ object

// =======================
// 9. ARRAY (technically an object)
// =======================
let arr = [1, 2, 3];
console.log(typeof arr); // ✅ object
console.log(Array.isArray(arr)); // ✅ true (use this to check array)

// =======================
// 10. FUNCTION (special object)
// =======================
function greet() {
	return "Hello!";
}
console.log(typeof greet); // ✅ function

// =======================
// 11. DATE (also object)
// =======================
let today = new Date();
console.log(typeof today); // ✅ object

// =======================
// 12. TYPEOF EDGE CASES
// =======================
console.log(typeof null); // ❗️"object" — historical bug
console.log(typeof undefined); // ✅ "undefined"
