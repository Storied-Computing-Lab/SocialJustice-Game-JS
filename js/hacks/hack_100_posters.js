/* 
	Hello & Welcome to your second hack! 
	Here you'll learn how to print as many posters as you need, with some new coding tools that can help. 
	See the example below to learn more...

	The following code will print "Hello" five times: 
	Feel free to play around with the code below. Comment out this part when you are ready to move on to your task.
	*/
	for (let i = 0; i < 5; i++) {
		console.log("Hello");
	}

	/*This is called a for loop, and will repeatedly execute codes within it for a specified number of times.
	When writing your own for loop, don't forget to initialize the counter variable with "let" or "var"!
*/


/*
	We also have another function. Try to figure out what it does; once you do, 
	comment out the code in lines 23-28
*/

printPosterOnce()
console.log("Looks like I'm only printing 1 poster here...");

printPosterOnce()
printPosterOnce()
console.log("Oh now I'm printing 2 posters. I wonder where I can find the printer's source code...")


// Do not comment this part out! This is your hack 2 exercise :) 
function print100Posters() {
	//TODO: Help Clara print out 100 posters. 
	//hint: the comments above should be useful!
	return;
}



// Do not Edit this
function printPosterOnce() {
	console.log('Poster');
	posterPrintCount++;
}

let posterPrintCount = 0;