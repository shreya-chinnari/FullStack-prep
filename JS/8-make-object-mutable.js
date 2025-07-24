/**
 * const freezes the reference, not the actual object.
 * To make the object itself immutable, use Object.freeze().
 */

const user = {
	name: "Sachi",
	age: 22,
};

user.age = 23; // ✅ Allowed — the object is still mutable

console.log(user); // { name: 'Sachi', age: 23 }

// ❌ But you CANNOT reassign the reference:
user = {}; // ❌ TypeError: Assignment to constant variable

/**
 * The const keyword prevents reassignment of the variable user.

 * But the properties inside the object can still be changed unless frozen.
 */

const config = Object.freeze({
	apiKey: "XYZ123",
	maxLimit: 5,
});

// ❌ These modifications will silently fail in non-strict mode or throw error in strict mode
config.apiKey = "NEWKEY"; // Ignored
config.maxLimit = 10; // Ignored
config.newProp = "test"; // Ignored

console.log(config);
// { apiKey: 'XYZ123', maxLimit: 5 } — unchanged
