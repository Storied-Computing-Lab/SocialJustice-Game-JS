/* 
	Hello & Welcome to your second hack! 
	Here you'll learn how to print as many posters as you need, with some new coding tools that can help. 


	### PART 1 ###
	The following function is called hello_for_loop(). This function will log "Hello" five times to the console in your Developer Tools. 
	Play around with the code below. How do different values/combinations of a, b, and c change the behavior of the code?
	
	Niko left you this exercise to try first before fixing the printer: Can you make it say "Hello" 7 times?
*/

let a = 0;
let b = 5;
let c = 1;

function hello_for_loop() {
	for (let i = a; i < b; i += c) {
		consoleHello();
	}
}

/*
	This is called a for loop, and will repeatedly execute codes within it for a specified number of times.
	When writing your own for loop, don't forget to initialize the counter variable with "let" or "var"!
*/

/*
	### PART 2 ###
	One great tool within Developer Tools that can help you debug or test your code is "console.log()", which writes to the 
	console the contents within the parentheses.  

	Examples:
	console.log("Hack");
	console.log(2);
	let x = "Clara";
	console.log(x);

	Play around with console.log() in the Developer Tools! 
	(Feel free to log in whatever you want! You can use examples above to help you get started.) 
	This exercise checks for any logs using console.log before you can move on to the next part. 
*/



// Below, change what this printer function does. This is your hack 2 exercise :) 
/*
	### PART 3 ### 

	Help Clara fix the bug in the printer so she can print out 100 posters! 
	Currently, the printer is only printing two posters. 
	Can you figure out what printPosterOnce() does based on the current code? How can you use it in your hack?
*/
function printer_that_prints_100_posters() {
	// TODO: Feel free to use or delete the code below to help you print 100 posters.
	printPosterOnce();
	printPosterOnce();
}

/*
	A challenge: if you haven't already done so, try to print exactly 100 posters! 
*/
