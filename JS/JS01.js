//1 What is Execution Context ?
/* 
Execution Context:
It is said to be as JS refer to the  environment in which JS code execute
It consist of variable function object and other information that js tract and manage
It work on 2 phase:
--Creation phase
--code execution phase
*/

//2 What is Lexical Scope ?
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

// 3. What is Hosting in JS ?
/*
It is a phenomena in JS by which we can access variable and function even before initialization,
and we don't get error[ we get undefine mostly in case of variable] 
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

// What is Closures ?
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
