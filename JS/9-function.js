/** FUNCTION OBJECT
 * In JavaScript, functions are objects — they are a special type of object known as Function objects.

	So, a function is an object with callable behavior and properties like .name, .length, .prototype.
 */

// Technically, 'function' is not a primitive type — it’s a special kind of object.

function greet(name) {
	return `Hello, ${name}`;
}

console.log(typeof greet); // ➤ "function"
console.log(greet.name); // ➤ "greet" — name of function
console.log(greet.length); // ➤ 1 — number of parameters

/** OBJECT FUNCTION
 * A function that returns or handles an object, or

	An object which contains a function as a method.
*/

// FUNCTION THAT RETURNS AN OBJECT
function getUser() {
	return {
		name: "Sachi",
		age: 23,
	};
}

console.log(typeof getUser); // "function"
console.log(typeof getUser()); // "object"
