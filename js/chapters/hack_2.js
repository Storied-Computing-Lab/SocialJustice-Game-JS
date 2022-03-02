// import { main } from "../hacks/niko_wuz_here.js";

function check_poster_hack () {
	// check if nikos hack was fixed
	console.log('hack_2')

	print100Posters()
	if (posterPrintCount >= 100) {
			monogatari.storage({
					hack_2: true,
			});
	}
	
	return
}

monogatari.script({
	'hack_2': [
			"show scene the_center",
			'c Need more posters',
			check_poster_hack,
			{'Conditional': {
					'Condition': () => {
							return  monogatari.storage('hack_2');
					},
					'True': 'jump poster_fixed',
					'False': 'jump hack_2',
			}},
	],

	// 'not_fixed': [
	//     'c I am still locked out of my computer',
	//     'jump cond',
	// ],

	'poster_fixed': [
			'c You printed 100 posters!'
	],


})