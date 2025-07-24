// primitive and non-primitive data types in JavaScript

// Stored by Value : PRIMITIVE TYPES

let a = 10; // number (primitive)
let b = a; // a copy of a's value is assigned to b

b = 20; // modifying b doesn't affect a

console.log(a); // 10
console.log(b); // 20

// Value of 'a' is preserved because it's stored directly in stack memory.

// Stored by Reference : NON-PRIMITIVE TYPES

let obj1 = { name: "Sachi" }; // object (non-primitive)
let obj2 = obj1; // obj2 holds reference to the same memory

obj2.name = "Zync"; // modifies the shared object

console.log(obj1.name); // "Zync" → both obj1 and obj2 refer to same object
console.log(obj2.name); // "Zync"

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
// Because both arr1 and arr2 point to the same array in memory

function greet() {
	return "Hello";
}

let greetCopy = greet;
console.log(greetCopy()); // "Hello"
// greetCopy holds a reference to the same function object
