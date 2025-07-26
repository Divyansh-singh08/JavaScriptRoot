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

// console.log(pr);

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
// realExample();

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
realExample2().catch((err) => {
	console.log(err);
});
