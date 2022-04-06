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

/* Now you should try to understand what printPosterOnce() does. 
   Hint 1: play around with printPosterOnce() in your console! Try calling it once and then multiple times. 
   Hint 2: Where can you find the printer's source code? 
   
   To check your understanding, change the values of call_once and call_twice below as appropriate:
   */

// How many posters are printed if you call printPosterOnce() just one time?
let call_once = 1;

// How many posters are printed if you call printPosterOnce() two times?
let call_twice = 2; 



// Do not comment this part out! This is your hack 2 exercise :) 
function print100Posters() {
	//TODO: 
	//Help Clara fix the bug in the printer so she can print out 100 posters! 
	//Currently, the printer is only printing two posters.

	//hint: the comments above should be useful!
	printPosterOnce();
	printPosterOnce();
}