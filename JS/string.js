//  JavaScript String

// 1. String Datatype
// The string is a primitive data type in javascript.
// Strings in Javascript can be created by two methods
/* 
as primitives from string literals
as object using string() constructor
*/

//Creating strings as primitives:
const str1 = "String within double ticks";
const str2 = "String within single ticks";
const str3 = `String within backticks`;
console.log(str1, str2, str3);
// Note: The string created using backticks is known as template literal.

// Creating strings as an object
/*
Strings in javascript can be created by calling the String() constructor with the 
string as the parameter. The String() constructor is called using the new keyword and 
the value is assigned to a variable or constructor.
*/
const str4 = new String(
	"This string object is created by calling the constructor"
);
console.log(str4);

// 2. By using charAt() method:
//The charAt() method returns a new string consisting of the single string of that index base
const str = "JavaScript is a Dynamic-based programming language";
console.log(str.charAt(0)); //output: J
console.log(str.charAt(4)); //output: S

// 3. By using Bracket Notation
const str5 = "JavaScript is a JIT programming language";
console.log(str5[16]); //output: J
console.log(str5[5]); //output: c

//4. String.fromCharCode()

/*
String.fromCharCode()  is a static method that creates a string from 
a sequence of Unicode code points (UTF-16 code units). ASCI CODE
*/

// Single character
console.log(String.fromCharCode(65)); // "A"
console.log(String.fromCharCode(9731)); // "☃" (snowman symbol)
// Character that requires surrogate pair (code point 0x1F600 for 😀)
const smileyFace = String.fromCharCode(0xd83d, 0xde00);
console.log(smileyFace); // "😀"
// Basic Multilingual Plane characters (same as fromCharCode)
// Writing modern JavaScript (ES6+)
console.log(String.fromCodePoint(65)); // "A"
// console.log(String.fromCodePoint(0x12FFFF));

// 5. JavaScript String Methods
/* 
charAt()       =>	Finds the character present at a particular index in the string.
concat()       =>  	Concatenates the string arguments.
indexOf()      =>	returns the index of the first occurrence of the passed value.
lastIndexOf()  =>	returns the index of the last occurrence of the passed value.
toLowerCase()  =>	converts all the characters of the string into lowercase letters.
toUpperCase()  =>	converts all the characters of the string into uppercase letters.
split()        =>	divides the given string into an ordered list of substrings.
trim()	       =>   removes additional spaces around the string.
toString()	   =>   returns a string object as a string.
substring()	   =>   extracts the characters between two indices of a string and returns a substring.
slice()	       =>   extracts a section of a string and returns it as a new string, without modifying the original string.
*/

let string1 = "Javascript is a programming language";
console.log(string1.charAt(2)); //output: v

console.log(string1.concat(", ", "as well as one of the most used language."));
//output: Javascript is a programming language, as well as one of the most used language

console.log(string1.indexOf("s")); //output: 4
console.log(string1.lastIndexOf("a")); //output: 33

let newStr1 = string1.toLowerCase();
console.log(newStr1);
//output: javascript is a programming language

let newStr2 = string1.toUpperCase();
console.log(newStr2);
//output: JAVASCRIPT IS A PROGRAMMING LANGUAGE

console.log(string1.split(" "));
//output: [ 'Javascript', 'is', 'a', 'programming', 'language' ]
console.log(string1.split(" ", 2));
//output: [ 'Javascript', 'is' ]

let str11 = " Javascript is a programming language   ";
console.log(str11.trim()); //output: 'Javascript is a programming language'

let newStr = new String("Javascript");
console.log(newStr.toString()); //output: Javascript

let str33 = "JavascriptD";
console.log(str33.substring(3)); //output: ascriptD
console.log(str33.substring(3, 7)); //output: ascr

let str44 = "Language_Check";
console.log(str44.slice(3)); //output: guage_Check
console.log(str44.slice(4, 10)); //output: uage_C
