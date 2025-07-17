// Diving Deep into Function

/*  
    1 What is Function statements ?
    2 What is Function Declaration ?
    3 What is Function Expression ?
*/

// 1&2 > Function statement and declaration is same things..
function Home() {
	console.log("Welcome to Home");
}
Home();

// 3 > Function Expression: act like a value
var Express = function () {
	console.log("act like value ");
};
Express();
/* 
The major difference between above is in Hosting..
If we call  
Home() this will work
Express() but this will throw error Express is not define bcz of hosting
it treat as variable
which is undefine, bcz of not initialize at the same time, so u can't call undefine..
*/

// 2 what is Anonymous Function ?
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

// 4 Parameters & Arguments in JS ?
/*When declaring a function, you specify the parameters. 
However, when calling a function, 
you pass the arguments corresponding to the parameters.
*/
// taking as parameters..
var jsLead = function (Parameters1, Parameters2) {
	console.log(Parameters1, Parameters2);
};
//passing arguments
jsLead("argument", 2);

// 5 First-Class-Function && First-class-Citizens
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

// 6. Callback Functions

/*
Concept: Functions that are passed as arguments to other functions to be executed later 
(usually after some operation completes)
*/
// Simple callback example
function processUserInput(callback) {
	const name = prompt("Please enter your name");
	callback(name); // callback is refer to greetUser function
}

function greetUser(name) {
	console.log(`Welcome, ${name}!`);
}

processUserInput(greetUser); // Calls greetUser after getting input

//more example of callback
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

// 7 This is EVENT LOOP CHECK CODE :
//setTimeOut is a part of callback Queue not micro-task Queue
/*
OUTPUT:
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

// 8 STARVATION
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
