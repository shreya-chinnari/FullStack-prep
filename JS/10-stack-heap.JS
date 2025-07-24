/**

📌 PART 1: Stack vs Heap Memory Allocation

🔹 Stack (Primitives)

      Stores: Primitive data types (Number, String, Boolean, null, undefined, Symbol, BigInt)

      Access speed: Fast

      Storage size: Small

      Memory: Fixed size, Last-In-First-Out (LIFO)

      Copy behavior: Passed by value
 */

let a = 10;
let b = a; // copy of value in new memory location
b = 20;

console.log(a); // 10
console.log(b); // 20

/*
🔹 Heap (Non-Primitives)

      Stores: Objects, Arrays, Functions

      Access speed: Slower

      Storage size: Large, dynamically allocated

      Memory: References (pointers) stored in the stack

      Copy behavior: Passed by reference
*/

let obj1 = { name: "Sachi" };
let obj2 = obj1; // copy the reference (pointer)

obj2.name = "Zen";

console.log(obj1.name); // "Zen"
console.log(obj2.name); // "Zen"
