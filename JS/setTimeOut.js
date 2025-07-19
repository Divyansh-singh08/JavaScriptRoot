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
