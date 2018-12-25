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

var i = 0;
for (i = 0; i <= 20; i++) {
	if (i & 1) { 
		console.log(i + ' is odd');
	} else {
		console.log(i + ' is even');
	}
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
