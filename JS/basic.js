// 1. Function-scope vs. Block-scope
/* Scope:-
Scope stands for where our variable will be available to use inside our code and where it will not.*/
function myFun() {
	var myName = "Company";
	console.log(myName);
}
myFun(); //output => "Company"

//Here inside myFun method, var has a function scope that's why it's not accessible outside the function.
/*Variable having Function-scope means variable will only be available to use 
inside the function it declared, will not be accessible outside of function, 
and will give Reference Error if we try to access.*/

// console.log(myName); //output => ReferenceError

/*Block-scope:-
Block means a pair of curly brackets, a block can be anything that contains 
an opening and closing curly bracket.
Variable having Block-scope will only be available to use inside the block it declared, 
will not be accessible outside the block, and will give Reference Error if we try to access. */
if (true) {
	let myName = "block-scope";
	console.log(myName); //output=> "block-scope"
}
// console.log(myName); //output => ReferenceError

// 2. Variables
/* In JavaScript, there are 3 commonly used variable types: var, let, and const */
//Initializing a variable in JavaScript is a two-step process: declaration and initialization.
var dataName = "ProductBase"; // var has the function or global scope.
let information = "Delhi"; // let's have the block scope.
//const is utilized for defining variables with values that are intended to remain constant and unchangeable.
const PI = 3.14; // const variable has the block scope.
console.log(dataName, information, PI);

// 3. JavaScript Data Types​​

// Primitive Types
/*
Number:    Represents both integer and floating-point numbers, e.g., 42, 3.14.
String:    Represents textual data, e.g., "Hello, world!".
Boolean:   Represents a logical entity and can have two values: true and false.
Undefined: Represents a variable that has not been assigned a value, e.g., let a;.
Null:      Represents the intentional absence of any object value.
Symbol:    A unique,function and immutable primitive value used as the key of an object property.
BigInt:    Represents numbers larger than 2^53 - 1, the largest number JavaScript can reliably represent with the Number type.
 */
let number = 12.45;
console.log(number);
let string = "this is String only";
console.log(string);
let Booleans = true;
console.log(Booleans);
let Undefined = undefined;
console.log(Undefined);
let Nulls = null;
console.log(Nulls);
let _Symbols = Symbol("I am testing 12ka4");
console.log(_Symbols);

// 4. Value = undefined

/*When you declare a variable without assigning a value to it, JavaScript automatically assigns it the value undefined.
Here, address is declared but not initialized, so its value is undefined. 
If you attempt to use a variable that has been declared but not initialized, 
you will get undefined when trying to access its value
*/
let address;
console.log(address); // Outputs: undefined

// 5. How + and - Operators Handle Different Data Types in JavaScript
let n1 = 5;
let n2 = "10";
// Output: 510 → number + string = string, so it joins as "5" + "10"
// When using + with a number and a string,
// JavaScript converts the number to a string and joins them (concatenation).
console.log(n1 + n2); // output: 510

//But with -, JavaScript converts the string to a number and then does the math.
// So "10" becomes 10, and 5 - 10 = -5.
console.log(n1 - n2); //Output: -5 → string is converted to number, then subtraction happens

// 6. typeof in JS:
// typeof is an operator in JavaScript used to check the data type of a value or variable.
console.log(typeof 10); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"  // (this is a known bug in JS)
console.log(typeof { name: "JS" }); // "object"
console.log(typeof [1, 2, 3]); // "object"  // arrays are technically objects
console.log(typeof function () {}); // "function"

// 7. Type Conversion in JavaScript:-

/* 
Implicit Conversion: Implicit type conversion in Javascript refers as when converting the values of one data type to another automatically.
Explicit Conversion
*/

// Implicit Conversion to String:-

/*Implicit type conversion in javascript to String refers to the automatic conversion of 
non-string values into string type when they are used in a context where a string is expected.*/
let result;
result = "5" + 2;
console.log(result); // "52"
/*Implicit Conversion to Number
JavaScript tries to convert non-numeric values to numbers to perform the operation.
*/
let answer;
answer = "3" * 2;
console.log(answer); // Output: 6
answer = "10" - "5";
console.log(answer); // Output: 5
answer = "100" / "10";
console.log(answer); // Output: 10
answer = "3" - "Hello";
console.log(answer); // Output: NaN (String "Hello" cannot be converted to a number)

//Non-numeric String Results to NaN
/*
In JavaScript, converting non-numeric strings to numbers using Number() results in NaN, 
indicating "Not-a-Number". For instance, Number("Hello"), Number("true"), or Number("") 
all yield NaN because these strings lack numeric value. For example:
 */
let result2 = Number("Hello") + 10;
console.log(result2); // Output: NaN
console.log(isNaN(result2)); // Output: true

/*
undefined used with number, boolean, or null
Utilizing undefined in numeric, boolean, or null operations yields NaN, indicating an undefined or unrepresentable value.
 */
let undefinedNum = undefined + 10;
console.log(undefinedNum); // Output: NaN

// JavaScript Explicit Conversion:
/* 
The conversion of one data type to another according to our need and using 
built-in methods is called as explicit type casting in javascript.
*/
// Convert to Number Explicitly
let stringValue = "42";
let numValue = Number(stringValue);
console.log(numValue); // Output: 42 (string converted to number)

//Convert to String Explicitly
let numValue2 = 42;
let stringValue2 = String(numValue2);
console.log(stringValue2); // Output: "42" (number converted to string)

//Convert to Boolean Explicitly
let value = 42; //"42" also work well
let boolValue = Boolean(value);
console.log(boolValue); // Output: true (number converted to boolean)

// 8. Difference Between == and === in Javascript return true/false
// === strict check / == loosely check
var x = 2;
var y = "2";
//Equality coercion takes place when using ‘ == ‘ operator
console.log(x == y); // Returns true since the value of both x and y is the same
//Coercion does not take place when using the ‘===’ operator.
console.log(x === y); // Returns false since the typeof x is "number" and typeof y is "string"

// 9. Outer

/*
Understanding Loop Labels in JavaScript (break and continue with Outer Loops)
In JavaScript, you can control nested loops using labels with break and continue.
This allows you to:
break completely out of an outer loop continue to the next iteration of an outer loop
*/
console.log("Example with break:");
// Example with break:
outerLoop: for (let i = 1; i <= 3; i++) {
	innerLoop: for (let j = 1; j <= 3; j++) {
		if (i === 2 && j === 2) {
			break outerLoop; // Breaks out of BOTH loops
		}
		console.log(`i=${i}, j=${j}`);
	}
}
/*
output:
i=1, j=1
i=1, j=2
i=1, j=3
i=2, j=1
*/
console.log("Another Example with continue:");
//Another Example with continue:
outer: for (let i = 0; i < 3; i++) {
	inner: for (let j = 0; j < 3; j++) {
		if (j === 1) {
			continue outer; // Skips to next iteration of outer loop
		}
		console.log(`i=${i}, j=${j}`);
	}
}
/*
Output:-
i=0, j=0
i=1, j=0
i=2, j=0
*/


