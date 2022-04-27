let posterPrintCount = 0; //1?
function printPosterOnce() {
	console.log('Poster', posterPrintCount);
	posterPrintCount++;
}

let numHello = 0;
function consoleHello() {
	console.log("Hello");
	numHello++;
}

console.stdlog = console.log.bind(console);
console.logs = [];
console.log = function(){
    console.logs.push(Array.from(arguments));
    console.stdlog.apply(console, arguments);
}

loggedSoFar = 0;
function consoleExerciseStart() {
	loggedSoFar = console.logs.length;
}

