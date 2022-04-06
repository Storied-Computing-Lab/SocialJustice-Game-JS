/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"the_center": "tinian-japaneseGate.png"
});


// Define the Characters
monogatari.characters ({
	// 'y': {
	// 	name: 'Yui',
	// 	color: '#5bcaff'
	// }

	'c': {
		name: 'Clara',
		color: '#008080',
		directory: 'clara',
		sprites: {
			"phone": "clara_phone.png",
			"neutral_open": "clara_neutral_eyes_open.png",
			"neutral_closed": "clara_neutral_eyes_closed.png",
			"pointer_open": "clara_pointer_left_eyes_open.png",
			"pointer_closed": "clara_pointer_left_eyes_closed.png"
		}
	},

	'n': {
		name: 'Niko',
		color: '#008080',
		directory: 'niko',
		sprites: {
			"slight_smile": "niko_neutral_eyes_slight_smile.png",
			"neutral": "niko_neutral_eyes_neutral.png",
			"worried": "niko_neutral_eyes_worried.png"
		}
	},

	'e' : {
		name: 'Esperansa',
		color: '#008080',
		directory: 'esperansa',
		sprites: {
			"angry_crossed": "angry_face_arms_crossed.png",
			"closed_neutral":"closed_neutral_arms_neutral.png",
			"closed_pursed_crossed": "closed_neutral_arms_neutral.png",
			"closed_pursed_neutral": "closed_pursed_face_arms_neutral.png",
			"neutral_crossed":"face_neutral_arms_crossed.png",
			"fierce_crossed":"fierce_face_arms_crossed.png",
			"fierce_neutral": "fierce_face_arms_neutral.png",
			"neutral_neutral":"neutral_face_arms_neutral.png"
		}
	},

	't' : {
		name: 'Tita',
		color: '#008080',
		directory: 'tita',
		sprites: {
			"concerned": "tita_concerned.png",
			"neutral":"tita_neutral.png",
			"smiling": "tita_smiling.png",
		}
	}

});

monogatari.script ({
	
	// The game starts here.

	// jump to first chapter
	'Start': [
		"jump a_The_Center",
	]

});