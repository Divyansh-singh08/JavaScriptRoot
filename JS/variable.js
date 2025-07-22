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
