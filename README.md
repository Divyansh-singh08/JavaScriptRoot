# THIS IS THE INTERVIEW PREP..

# JavaScript: Function-scope vs. Block-scope, Variables, Data Types, typeof, Type Conversion, Equality, and Loop Labels

## 1. Function-scope vs. Block-scope

```js
// Scope:-
// Scope stands for where our variable will be available to use inside our code and where it will not.
function myFun() {
	var myName = "Company";
	console.log(myName);
}
myFun(); //output => "Company"

//Here inside myFun method, var has a function scope that's why it's not accessible outside the function.
/*Variable having Function-scope means variable will only be available to use 
inside the function it declared, will not be accessible outside of function, 
and will give Reference Error if we try to access.*/

console.log(myName); //output => ReferenceError

/*Block-scope:-
Block means a pair of curly brackets, a block can be anything that contains 
an opening and closing curly bracket.
Variable having Block-scope will only be available to use inside the block it declared, 
will not be accessible outside the block, and will give Reference Error if we try to access. */
if (true) {
	let myName = "block-scope";
	console.log(myName); //output=> "block-scope"
}
console.log(myName); //output => ReferenceError
```

## 1. Variables

```js
/* In JavaScript, there are 3 commonly used variable types: var, let, and const */
//Initializing a variable in JavaScript is a two-step process: declaration and initialization.
var dataName = "ProductBase"; // var has the function or global scope.
let information = "Delhi"; // let's have the block scope.
//const is utilized for defining variables with values that are intended to remain constant and unchangeable.
const PI = 3.14; // const variable has the block scope.
console.log(dataName, information, PI);
```

## 3. JavaScript Data Types​​

```js
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
```

## 4. Value = undefined

```js
/*When you declare a variable without assigning a value to it, JavaScript automatically assigns it the value undefined.
Here, address is declared but not initialized, so its value is undefined. 
If you attempt to use a variable that has been declared but not initialized, 
you will get undefined when trying to access its value
*/
let address;
console.log(address); // Outputs: undefined
```

## 5. How + and - Operators Handle Different Data Types in JavaScript

```js
let n1 = 5;
let n2 = "10";
// Output: 510 → number + string = string, so it joins as "5" + "10"
// When using + with a number and a string,
// JavaScript converts the number to a string and joins them (concatenation).
console.log(n1 + n2); // output: 510

//But with -, JavaScript converts the string to a number and then does the math.
// So "10" becomes 10, and 5 - 10 = -5.
console.log(n1 - n2); //Output: -5 → string is converted to number, then subtraction happens
```

## 6. typeof in JS

```js
// typeof is an operator in JavaScript used to check the data type of a value or variable.
console.log(typeof 10); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"  // (this is a known bug in JS)
console.log(typeof { name: "JS" }); // "object"
console.log(typeof [1, 2, 3]); // "object"  // arrays are technically objects
console.log(typeof function () {}); // "function"
```

## 7 Type Conversion in JavaScript

```js
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
Utilizing undefined in numeric, boolean, or null operations yields NaN, indicating an undefined or un-representable value.
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
```

## 8. Difference Between == and === in Javascript return true/false

```js
// === strict check / == loosely check
var x = 2;
var y = "2";
//Equality coercion takes place when using ‘ == ‘ operator
console.log(x == y); // Returns true since the value of both x and y is the same
//Coercion does not take place when using the ‘===’ operator.
console.log(x === y); // Returns false since the typeof x is "number" and typeof y is "string"
```

## 9. Outer

```js
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
```

# JavaScript String

## 10. String Datatype

```js
// The string is a primitive data type in javascript.
// Strings in Javascript can be created by two methods
/* 
as primitives from string literals
as object using string() constructor
*/

//Creating strings as primitives:
const str1 = "String within double ticks";
const str2 = "String within single ticks";
const str3 = `String within backticks`;
console.log(str1, str2, str3);
// Note: The string created using backticks is known as template literal.

// Creating strings as an object
/*
Strings in javascript can be created by calling the String() constructor with the 
string as the parameter. The String() constructor is called using the new keyword and 
the value is assigned to a variable or constructor.
*/
const str4 = new String(
	"This string object is created by calling the constructor"
);
console.log(str4);
```

## 11. By using charAt() method

```js
//The charAt() method returns a new string consisting of the single string of that index base
const str = "JavaScript is a Dynamic-based programming language";
console.log(str.charAt(0)); //output: J
console.log(str.charAt(4)); //output: S
```

## 12. By using Bracket Notation

```js
const str5 = "JavaScript is a JIT programming language";
console.log(str5[16]); //output: J
console.log(str5[5]); //output: c
```

## 13. String.fromCharCode()

```js
/*
String.fromCharCode()  is a static method that creates a string from 
a sequence of Unicode code points (UTF-16 code units). ASCI CODE
*/

// Single character
console.log(String.fromCharCode(65)); // "A"
console.log(String.fromCharCode(9731)); // "☃" (snowman symbol)
// Character that requires surrogate pair (code point 0x1F600 for 😀)
const smileyFace = String.fromCharCode(0xd83d, 0xde00);
console.log(smileyFace); // "😀"
// Basic Multilingual Plane characters (same as fromCharCode)
// Writing modern JavaScript (ES6+)
console.log(String.fromCodePoint(65)); // "A"
console.log(String.fromCodePoint(0x12ffff));
```

## 14. JavaScript String Methods

This section covers important JavaScript **String Methods** with their usage and examples.

---

## 📚 Common String Methods Overview

```js
charAt()       => Finds the character present at a particular index in the string.
concat()       => Concatenates the string arguments.
indexOf()      => Returns the index of the first occurrence of the passed value.
lastIndexOf()  => Returns the index of the last occurrence of the passed value.
toLowerCase()  => Converts all the characters of the string into lowercase letters.
toUpperCase()  => Converts all the characters of the string into uppercase letters.
split()        => Divides the given string into an ordered list of substrings.
trim()         => Removes additional spaces around the string.
toString()     => Returns a string object as a string.
substring()    => Extracts the characters between two indices of a string and returns a substring.
slice()        => Extracts a section of a string and returns it as a new string, without modifying the original string.

let string1 = "Javascript is a programming language";

// Find the character at index 2
console.log(string1.charAt(2)); // Output: v

// Concatenate additional string to the original
console.log(string1.concat(", ", "as well as one of the most used language."));
// Output: Javascript is a programming language, as well as one of the most used language.


// Get the first index of character 's'
console.log(string1.indexOf("s")); // Output: 4

// Get the last index of character 'a'
console.log(string1.lastIndexOf("a")); // Output: 33

// Convert the string to lowercase
let newStr1 = string1.toLowerCase();
console.log(newStr1);// Output: javascript is a programming language

// Convert the string to uppercase
let newStr2 = string1.toUpperCase();
console.log(newStr2);// Output: JAVASCRIPT IS A PROGRAMMING LANGUAGE

// Split the string into an array by spaces
console.log(string1.split(" "));// Output: [ 'Javascript', 'is', 'a', 'programming', 'language' ]

// Split the string into only 2 parts
console.log(string1.split(" ", 2));// Output: [ 'Javascript', 'is' ]

// Remove extra whitespace from both ends
let str11 = " Javascript is a programming language   ";
console.log(str11.trim()); // Output: 'Javascript is a programming language'

// Convert String object to primitive string
let newStr = new String("Javascript");
console.log(newStr.toString());// Output: Javascript

// Extract substring starting from index 3
let str33 = "JavascriptD";
console.log(str33.substring(3)); // Output: ascriptD

// Extract substring between index 3 and 7
console.log(str33.substring(3, 7)); // Output: ascr

// Slice string from index 3 to end
let str44 = "Language_Check";
console.log(str44.slice(3)); // Output: guage_Check

// Slice string from index 4 to 9
console.log(str44.slice(4, 10)); // Output: uage_C

```

## 15 JS Imp topics

### What is Execution Context ?

```js
/* 
Execution Context:
It is said to be as JS refer to the  environment in which JS code execute
It consist of variable function object and other information that js tract and manage
It work on 2 phase:
--Creation phase
--code execution phase
*/
```

### What is Lexical Scope ?

```js
/*
What is scope? Scope refers to the visibility of variables, functions, and objects within some part of your code during runtime. 

Lexical Scope mean in programming i.e. in a nested group of functions, the inner functions 
will have access to the variables and the other resources of their parent scope.
*/
// Example of lexical scope:
/* 
And the inner function will have access to all the variables or methods defined inside it, or its parent. 
So, we can access the value of name & title both.
*/
function f1() {
	let name = "Programming";
	//_nestedF2() is lexical scope of --> f1()
	function _nestedF2() {
		let title = "Javascript";
		console.log("Hey I am from _nestedF2: ", name); // Programming
		console.log("Hey I am from _nestedF2: ", title); // Javascript
	}
	//call inside parent f1
	_nestedF2();
}
f1();

//Lexical scope of Example 2:
function A() {
	var m = 100; // local to A scope
	console.log(b, " b inside A "); // global b scope // 23
	C();
	function C() {
		console.log(b, " b inside C "); // global b scope // 23
		console.log(m, "m inside C "); // A scope m variable ---> lexical C scope // 100
	}
}
var b = 23; // global scope
A();
```

### What is Hosting in JS ?

```js
/*
It is a phenomena in JS by which we can access variable and function even before initialization,
and we don't get error[ we get undefine] 
*/
// Example of hosting
greet(); // hosting happen in function
console.log(culture); // Hosting happen in variable ---> give undefine
var culture = "workLifeBalance";
function greet() {
	console.log("Hello World off JS");
}

//Example 2
greet2("World");
function greet2(name) {
	console.log("Hello " + name); // Hello World
}
```

## What is Closures ?

```js
/*
Closure is a combination of a function bind together with it lexical Environment
            Function + Lexical Scope = Closure
*/
// Example of closure:
function closure() {
	var a = 7;
	function lexicalEnv() {
		console.log(a, " a is inside lexicalEnv fxn "); // lexical scope a of closure function
	}
	return lexicalEnv;
}

/* After lexicalEnv return now closure execution context is no longer present in callStack 
still remember the a .. this is closure  */
var data = closure(); // now data contain the LexicalEnv function details
console.log(data); // 7 a is inside lexicalEnv fxn
//..... let say lot of code then data() call it still remember the function + lexical env so that why it print it..
data(); // still remember a because of closure

//Closure Example 2:
function checkX() {
	var id = 12;
	function checkY() {
		// id is a reference to it not the value
		console.log(id, " id is the lexical of checkX ");
	}
	id = 1560;
	return checkY;
}

var zee = checkX();
console.log(zee);
zee(); //OP -> 1560 id is the lexical of checkX // still remember the function + it's lexical Env

// Closure Example 3:
/* 
here closure is form from 
Parent function --> to child Function --> to newChild function + lexical Env
remember to all it data function and variable
*/
function helloWorld() {
	var rollNo = 190;
	function computerClass() {
		var st = 7;
		function dsa() {
			console.log("rollNo: ", rollNo, " studentId: ", st); // Op => rollNo:  190  studentId:  71
		}
		st = 71;
		dsa();
	}
	computerClass();
}
helloWorld();

// Example 4 CLosure:-

//Due to Closure it will print 6 for 5 time..
function x() {
	// quick fix make it let i = 1 // bcz let is block scope will create
	// every loop a new variable of block scope
	for (var i = 1; i <= 5; i++) {
		setTimeout(function store() {
			console.log(i); // due to remember the reference of i
		}, i * 1000);
	}
	console.log("new data print");
}
// x();

//Closure Example 5:
// Without using let we solve above problem by using closure
function xee() {
	for (var i = 1; i <= 5; i++) {
		function close(i) {
			setTimeout(function () {
				console.log(i);
			}, i * 1000);
		}
		close(i);
	}
}
xee();
/* will print in the
1
2
3
4
5
*/
```

### JavaScript Closures - Explanation and Examples

```js
JavaScript that allow functions to "remember" their lexical scope even when executed outside that scope

Basic Closure Examples
//Example 1: Simple Closure
function outer() {
    var a = 100;
    function inner() {
        console.log("a is the lexical env of outer", a);
    }
    return inner;
}

var me = outer();
me(); // Output: "a is the lexical env of outer 100"
//Explanation: The inner function maintains access to the variable a from its parent scope even after outer has finished executing

//Example 2: Closure with let
function outer2() {
    let a = 20;
    function inner2() {
        console.log("a is of lexical Env of outer2", a);
    }
    return inner2;
}
var store = outer2();
store(); // Output: "a is of lexical Env of outer2 20"
//Explanation: Works the same as Example 1, demonstrating that closures work with let declarations
//just as they do with var.

//Example 3: Parameter in Closure
function outer3(b) {
    let a = 67;
    function inner3() {
        console.log(a, "RemFxLexEnv", b, "pass by value");
    }
    return inner3;
}
outer3("PassData")(); // Output: "67 RemFxLexEnv PassData pass by value"
// Explanation: The parameter b is also captured in the closure along with variable a,
// showing that function parameters are part of the lexical environment.

//Example 4: Nested Closures
function Exit() {
    var c = 20;
    function outer4(b) {
        function inner4() {
            console.log(a, "a", "b", b, "c", c);
        }
        let a = 10;
        return inner4;
    }
    return outer4;
}

var nestedOuter = Exit()(99);
nestedOuter(); // Output: "10 a b 99 c 20"
//Explanation: Demonstrates multiple levels of closure - inner4 has access to:
// Its own variables
// outer4's variables (a and b)
// Exit's variables (c)

//Example 5: Scope Chain in Closures
function Exit2() {
    var c = 30;
    function outer5(b) {
        function inner5() {
            console.log(a, b, c);
        }
        let a = 20;
        return inner5;
    }
    return outer5;
}
let a = 77;
var nesterOuter2 = Exit2()(0);
nesterOuter2(); // Output: "20 0 30"
//Explanation: Shows how JavaScript looks for variables in the scope chain.
// The local a in outer5 shadows the global a.
```

## Advantages of Closures

```js
/*
1 >Data Privacy / Encapsulation: Create private variables that can't be accessed from outside
2> Dynamic Function Creation: Create functions based on input parameters
3> Memoization: Cache expensive function calls for performance
4> Currying: Create partial function applications
*/
//	Data Hiding/Encapsulation
// 	Basic Counter Without Closure
var counter = 0;
function incrementCounter() {
	counter++;
}
//Problem: counter is accessible and modifiable from anywhere.

//Counter With Closure
function counter() {
	var count = 0;
	function incrementCounter1() {
		count++;
	}
	return incrementCounter1;
}
var myCounter = counter();
myCounter();
//Advantage: count is now private and can only be modified through the returned function.

//Enhanced Counter Example
function jCounter() {
	var count = 0;
	function incrementCounter2() {
		count++;
		console.log(count);
	}
	return incrementCounter2;
}

var storeCounter = jCounter();
storeCounter(); // Output: 1
storeCounter(); // Output: 2
//Explanation: This pattern allows creating multiple independent counters,
// each with their own private count variable.

//Multiple Independent Counters
var counter2 = jCounter();
counter2(); // Output: 1 (new counter starts from 0)
counter2(); // Output: 2

storeCounter(); // Output: 3 (original counter continues)
//Each call to jCounter() creates a new independent counter
//counter2 is completely separate from storeCounter

//Enhanced Counter with Methods
function CounterCheck() {
	var count = 0;
	this.increment = function () {
		count++;
		console.log(count, "counter increment");
	};
	this.decrement = function () {
		count--;
		console.log(count, "counter decrement");
	};
}
// new key word help to create constructor
// It like constructor function
// help of constructor we created invoked new counter
var count1 = new CounterCheck();
count1.increment(); // Output: "1 counter increment"
count1.increment(); // Output: "2 counter increment"
count1.decrement(); // Output: "1 counter decrement"
// Uses constructor function pattern for object creation
// Provides both increment and decrement methods
// Maintains private state (count) while exposing controlled interface
```

### Disadvantages of Closures in JavaScript

```js
/*
1. Memory Consumption
Issue: Closures maintain references to their outer function's variables, preventing garbage collection.
2. Performance Overhead
Issue: Accessing variables through closures is slightly slower than accessing local variables.
3. Unexpected Behavior
Issue: Closures capture variables by reference, not value, which can lead to unexpected results.
*/
for (var i = 0; i < 3; i++) {
	setTimeout(function () {
		console.log(i); // Will print 3 three times!
	}, 100);
}
//Solution: Use let instead of var or create a new scope:
for (let i = 0; i < 3; i++) {
	// let creates block scope
	setTimeout(function () {
		console.log(i); // Prints 0, 1, 2 as expected
	}, 100);
}
/*
4. Debugging Complexity
Issue: Closures can make stack traces harder to read and debug.
5. Over-Encapsulation
Issue: Excessive use of closures can make code harder to understand and test.
*/
```

## Garbage Collection in JavaScript

```js
/*
Garbage collection (GC) is JavaScript's automatic memory management system that frees up memory by reclaiming space occupied by objects that are no longer needed by the program.

JavaScript uses a mark-and-sweep algorithm for garbage collection

1> Mark: The GC marks all objects that are still reachable from the root (global variables, currently executing functions, etc.)
2> Sweep: It then sweeps through memory and deallocates memory for unmarked objects
*/
// Example 1: Basic Garbage Collection
function createObject() {
	let obj = { data: "temporary" };
	// obj is eligible for GC after function completes
}
createObject();
// Explanation: The obj is automatically garbage collected after createObject() finishes because nothing references it anymore.
```

#### Example 2: Objects Kept Alive by References

```js
let globalObj;

function keepAlive() {
	let obj = { data: "important" };
	globalObj = obj; // Now referenced globally
}
keepAlive();
// Explanation: obj is NOT garbage collected because
// globalObj maintains a reference to it.

/* Key point to remember for GC:
	1> Objects are garbage collected when they become unreachable
	2> Closures, global variables, and forgotten references can prevent GC
	3> Modern browsers use efficient GC algorithms that minimize performance impact
	4> The best practice is to nullify references when you're done with large objects
*/
```

## Diving Deep into Function

```js
/*  
    1 What is Function statements ?
    2 What is Function Declaration ?
    3 What is Function Expression ?
*/
// 1&2 > Function statement and declaration is same things..
function Home() {
	console.log("Welcome to Home");
}
Home(); // Welcome to Home

// 3 > Function Expression: act like a value
var Express = function () {
	console.log("act like value ");
};
Express();
```

### Major difference between them

```js
/* 
The major difference between above is in Hosting..
If we call  
Home() this will work
Express() but this will throw error Express is not define bcz of hosting
it treat as variable
which is undefine, bcz of not initialize at the same time, so u can't call undefine..
*/
```

## what is Anonymous Function ?

```js
/* 
Function without name is Anonymous function, it don't have there identity
function (){
}
what is the use case of this function if we can't create like above
Anonymous function are use in the place where function are used as a VALUE
*/
// 3 Name function Expression
var i = function xyz() {
	//xyz work inside the local env..
	console.log("i is check here ", xyz);
};
i();
// xyz();// this will give reference error bcz it created inside the local env or scope
```

### 4 Parameters & Arguments in JS ?

```js
/*When declaring a function, you specify the parameters. 
However, when calling a function, 
you pass the arguments corresponding to the parameters.
*/
// taking as parameters..
var jsLead = function (Parameters1, Parameters2) {
	console.log(Parameters1, Parameters2);
};
//passing arguments
jsLead("argument", 2); // argument 2
```

### 5 First-Class-Function && First-class-Citizens

```js
/*
   In JavaScript, functions are treated like any other variable. They can be:
	1> Assigned to variables
	2> Passed as arguments
	3> Returned them from other functions as a values
   is know as F-C-F.
*/
// 1. Assigning function to variable
const greet = function (name) {
	return `Hello, ${name}!`;
};
console.log(greet("Alice")); // "Hello, Alice!"

// 2. Passing function as argument
function sayHi(greetingFn, name) {
	console.log(greetingFn(name));
}
sayHi(greet, "Bob"); // "Hello, Bob!"

// 3. Returning function from function
function createGreeter() {
	return function (name) {
		return `Hey there, ${name}!`;
	};
}
const casualGreet = createGreeter();
console.log(casualGreet("Charlie")); // "Hey there, Charlie!"
```

### 6. Callback Functions

```js
/*
Concept: Functions that are passed as arguments to other functions to be executed later 
(usually after some operation completes)
*/

// 1 >Simple callback example
function processUserInput(callback) {
	const name = prompt("Please enter your name");
	callback(name); // callback is refer to greetUser function
}
function greetUser(name) {
	console.log(`Welcome, ${name}!`);
}
processUserInput(greetUser); // Calls greetUser after getting input

//2> more example of callback
function cb(newCb) {
	console.log("cb called"); //1 cb called
	newCb();
}
cb(function newCb() {
	console.log("newCb called"); //2 newCb called
});

/*
Callback function: JS is a synchronous and single-threaded language, which mean it perform
one task at a time in a specify manner,
But due to the callback we can do async task in JS which make JS Asynchronous....
*/

// Asynchronous callback example (common in JS)
setTimeout(function () {
	console.log("This runs after 2 seconds");
}, 2000); //3 This runs after 2 seconds
```

## 7 EVENT LOOP in JS

```js
/*
The Event Loop is a core concept in JavaScript that enables asynchronous behavior, 
even though JS is single-threaded. It manages how code is executed, 
especially when dealing with asynchronous operations like setTimeout, fetch, or Promise

Event Loop Continuously checks if the Call Stack is empty, then moves tasks from 
the Callback Queue or Microtask Queue into the Call Stack.
*/

/*
Web APIs access by [global object] window into the callstack.
Event loop checks if callStack is empty then check then Higher Priority Task[Micro-task]
Queues if value is there then pass to callstack, if Micro-task Queues is empty then checks
callback Queue[CBT] all this check via EVENT LOOP 
*/

// Example of EVENT LOOP CODE :
//All setTimeOut is a part of callback Queue not micro-task Queue
//All the callback function which come through promises will go inside Micro-task Queue
/*
----------Excepted OUTPUT-----------
Start
END
CBF netflix
CBT SetTimeOut
*/
console.log("Start");
setTimeout(function cbT() {
	console.log("CBT SetTimeOut");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
	console.log("CBF netflix");
});

console.log("END");
```

## 8 What is Starvation in JS ?

```js
/*
Starvation happens when the Microtask Queue continuously generates new microtasks, preventing the Callback Queue (Macrotask Queue) from ever executing. This blocks tasks like setTimeout, setInterval, or UI rendering indefinitely.
*/
function recursiveMicrotask() {
	Promise.resolve().then(() => {
		console.log("Microtask executed!");
		recursiveMicrotask(); // Keeps adding new microtasks
	});
}

// Start the infinite microtask loop
// recursiveMicrotask();

// This setTimeout will NEVER run due to starvation
setTimeout(() => {
	console.log("This will never log!");
}, 0);
```

## SETTIMEOUT HAS A TRUST-ISSUE ?

```js
// setTimeout have a TRUST-ISSUE in JS ?
/* 
In theory we say as a concurrency model in JS
*/
function callBack() {
	console.log("This is about setTimeout issue ");
}

setTimeout(callBack, 5000); // this will wait for no second

//Op will come as
/*
Start
End
Hello World
This is about setTimeout issue
*/

console.log("Start");
setTimeout(function check() {
	console.log("Hello world");
}, 3000);
console.log("End");
```

## High Order Function [ H-O-F ] ?

```js
// JS is also know as Functional Programming
// In JS functional programming is not possible without H-O-F(Higher order function)

// 1> What is HOF in JS
// A function that takes another function as an argument OR
// returns a function is called a Higher-Order Function.

// Own H-O-F created:-

// Higher-Order Function
function calculator(a, b, operation) {
	return operation(a, b);
}

// Functions to pass
function add(x, y) {
	return x + y;
}
function multiply(x, y) {
	return x * y;
}

// calculator is HOF because it accepts another function (operation) as a parameter.
console.log(calculator(5, 3, add)); // Output: 8
console.log(calculator(5, 3, multiply)); // Output: 15

// Example
function x() {
	console.log("Welcome to JS Function");
}
function y(e) {
	e();
}
y(x); // y take another function [x] to as parameter

//SOME BUILD Array[] H-O-F:
/*
These are built-in HOFs that take a function (callback) as an argument:--
map() – Transforms each element and returns a new array.
filter() – Filters elements based on a condition, and return updated array
reduce() – Reduces array to a single value (e.g., sum).
forEach() – Loops through each element (but doesn’t return new array).
find() – Returns the first element that matches a condition.
findIndex() – Returns index of the first element that matches.
every() – Checks if all elements pass the test (returns true/false).
some() – Checks if at least one element passes the test.
sort() – Sorts elements (based on comparator function).
flatMap() – Maps and flattens in a single step.
*/

// Normal function use calculation
//calculate the area of all 5 circle which is given as a radius in an array
const radius = [3, 4, 6, 8, 1];
const calArea = function (radius) {
	const op = [];
	for (let i = 0; i < radius.length; i++) {
		op.push(Math.PI * radius[i] * radius[i]);
	}
	return op;
};
console.log(calArea(radius));

// 1 Using HOF ==> map()
// map is use for transform the array and return value in an form of array
const area = radius.map(areaCheck);
function areaCheck(cal) {
	return Math.PI * cal * cal;
}
console.log(area, " this is 2nd map ans");

// 2 Using HOF ==> filter()
// It is use to filter the value inside the array, return value in array
const ans = [5, 1, 3, 2, 6];

const ansOp = ans.filter(solutionFilter);
function solutionFilter(input) {
	return input % 2;
}

console.log(ansOp);

// 3 Reduce()
// This is use in place where you have to take all the element
// in array and come up with the single value[ans] out of them
// Sum all radius
const sumRadius = radius.reduce(sumIt);

function sumIt(radiusIt, ansIt) {
	radiusIt = radiusIt + ansIt;
	return radiusIt;
}

console.log(sumRadius);

// or use like this
const outputReduce = ans.reduce((acc, itrCurrent) => {
	acc += itrCurrent;
	return acc;
}, 0);
console.log(outputReduce, "here use as arrow fnx");

// some good more example:-
const user = [
	{ fistName: "Dm", lastName: "Singh", age: 27 },
	{ fistName: "Rohit", lastName: "Sharma", age: 39 },
	{ fistName: "Niraj", lastName: "Yadav", age: 26 },
];

const arrayAns = user.reduce((acc, cal) => {
	if (cal.age < 30) {
		acc.push(cal.fistName);
	}
	return acc;
}, []);

console.log(arrayAns);
```

## Variable Shadowing

```js
// Variable
/*
    var,let,const 
*/
console.log(b, " this is b "); // hosting work here
let a = 10;
// console.log(a," this is a "); // 10 this is a
var b = 20;

//From the hosting till the value assign the time period is know as TDZ
// when ever you try to access a variable  inside a TDZ it will give Reference Error

// var  is a global & functional scope
// let is a block scop
// const is a block scope

// above all scope new concept called variable shadowing

// Variable shadowing occurs when a variable declared in a
// local scope has the same name as a variable in an outer scope,
// effectively "hiding" the outer variable within the inner scope.

// 1 Global vs Local Shadowing
let message = "Hello, World!"; // Global variable

function greet() {
	let message = "Hi there!"; // Shadows the global 'message'
	console.log(message); // "Hi there!" (local scope takes priority)
}

greet();
console.log(message); // "Hello, World!" (global scope unaffected)

// 2. Block Scope Shadowing (let, const)
let count = 10; // global

if (true) {
	let count = 20; // Shadows the outer 'count'
	console.log(count); // 20 (block-scoped variable)
}

console.log(count); // 10 (outer variable remains unchanged)

// 3 let is block scope
let fruit = "apple";
console.log(fruit, " this is in Global scope"); // apple this is in Global scope
{
	//This is called TDZ error(Due to hoisting) not able to access global
	// console.log(fruit, "this is in Block scope"); //  ReferenceError: Cannot access 'fruit' before initialization
	let fruit;
	console.log(fruit, "Block scope after declaration of variable"); // undefine
	fruit = "orange"; // update the variable data
	{
		console.log(fruit, "Inside 2 Block scope"); // orange Inside 2 Block scope
	}
	console.log(fruit, "Block scope after initiation of variable");
}
console.log(fruit, " In the global scope at end");

// Variable Shadowing

// 1> Example
let game = "cricket"; // global
console.log("global game: ", game);
{
	// block scope
	// this inner value did the shadowing to the outer value
	let game;
	console.log(game, " this is block scope game"); // undefine this is block scope game
	game = "football";
}

var book = "CS";
console.log(book, " this is global Book");
{
	var book = "English";
	console.log(book, " this is block scope ");
}
console.log(book, " updated global scope");
```

## JavaScript const and Arrays/Objects Behavior

```js
// const never changes
const details = "Yes I declare and initializer same time";
// details = "all me"; // wrong can't reassign const primitives
console.log(details, "const value"); // later u can not redeclaration of const

// but in case of array and object it won't happen
// bcz array is the object in JS
const arr = [1, 2, 3, 4, 5];
arr.push(12); // Allowed - modifying content not reassignment
console.log(arr, "this is array in const declare");
arr.shift(); // remove from beginning
console.log(arr);

// Adding Properties to Arrays
// example
let ans = [1, 2, 3, 4, 5];
ans.mypro = "checkMe"; // Adding custom property
console.log(ans);
ans.print = function () {
	console.log("Hello Fnx"); // Adding method
};
console.log(ans);

// Iterating with for-in
// for in loop
for (let key in ans) {
	console.log(key, ":", ans[key]);
}
```

## CALLBACK HELL ?

```js
// Callback Function:
/* 
2 Issue it create
1> CallbackHell
2> Inversion of control
*/

/*
JS is a synchronous-single thread language it can run or just do one thing at a time

Callbacks in JavaScript: Bridging Synchronous and Asynchronous Worlds

In JS it's wait for Nothing and give immediately output
so we use callback with asynchronous for waiting to response 
so, this make JS to explore with use asynchronous world using callback Function
*/

console.log("Divyansh");

setTimeout(function () {
	console.log("JavaScript DM");
}, 5000);

console.log("Friday");

// 1. What is CallBack Hell ?
/*
One callback inside another callback inside 
another callback then it make a callbackHell, and code start increasing horizontal
more compar to vertically called callbackHell.
This type pfr code can't be maintainable & readable
STRUCTURE IS ALSO KNOW AS PYRAMID OF DOOM
*/

// 2 Inversion of control:-
/*
Another problem while using callback, this problem mean 
you loose the control of your code when we use callback.
This above process know as Inversion of control
*/
```

## PROMISE IN JS ?

```js
/*

Promise is asynchronous operations:

Promise is an object representation of an Eventual completions or failure of 
a asynchronous operations.

A promise is an object that encapsulates the result of an asynchronous operation.

A promise object has a state that can be one of the following:-
    1>Pending --- in this time undefined
    2>Fulfilled with a value
    3>Rejected for a reason

    As soon as promise Fulfilled/Rejected update the empty object
    which assigned undefined in pending state...

    Promise resolved only once and immutable

    using .then() we can control when we call the callback function
*/

// Why JavaScript promises?

function getUsers() {
	return [
		{ username: "john", email: "john@test.com" },
		{ username: "jane", email: "jane@test.com" },
	];
}
// const users = [
//      { username: 'john', email: 'john@test.com' },
//      { username: 'jane', email: 'jane@test.com' },
//   ]
function findUser(username) {
	const users = getUsers();
	const user = users.find((user) => user.username === username);
	return user;
}

console.log(findUser("john")); //  { username: 'john', email: 'john@test.com' }

function findUser2(username) {
	const users = getUsers2();
	const user = users.find((user) => user.username === username);
	return user;
}

//the getUsers() function will have a delay.
function getUsers2() {
	let users = [];

	// delay 1 second (1000ms)
	setTimeout(() => {
		users = [
			{ username: "john", email: "john@test.com" },
			{ username: "jane", email: "jane@test.com" },
		];
	}, 1000);

	return users;
}
console.log(findUser2("john")); // undefine - bcz won't wait

// promise is best ways to work on above case:

// Creating a promise sample structure
// To create a promise object, you use the Promise() constructor:
const promise = new Promise((resolve, reject) => {
	// contain an operation
	// ...

	// return the state
	if (success) {
		resolve(value);
	} else {
		reject(error);
	}
});

const promise1 = Promise.resolve("Welcome to the World ");
promise1
	.then((data) => {
		console.log("Promise success: " + data);
	})
	.catch((error) => {
		console.log("Promise failed: " + error);
	});

const cart = ["book", "iPhone", "Mac mini", "Mac 4 Pro"];

//Two api is asynchronous
//api- this api take cart item to it will return us  orderId
createOrder(cart); // RETURN orderId
proceedToPayment(orderID);

//if we try with callback we pass this function to createOder function like below
function callback() {
	proceedToPayment(orderID);
}

// here fist createOrder will create orderID then call to callback function
// once the order is created
// here inversion of control problem rise
createOrder(cart, function (orderID) {
	proceedToPayment(orderID);
});

// Above issue resolve by promise
// promiseCreate = {} assume as empty object
const promiseCreate = createOrder(cart);

// {data : undefine} ==> pending state
// {data : orderDetails} ==> Fulfilled state
promiseCreate.then(function (orderID) {
	proceedToPayment(orderID);
});

const JSON_API = "https://jsonplaceholder.typicode.com/todos/1";
const userNew = fetch(JSON_API);
console.log(userNew); // promise as an object return with fulfilled

// need to use callback fnx
userNew.then((data) => {
	console.log(data, "information");
});

// Promise-Chaining - always return the method for handling it.

//Promise chaining Example 1
createOrder(cart)
	.then(function (orderID) {
		return proceedToPayment(orderID);
	})
	.then(function (paymentInfo) {
		return showOrderSummary(paymentInfo);
	})
	.then(function (paymentInfo) {
		return updateWalletBalance(paymentInfo);
	});

// Promise-Chaining Example 2
//producer maker
function validateCartData() {
	return false;
}
function createOrderApi(cart) {
	// creating promise using constructor:
	// Promise() take 2 things as a asynchronous => resolve reject
	const pr = new Promise(function (resolve, reject) {
		// createOrderApi
		// validateCart check
		// orderId generate
		if (!validateCartData(cart)) {
			const err = new Error("Cart is not valid information");
			reject(err);
		}
		// logic for createOrderApi orderID
		const orderId = "646546.6";
		if (orderId) {
			resolve(orderId);
		}
	});
	return pr;
}

// return promise
function proceedToUPI(orderID) {
	return new Promise((resolve, reject) => {
		resolve("Payment successfully");
	});
}

const promiseCheck = createOrderApi(cart);
promiseCheck
	.then(function (orderID) {
		console.log(orderID);
		return orderID;
	})
	.then(function (upiOrderId) {
		return proceedToUPI(upiOrderId);
	}) // .then(function (upiOrderId) {
	// promise hell here....
	// 	return proceedToUPI(upiOrderId).then((paymentInfo) => {
	// 	console.log(paymentInfo);
	// });
	// })
	.then((paymentInfo) => {
		console.log(paymentInfo);
	})
	.catch(function (error) {
		console.log(error.message);
	})
	.then(function () {
		console.log("No matter what i will definitely be called");
	})
	.catch(function (error) {
		console.log(error.message);
	});
```

## ASYNC AWAIT IN JS

```javascript
/*
Async functions
what is async function ?
what is await ?
How  async work behind the scenes ?
Error Handling
Interview
Async await vs Promise.then/.catch 
*/

//create a promise
const pr = new Promise((resolve, reject) => {
	return resolve("I am res successfully!!");
});

console.log(pr);

//async fnx always return a promise
async function getInfo() {
	// return new Promise();
	// return "MAC_book"; // take this value and wrap inside promise then return to fnx
	return pr;
}

const ans = getInfo();
console.log(ans);
ans.then((res) => {
	console.log(res);
});

// using await with async function ?
// this combo is use to handle Promises
// why do we need async await ? how do we handle promises ?

const prObj = new Promise((resolve, reject) => {
	setTimeout(() => {
		return resolve("I an handling promise via async/await");
	}, 10000);
});
// await can only be use in async function
async function getCheck() {
	const val = await prObj;
	// console.log(val);
}
getCheck();

//Diving deep into async/await ?

const prObj2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		return resolve("I an handling promise via async/await 2");
	}, 10000);
});

// await can only be use in async function
async function getCheck2() {
	console.log("I am promise"); // 1st print
	//JS Engine is waiting for promise to resolved then process to next
	const val = await prObj; // 10sec
	// after 10sec below will print
	console.log("It will print immediately with the promise return value"); // 2nd print
	console.log(val); // I an handling promise via async/await 2 // 3line print with 2one

	const val2 = await prObj2; //5 sec print after above will need to print first in 10sec
	// after 10sec below will print
	console.log("It is 2nd promise result checked"); // 4line
	console.log(val2); //I an handling promise via async/await 2 // 5line print with 4one
}

getCheck2();

// Real world example of async/ await ?
const API_URL_GITHUB = "https://api.github.com/users/divyansh-singh08";
async function realExample() {
	const data = await fetch(API_URL_GITHUB);
	console.log(data); // It's type of Promise

	// fetch() ==> return promise resolve it will given Response object back
	// This Response object has a body which is a readable Stream
	// readable stream to convert into json ==> u need to use Response.json()
	// Response.json() ==> this .json() is again a promise
	// when above promise is resolve it will give the jsonValue [result]
	// fetch().then((res) => res.json()).then((res) => console.log());

	const jsonValue = await data.json();
	console.log(jsonValue);
}
realExample();

// Error Handling with Promise/async/await
// here  we use try catch to handle error not catch()
async function realExample2() {
	try {
		const data2 = await fetch(API_URL_GITHUB);
		console.log(data2);
		const jsonValue = await data2.json();
		console.log(jsonValue);
	} catch (err) {
		console.log(err);
	}
}
realExample2();
// this is older ways
realExample2().catch((err) => {
	console.log(err);
});
```
