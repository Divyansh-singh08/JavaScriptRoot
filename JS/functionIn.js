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

// taking as parameters..
var jsLead = function (Parameters1, Parameters2) {
	console.log(Parameters1, Parameters2);
};
//passing arguments
jsLead(1, 2);

// 5 First-Class-Function && First-class-Citizens
/*
Passing another function into a function argument is know as F-C-F.
or we can return it too.
*/
var FCF = function (param1) {
	console.log(param1);
	// return function xyz() {};
};
FCF(function () {});

//return F-C-F
var FCF = function () {
	return function xyz() {};
};
// return value of xyz is store in FCF
console.log(FCF());
