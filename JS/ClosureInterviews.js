//Interview Closure Code snippet...

// 1
function outer() {
	var a = 100;
	function inner() {
		console.log(" a is the lexical env of outer ", a);
	}
	return inner;
}

var me = outer();
me(); // a is the lexical env of outer  100

// 2
function outer2() {
	let a = 20;
	function inner2() {
		// let still work due to closure feature [inner is remember]
		console.log(" a is of lexical Env of outer2 ", a);
	}
	return inner2;
}
var store = outer2();
store(); //a is of lexical Env of outer2  20

// 3
/*b is also treated in a same ways as it is outer Env part for the closure */
function outer3(b) {
	let a = 67;
	function inner3() {
		console.log(a, "RemFxLexEnv", b, "pass by value");
	}
	return inner3;
}
outer3("PassData")();

// 4
/*
Nested outer fxn closure
*/
function Exit() {
	var c = 20;
	function outer4(b) {
		function inner4() {
			console.log(a, "a", "b", b, "c", c);
		}
		let a = 10; // this a is reference to inner4
		return inner4;
	}
	return outer4;
}

var nestedOuter = Exit()(99); // Exit and outer4 call from here
// console.log(nestedOuter);
nestedOuter(); // inner4 is call from here

//5
function Exit2() {
	var c = 30;
	function outer5(b) {
		function inner5() {
			console.log(a, b, c);
		}
		let a = 20; // this a is reference to inner4 this is in scope level
		return inner5;
	}
	return outer5;
}
/*let say if there is no let a = 20 in outer5 in line 65 then  from global a will work*/
let a = 77; // this is in global level
var nesterOuter2 = Exit2()(0);
nesterOuter2();

//Advantage of the Closure:-
/*
    1. Data Privacy / Encapsulation (Private Variables)
    2. Closures help in creating dynamic functions based on input.
    3. Memoization (Performance Optimization): Closures help in caching expensive function calls.
    4. Currying (Partial Function Application)
*/
/* 
We have some variable that should be hidden from the other function or other piece of code
can't access it know as Encapsulation or data hiding
*/
var counter = 0;
function incrementCounter() {
	counter++;
}
//1. Data Hiding/Encapsulation Example
//to hide above code use closure
function counter() {
	var count = 0;
	function incrementCounter1() {
		count++;
	}
}

// console.log(count);//give error count is not define

//2 Ex of Encapsulation
function jCounter() {
	var count = 0;
	function incrementCounter2() {
		count++;
		console.log(count);
	}
	return incrementCounter2;
}

var storeCounter = jCounter();
storeCounter(); // increment by 1
storeCounter(); //again increment by 1

var counter2 = jCounter();
counter2(); // this is new counter from start again

//3 Ex Good ways of increment and decrement closure
function CounterCheck() {
	var count = 0;
	this.increment = function () {
		count++;
		console.log(count, " counter increment ");
	};
	this.decrement = function () {
		count--;
		console.log(count, " counter decrement ");
	};
}
// It like constructor function
// help of constructor we created invoked new counter
var count1 = new CounterCheck();
count1.increment();
count1.decrement();
