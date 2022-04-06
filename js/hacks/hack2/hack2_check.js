function check_poster_hack () {
	// check if nikos hack was fixed
	console.log('hack_2')

	print100Posters()
	if (posterPrintCount >= 100) {
			monogatari.storage({
					hack_2: true,
			});
	}
	
}

monogatari.script({
	'hack_2': [
		"show scene the_center",
		'c Try to figure out how hello_for_loop() works! Once you do, modify it so it logs 7 "Hello"s!', 
		hello_for_loop,
			{'Conditional': {
					'Condition': () => {
							return  bound == 7;
					},
					'True': 'jump print_poster_once',
					'False': 'jump hack_2',
			}},
	],

	'print_poster_once': [
		'c Congrats, you know how a for loop works now!',
		'c Now try to figure out what printPosterOnce() does!',
		'c Change the values of call_once and call_twice to the number of posters printed in each example.',
		{'Conditional': {
			'Condition': () => {
					return  call_once == 1 && call_twice == 2;
			},
			'True': 'jump hundred_posters',
			'False': 'jump print_poster_once',
		}},
	],

	'hundred_posters': [
			'c Awesome, now you know what printPosterOnce() does.',
			'c Help Clara print 100 posters! (See print100Posters().)',
			check_poster_hack,
			{'Conditional': {
					'Condition': () => {
							return  monogatari.storage('hack_2');
					},
					'True': 'jump poster_fixed',
					'False': 'jump hundred_posters',
			}},
	],

	// 'not_fixed': [
	//     'c I am still locked out of my computer',
	//     'jump cond',
	// ],

	'poster_fixed': [
			'c You printed 100 posters!',
			'jump hack2_storyAfter',
	],


})