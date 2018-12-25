/////////////////////// 
// LOOPS

/**
* For Loop
*/

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
 

/**
* While Loop
*/

/*
var i = 99;
while (i > 0) // Runs as long as it evaluates the expression as true
{
  console.log(i + " bottles of beer on the wall");
  //i -= 1;
  i--;
}
*/

/**
* Map Loop
*/


/**
* ForEach Loop
*/
