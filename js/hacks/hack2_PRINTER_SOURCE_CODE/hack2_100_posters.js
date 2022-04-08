/* 
	Hello & Welcome to your second hack! 
	Here you'll learn how to print as many posters as you need, with some new coding tools that can help. 
	See the example below to learn more...

	The following function is called hello_for_loop(). This function will log "Hello" five times to the console in your Developer Tools. 
	Play around with the code below, by changing the values and limits on i, or the message within console.log(). 
	*/
	
	//Niko left you this exercise to try first before fixing the printer: Can you make it say "Hello" 7 times?
	let bound = 5;

	function hello_for_loop() {
		for (let i = 0; i < bound; i++) {
			console.log("Hello"); //Can you find in your browser where this Hello message is being logged? Try changing to a new message!
		}
	}

	/*This is called a for loop, and will repeatedly execute codes within it for a specified number of times.
	When writing your own for loop, don't forget to initialize the counter variable with "let" or "var"!
*/

// Below, change what this printer function does. This is your hack 2 exercise :) 
function printer_that_prints_100_posters() {
	/*TODO: 
	  Help Clara fix the bug in the printer so she can print out 100 posters! 
	  Currently, the printer is only printing two posters. 
	  Can you figure out what printPosterOnce() does based on the current code? How can you use it in your hack?
	*/

	printPosterOnce();
	printPosterOnce();

}
