//JS is also know as Functional Programming
//Im JS functional programming is not possible without H-O-F(Higher order function)

// 1> What is HOF in JS
//A function that takes another function as an argument OR
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

//calculator is HOF because it accepts another function (operation) as a parameter.
console.log(calculator(5, 3, add)); // Output: 8
console.log(calculator(5, 3, multiply)); // Output: 15

//more example
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
// map is use for transform the array and return value in array
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
