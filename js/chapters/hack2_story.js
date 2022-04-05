monogatari.script ({
	'hack2_storyBefore': [
		"clear",
		"After a few hours, you decide to head to the town center",
		"show scene the_center",
	
		"You come to the table that says 'Food Not Bombs'",
		"People are serving food to anyone who walks by, for free.",
		"Not a huge crowd. You see the girl with the braids.",
		"Then she sees you.",

		"show character c neutral_open at left with fadeIn",
		"show character e neutral_neutral at right with fadeIn",
		
		"e Hi! I'm Esperansa.",

		"show character c neutral_closed at left",
		"hide character c neutral_open",

		"c Hi! I'm Clara.",

		'jump hack_2',
	],

	'hack2_storyAfter': [
		"We made it to the hack_storyAfter label",
		"We made it to the after party",
	]
})