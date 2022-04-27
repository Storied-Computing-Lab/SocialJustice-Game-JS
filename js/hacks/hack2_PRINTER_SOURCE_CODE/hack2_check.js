
monogatari.storage ({
	posters_printed: 0
});

function check_poster_hack () {
	//console.log('hack_2')
	posterPrintCount = 0;
	printer_that_prints_100_posters();
	monogatari.storage().posters_printed = posterPrintCount;
	
	if (posterPrintCount >= 100) {
			monogatari.storage({
					hack_2: true,
			});
	}
}
//let s = monogatari.storage().posters_printed.toString();
/*
monogatari.action ('Message').messages ({
    'NumPosters':{
        title: 'Number of Posters Printed:',
		//subtitle: s,
        //body: monogatari.storage().posters_printed.toString(),
    },
});
*/
monogatari.script({
	'hack_2': [
		'Try to figure out how hello_for_loop() works! Once you do, modify it so it logs 7 "Hello"s!', 
		hello_for_loop,
			{'Conditional': {
					'Condition': () => {
							return numHello == 7;
					},
					'True': 'jump console_exercise_prep', 
					'False': 'jump hack_2',
			}},
	],

	'console_exercise_prep': [
		consoleExerciseStart,
		'jump console_exercise' 
	],

	'console_exercise': [
		'Congrats, you know how a for loop works now!',
		'Go back to hack2_100_posters.js and read through Part 2. ',
		'Try logging to the console in the Dev Tools!',
		{'Conditional': {
			'Condition': () => {
					return console.logs.length > loggedSoFar;
			},
			'True': 'jump congrats',
			'False': 'jump console_exercise',
		}},
	],
	'congrats' : [
		'Great, now you also know how to use console.log!',
		'Heres the poster we need {{pchoice}}',
		{'Conditional': {
			'Condition': () => {
				console.log(monogatari.storage('pchoice'));
				return  monogatari.storage('pchoice') == "for the resistance";
			},
			'True': 'show image resist.png center with fadeIn',
			'False': 'show image evacuate.png center with fadeIn',
		}},
		'jump hundred_posters',
	],

	'hundred_posters': [
			//'Awesome, now you know what printPosterOnce() does.',
			check_poster_hack,
			'Help Clara print 100 posters {{pchoice}}! (See printer_that_prints_100_posters().)',
			'The printer is printing {{posters_printed}} posters',
			//document.write(monogatari.storage().posters_printed),
			//'show message NumPosters',
			{'Conditional': {
					'Condition': () => {
							return  monogatari.storage('hack_2');
					},
					'True': 'jump poster_fixed',
					'False': 'jump hundred_posters',
			}},
	],

	'poster_fixed': [
			'c We did it!',
			'c We have enough to spread the word!,',
			'jump hack2_storyAfter',
	],


})