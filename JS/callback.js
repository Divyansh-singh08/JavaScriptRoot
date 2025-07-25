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

// Payment processing system with inversion of control
function processPayment(paymentData, callback) {
	validatePayment(paymentData, function (isValid) {
		if (!isValid) {
			return callback(new Error("Invalid payment"));
		}

		chargeCreditCard(paymentData, function (chargeResult) {
			if (!chargeResult.success) {
				return callback(new Error("Charge failed"));
			}

			updateDatabase(chargeResult, function (dbError) {
				callback(dbError);
			});
		});
	});
}

const userPayment = {
	cardNumber: "4111111111111111",
	expiry: "12/25",
	cvv: "123",
	amount: 99.99,
	currency: "USD",
	billingAddress: {
		street: "123 Main St",
		city: "New York",
	},
};

// Usage - we surrender control to processPayment
processPayment(userPayment, function (err) {
	if (err) {
		// We don't know where exactly the error occurred
		console.error("Something failed:", err.message);
		return;
	}
	console.log("Payment successful");
});
// TO solve this above problem we come to know about Promise
