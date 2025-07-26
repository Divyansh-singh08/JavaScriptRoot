// Promise
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
// createOrder(cart); // RETURN orderId
// proceedToPayment(orderID);

//if we try with callback we pass this function to createOder function like below
// function callback() {
// 	proceedToPayment(orderID);
// }

// here fist createOrder will create orderID then call to callback function
// once the order is created
// here inversion of control problem rise
// createOrder(cart, function (orderID) {
// 	proceedToPayment(orderID);
// });

// Above issue resolve by promise
// promiseCreate = {} assume as empty object
// const promiseCreate = createOrder(cart);

// {data : undefine} ==> pending state
// {data : orderDetails} ==> Fulfilled state
// promiseCreate.then(function (orderID) {
// 	proceedToPayment(orderID);
// });

const JSON_API = "https://jsonplaceholder.typicode.com/todos/1";
const userNew = fetch(JSON_API);
console.log(userNew); // promise as an object return with fulfilled

// need to use callback fnx
userNew.then((data) => {
	console.log(data, "information");
});

//Promise chaining
// createOrder(cart)
// 	.then(function (orderID) {
// 		return proceedToPayment(orderID);
// 	})
// 	.then(function (paymentInfo) {
// 		return showOrderSummary(paymentInfo);
// 	})
// 	.then(function (paymentInfo) {
// 		return updateWalletBalance(paymentInfo);
// 	});

// Promise-Chaining

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
