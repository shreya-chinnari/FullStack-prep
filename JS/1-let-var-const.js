// SECTION 1: Function Scope vs Block Scope
function scopeExample() {
	if (true) {
		var varVariable = "I am var";
		let letVariable = "I am let";
		const constVariable = "I am const";
		console.log("Inside if-block:", varVariable, letVariable, constVariable);
	}

	console.log("Outside if-block:");
	console.log(varVariable); // ✅ 'I am var' — function scoped

	// ❌ ReferenceError: letVariable is not defined
	// ❌ ReferenceError: constVariable is not defined
	try {
		console.log(letVariable);
	} catch (e) {
		console.log("letVariable is block scoped:", e.message);
	}

	try {
		console.log(constVariable);
	} catch (e) {
		console.log("constVariable is block scoped:", e.message);
	}
}
scopeExample();

console.log("=".repeat(50));

// SECTION 2: Hoisting Behavior
function hoistingExample() {
	console.log("Hoisting with var:", hoistedVar); // ✅ undefined (hoisted with default value)
	var hoistedVar = "Now initialized";

	try {
		console.log("Hoisting with let:", hoistedLet); // ❌ ReferenceError
	} catch (e) {
		console.log("let is in Temporal Dead Zone:", e.message);
	}

	let hoistedLet = "Declared after access attempt";

	try {
		console.log("Hoisting with const:", hoistedConst); // ❌ ReferenceError
	} catch (e) {
		console.log("const is in Temporal Dead Zone:", e.message);
	}

	const hoistedConst = "Also declared later";
}
hoistingExample();

console.log("=".repeat(50));

// SECTION 3: Redeclaration and Reassignment
function redeclarationReassignment() {
	var x = 1;
	var x = 2; // ✅ allowed
	console.log("var redeclared:", x); // 2

	let y = 1;
	// let y = 2; // ❌ SyntaxError: Identifier 'y' has already been declared
	y = 2; // ✅ reassignment allowed
	console.log("let reassigned:", y);

	const z = 1;
	// const z = 2; // ❌ SyntaxError
	// z = 2;       // ❌ TypeError
	console.log("const fixed:", z);
}
redeclarationReassignment();

console.log("=".repeat(50));

// SECTION 4: Loop Scoping & Closures
function loopClosureVar() {
	console.log("Using var in loop:");
	for (var i = 0; i < 3; i++) {
		setTimeout(() => {
			console.log("var i:", i); // prints 3, 3, 3 — because `i` is shared
		}, 100);
	}
}

function loopClosureLet() {
	console.log("Using let in loop:");
	for (let j = 0; j < 3; j++) {
		setTimeout(() => {
			console.log("let j:", j); // prints 0, 1, 2 — separate bindings
		}, 100);
	}
}

loopClosureVar();
loopClosureLet();

console.log("=".repeat(50));

// SECTION 5: Mutability of const
function constMutation() {
	const person = { name: "Sachi", age: 22 };
	person.age = 23; // ✅ allowed (object mutated)
	console.log("Updated object:", person);

	// ❌ Reassignment is not allowed
	// person = { name: 'New Person' }; // ❌ TypeError
}
constMutation();
