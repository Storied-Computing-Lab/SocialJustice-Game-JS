/* 
	Hello & Welcome to your second hack! 
	Here you'll learn how to print as many posters as you need, with some new coding tools that can help. 
	See the example below to learn more...

	The following function will print "Hello" five times: 
	Feel free to play around with the code below, by changing the values and limits on i, or the message within console.log(). 
	
	*/
	let bound = 7;
	function hello_for_loop() {
		for (let i = 0; i < bound; i++) {
			console.log("Hello");
		}
	}
	
	hello_for_loop();

	/*This is called a for loop, and will repeatedly execute codes within it for a specified number of times.
	When writing your own for loop, don't forget to initialize the counter variable with "let" or "var"!
*/

/* Change call_once and call_twice to match the number of posters printed in each example.
   Hint 1: play around with these functions in your console! Copy the functions or just call printPosterOnce() in console.
   Hint 2: Where can you find the printer's source code? */

/* Example 1. 
function once() {
	printPosterOnce();
}
once();
*/
let call_once = 1;

/* Example 2.
function twice() {
	printPosterOnce();
	printPosterOnce();
}
twice();
*/
let call_twice = 2; 



// Do not comment this part out! This is your hack 2 exercise :) 
function print100Posters() {
	//TODO: Help Clara print out 100 posters. 
	//hint: the comments above should be useful!
	for (let i = 0; i < 100; i++) {
		printPosterOnce();
	}
}
