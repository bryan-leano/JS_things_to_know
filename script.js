///////////////////////////////
// LOOPS & ARRAY METHODS

/**
* For Loop
*/

/*
var i;
// Initialization - Initializes the iterator variable
for (i = 0; 
// Condition - As long as the condition is met, the loops continues to execute    
  i < 3; 
// Increment - A directive which increments the iterator
  i = i + 1)
{
  console.log(i);
}

var myArray = ['A', 'B', 'C'];
for (i = 0; i < myArray.length; i++) {
  console.log('The member of myArray in index ' + i + ' is ' + myArray[i]);
}

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

var i;
for (i = 0; i <= 20; i++) {
	if (i % 2 === 0) { 
		console.log(i + ' is even');
	} else {
		console.log(i + ' is odd');
	}
};

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

var i;
for (i = 0; i <= 10; i++) {
	console.log(i * 9);
};

// Check the results of your assignGrade function from the conditionals exercise by logging every value from 60 to 100: your log should show "For 88, you got a B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc., logging each grade point in the range.

function assignGrade(score) {
	if (score > 90) {
			return 'A';
	} else if (score > 80) {
			return 'B';
	} else if (score > 70) {
			return 'C';
	} else if (score > 65) {
			return 'D';
	} else {
			return 'F';
	}
}

for (var i = 60; i <= 100; i++) {
console.log('For ' + i + ', you got a ' + assignGrade(i));
*/


/**
* While Loop
*/

/*
var i = 99;
while (i > 0) // Runs as long as it evaluates the expression as true
{
  console.log(i + ' bottles of beer on the wall');
  //i -= 1;
  i--;
}


var i = 99;
while (i > 0) {
	if (i != 1) {
		console.log(i + ' bottles of beer on the wall');
	} else {
		console.log(i + ' bottle of beer on the wall');
	}
	i--;
}
*/


/**
* Map array method
*/

/*
let powRangInfo = [
	{color: 'Red', name: 'Jason', age: 20},
	{color: 'Pink', name: 'Kimberly', age: 18},
	{color: 'Black', name: 'Zack', age: 22},
	{color: 'Yellow', name: 'Trini', age: 19},
	{color: 'Blue', name: 'Billy', age: 21}
]

let nameLengths = powRangInfo.map(function(n) {
	let len = n.name.length;
	return len;
})

console.log(nameLengths);


/**
* ForEach array method
*/

/*
let array = [1, 2, 3, 4, 5];

array.forEach(function(entry) {
	console.log(entry * 2);
});

let powRang = ['Red', 'Blue', 'Black', 'Yellow', 'Pink'];

powRang.forEach(function(color) {
	if (color === 'Yellow' || color === 'Pink') {
		console.log(`The ${color} ranger is ready to battle! She is fierce!`);
	} else {
		console.log(`The ${color} ranger is ready to battle! He is brave!`);
	}
});

powRangInfo.forEach(function(pow) {
	console.log(`${pow.name} is ${pow.age} years old & is the ${pow.color} Ranger!`);
});
*/


///////////////////////////////
// FUNCTION DECLARATIONS V FUNCTION EXPRESSIONS

// ** What is the a Function Declaration? **
// Function Declarations defines a named function variable without requiring variable assignment (the "=").
// Function Declarations must begin with "function".

/*
function bar() {
	console.log('Hello');
};

// ** What is the a Function Expression? **
// A Function Expression defines a function as a part of a larger expression syntax (typically a variable assignment).
// Function expressions can be named or anonymous
// Function Expressions must not start with “function”.


var a = function() {
	console.log('Aloha');
};

var b = function bar() {
	console.log('Ciao!');
};

bar();
a();
b();

// It's almost always better to use function expressions over function declarations
*/


///////////////////////////////
// RETURN

// The return statement ends function execution and specifies a value to be returned to the function caller

/*
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}

console.log(getRectArea(3, 4));
// expected output: 12

console.log(getRectArea(-3, 4));
// expected output: 0
*/

///////////////////////////////
// HOISTING

// Functions and variables are hoisted, which mean they are available before the execution phase starts.

///////////////////////////////
// SCOPING

// Answers the question: "where can we access a certain variable?"

/*
var a = 'Hello!';
first();

function first() {
	var b = 'Hi!';
	second();

	function second() {
		var c = 'Hey!';
		console.log(a + b + c);
	}
}

var d = 'Hello!';
first();

function first() {
	var e = 'Hi!';
	second();

	function second() {
		var f = 'Hey!';
		third();
	}
}

function third() {
	var g = 'John';
	console.log(d + g);
}
*/


///////////////////////////////
// THE THIS KEYWORD

// What is this?
// In a regular function call, the this keyword points at the global object, (the window object, in the browser).
// In a method call, the this keyword points to the object calling the method.

// console.log(this);

/*
calculateAge(1985);

function calculateAge(year) {
	console.log(2018 - year);
	console.log(this);
}

var john = {
	name: 'John',
	yearOfBirth: 1990,
	calculateAge: function() {
		console.log(this);
		console.log(this.yearOfBirth);
	}
}

john.calculateAge();
*/


///////////////////////////////
// STATE VARIABLES

// State variable: Tells us the condition of a system.


///////////////////////////////
// INHERITANCE & PROTOTYPE

// Inheritance is when one object is based on another object. It's when one object gets access to another object's properties. This is made possible by every object's prototype property.

// Every JavaScript object has a prototype property. Prototype is where we put methods and properties that we want other objects to inherit.


///////////////////////////////
// ES6 ARROW FUNCTIONS

/*
function funcName(params) {
	return params + 2;
}
funcName(2);
// 4

var funcName = (params) => params + 2
funcName(2);
// 4

// (parameters) => { statements }
// If no parameters, you can write it as: () => { statements }

var timesTwo = params => params * 2
console.log(timesTwo(4));  

// if you have braces { }, you MUST have a return as well
var double = num => {
	return num * 2
};
console.log(double(2));

// Arrow functions shine best with anything that requires this to be bound to the context, and not the function itself.
// They do not replace regular functions. They are used to not bind this to the function itself. 
*/


///////////////////////////////
// CALLBACKS


// A callback is a function that is to be executed after another function has finished executing.


/*
function first() {
	console.log(1);
};

function second() {
	console.log(2);
};

first();
second();
// 1
// 2
*/

/*
function first() {
	setTimeout(function() {
		console.log(1);
	}, 500);
};

function second() {
	console.log(2);
};

first();
second();
// 2
// 1
*/

/*
function doHomework(subject, callback) {
	alert(`Starting my ${subject} homework!`);
	callback();
}

doHomework('math', function() {
	alert(`Finished my homework!`);
});
// Starting my math homework!
// Finished my homework!
*/

function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function alertFinished(){
  alert(`Finished my homework`);
}
doHomework('math', alertFinished);
