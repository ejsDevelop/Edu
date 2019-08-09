/* There are 7 basic data types in JavaScript.

Number for numbers of any kind: integer or floating-point.
String for strings. A string may have one or more characters, there’s no separate single-character type.
Boolean for true/false.
Null for unknown values – a standalone type that has a single value null.
Undefined for unassigned values – a standalone type that has a single value undefined.
Object for more complex data structures.
Symbol for unique identifiers.
The typeof operator allows us to see which type is stored in a variable.

Two forms: typeof x or typeof(x).
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object. */

let name = "Ilya";

// the expression is a number 1
alert( `hello ${1}` ); // hello 1

// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name

// the expression is a variable, embed it
alert( `hello ${name}` ); // hello Ilya