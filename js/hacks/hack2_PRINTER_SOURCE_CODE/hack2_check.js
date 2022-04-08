
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

monogatari.action ('Message').messages ({
    'NumPosters':{
        title: 'Number of Posters Printed:',
		//subtitle: s,
        //body: monogatari.storage().posters_printed.toString(),
    },
});

monogatari.script({
	'hack_2': [
		'Try to figure out how hello_for_loop() works! Once you do, modify it so it logs 7 "Hello"s!', 
		hello_for_loop,
			{'Conditional': {
					'Condition': () => {
							return  bound == 7;
					},
					'True': 'jump hundred_posters', //'jump print_poster_once',
					'False': 'jump hack_2',
			}},
	],

	/*'print_poster_once': [
		'Congrats, you know how a for loop works now!',
		'Now try to figure out what printPosterOnce() does!',
		'Follow the directions in the comments and change the values of call_once and call_twice',
		{'Conditional': {
			'Condition': () => {
					return  call_once == 1 && call_twice == 2;
			},
			'True': 'jump hundred_posters',
			'False': 'jump print_poster_once',
		}},
	],*/

	'hundred_posters': [
			//'Awesome, now you know what printPosterOnce() does.',
			'Congrats, you know how a for loop works now!',
			'Help Clara print 100 posters! (See printer_that_prints_100_posters().)',
			check_poster_hack,
			document.write(monogatari.storage().posters_printed),
			'show message NumPosters',
			{'Conditional': {
				'Condition': () => {
					console.log(monogatari.storage('pchoice'));
					return  monogatari.storage('pchoice') == "res";
				},
				'True': 'show image resist.png center with fadeIn',
				'False': 'show image evacuate.png center with fadeIn',
			}},
			{'Conditional': {
					'Condition': () => {
							return  monogatari.storage('hack_2');
					},
					'True': 'jump poster_fixed',
					'False': 'jump hundred_posters',
			}},
	],

	'poster_fixed': [
			'c You printed 100 posters!',
			'jump hack2_storyAfter',
	],


})