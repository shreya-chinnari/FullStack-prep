/**
 * ✅ What does “Dynamically Typed” Mean?
 
   * In dynamically typed languages, data types are determined at runtime — not at compile time. Variables do not need a declared type, and the type can change as the program executes.
   * This allows for flexibility but can lead to runtime errors if types are not handled carefully.
 */

let x = 5; // x is a number
x = "hello"; // now x is a string
x = true; // now x is a boolean

/*
   🔁 Opposite: Statically Typed Languages
      
   In statically typed languages like Java, C++, TypeScript, variables must be declared with a fixed type and cannot change types:
   
   // int y = 5;      // not valid in JS as "int" is not a JS type
   // y = "hello";    // ❌ error: type mismatch
   
*/

let value = "10"; // string
let result = value * 2; // → 20 → "10" gets coerced to number

let weird = "10" + 2; // → "102" → string concatenation

// Even though value is a string, JS coerces it to a number during *, and to a string during + (if the first operand is a string).
