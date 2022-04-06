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

		//"show character c neutral_closed at left",
		"hide character c neutral_open",

		"c Hi! I'm Clara.", 

		"hide character c", //a bit weird between these two; but hide character c neutral_closed is faulty.
		"show character c pointer_open at left",

		"c Niko mentioned you're involved in social justice movements here on our islands?",

		"e That's right! I'm really passionate about social justice in all areas of life.",
		"hide character c",
		"show character c neutral_open at left",
		
		"e So, Clara..What's your background with social justice issues?",
		"hide character e neutral_neutral",
		"show character e closed_pursed_crossed at right",
		"hide character e closed_pursed_crossed", //esperenza's eyes closed starting here. 
		//"hide character e",
		
		"jump multisel",
	],

	'multisel': [
		{"Choice": {
			"Text": "e Or, like, what's got you interested?",
			
			"Gender_Inequality": {
				"Text": "I've experienced gender inequality in hacking",
				"Do": "jump gi",

			},

			"Military": {
				"Text": "What's going on with the U.S. Military?",
				"Do": "jump m",
			},

			"Unsure": {
				"Text": "I'm not sure.",
				"Do": "jump u",
			},
			
		}},
		"hide character e",
		"show character e neutral_neutral at right",
	],

	'gi': [
		"e That's real.",
			"c Are you doing any work to address gender inequality?",
			"e Yes! That's something our community is really concerned with actually.",
			"jump n",
	], 

	'm': [
		"e The U.S. military buildup is one big problem facing a lot of us now.",
			"c Why is that?",
			"e Great question!!",
			"jump n",
	],

	'u': [
		"e No worries! I'm glad you're curious about social justice.",
		"e There's a lot of ways to help out, and help is always needed.",
		"jump n",
	],

	'n': [
		"Tita walks up to the table.",
		"show character t neutral at center with dissolve",

		"e Hey Tita, have you met Clara?",
		"hide character t",
		"show character t smiling at center",

		"t Esperansa, Clara is my niece!",
		"hide character t",
		"show character t neutral at center",

		"e Tita, does Clara know about your work?",

		"show character c pointer_open at left",
		"c No, I don't know!",
		"show character t smiling at center",

		"t Clara, will you walk with me?",
		"hide character t",
		"c Sure!",
		"hide character c",
		"hide character e",
		//"show character t neutral at center",

		"jump walk",

	],

	"walk" : [
		"clear",
		//'show image TheDisastersComic1.png', //not showing!!!! 
		'show scene disaster',
		{"Choice": {
			"Text": "Continue Reading?",
			
			"Yes": {
				"Text": "Continue Reading",
				"Do": "jump walk",

			},

			"No": {
				"Text": "Ready to move on!",
				"Do": "jump back",
			},
			
		}},
	],

	"back" : [
		//'hide image TheDisastersComic1.png',
		"clear",
		"show scene the_center",
		"You return to the FNB table as Tita finishes speaking.",
		"show scene the_center",
		"show character t neutral at center with dissolve",
		"show character c neutral_open at left with fadeIn",
		"show character e neutral_neutral at right with fadeIn",

		"hide character e",
		"show character e angry_crossed at right",
		"Esperansa looks troubled.",

		"e Tita why hasn’t the task force considered even more resistance?",
		"hide character e",
		"show character e fierce_neutral at right",
		"e We should fight for our right to stay, instead of giving up and fleeing as they thieve and demolish our ancestral land!",

    	"Tita’s face turns grave",
		"hide character t",
		"show character t concerned at center",

		"t Esperansa I’ve told you a million times,",
		"t when lives are in danger, it\'s time to act pragmatically. When the time comes the Navy will get what they want.",

		"hide character e",
		"show character e angry_crossed at right",

		"e What if we expose these human rights violations? What if we can prove that the military buildup is death to our people?",
    	"e Clara, What do you think?",
		//"hide character e",
		"show character e fierce_neutral at right",

		"jump poster_choice",
	],

	"poster_choice": [
		{"Choice": {
			
			"Resist": {
				"Text": "We should resist. (Esperansa's approach)",
				"Do": "jump res",

			},

			"Evacuate": {
				"Text": "We should evacuate. (Tita's approach)",
				"Do": "jump eva",
			},
			
		}},
	],

	"res" : [
		'show image resist.png center with fadeIn', //not showing!!!
		"c I think we should resist!",
        "e We have to demand an end to the military buildup!",

		"e Clara, we are gathering people to start protests and even striking.",
        "hide character t",
        "show character t neutral at center",
        "t Yes, and the Tinian Evacuation Task force is voting to contribute to a strike fund",
        "t in solidarity with the Land Protectors.",
    	"t We still need to discuss the strike fund. Talk later Esperansa?",
        "e Sounds good.",
        "t I'll be back in a few. Ayu'os Clara",
        "c Ayu'os Auntie Tita!",
		"hide character t",
        "Esperansa and you start discussing resistance and anti-colonialism as Tita returns to the Task Force building.",
        "e We are gathering together from all over the Northern Marianas Islands to protest against the buildup.",
        "e However, we need to send the posters digitally through unofficial channels.",
        "e One of our tactics is striking, and we want our organizing communications to remain confidential.",
        "e Do you have any experience hacking source code?",
        "e There may be a way to send 100 posters automatically through a more secure channel.",
        "c I do actually! Niko suggested that you all needed help with digital communications.",
        "c And I do have experience hacking past an artificial block Niko put on my own machine.",
		"e Your skills are exactly what we need to get these posters out Clara!",
        "e We have to light a fire in people's hearts",
        "e Our language, our land, and our lives depend on it.",
		"c Let me have a look at the remote printer's source code.",
        "c I'll get those communications out as soon as possible.",
        "e We need to print 100 posters but the printer has a bug and only prints 2.",
		"e If you can get this working, we can really start a movement!",
		"hide image resist.png",
		"hide character e",
		"jump get_ready",
	],
	"eva" : [
		'show image evacuate.png center with fadeIn',
		"c I think we need to evacuate!",
        "t Refugees from Tinian and Pågan are our most vulnerable!",
        "e It's a tough choice, but I'm glad you'll be supporting the refugees Clara",
		"hide character e",
		"show character e fierce_crossed at right",
        "e Evacuation is doing important work, too.",
		"hide character e",
		"show character e neutral_crossed at right",
        "c We have to have solidarity with our most vulnerable.", 
        "e Agreed. I'll see you two around soon.",
		"hide character e",
		"show character e neutral_neutral at right", 
        "Tita and you start discussing refugee mutual aid as Esperansa joins some other activists.",
        "hide character e",
		"show character t neutral at center",
        "t We are getting the word out to people about resources provided by the Evacuation Task Force.",
        "t We need to print 100 posters but the printer has a bug and only prints 2.",
    	"t We think there is a bug in the source code of the printer at the Center for Chamoru rights.",
        "t Do you have experience hacking source code? There may be a way to reprogram the printer to print 100 posters instead of just 2.",
        "c I do actually! Niko suggested that you all needed help with digital communications.",
        "c And I do have experience hacking past an artificial block Niko put on my own machine.",
        "c Let me have a look at the printer's source code.",
        "c I'll try to get 100 posters printing!",
		'hide image evacuate.png',
		"hide character t",
		"jump get_ready",
	],
	
	"get_ready": [
		"You walk to the Center for Chamoru Rights and you find the printer and plug in your laptop",
    	"You are able to extract the source code from the printer",
    	"c Alright, time to get this working!",
		"jump hack_2",
	],

	'hack2_storyAfter': [
		"We made it to the hack_storyAfter label",
		"We made it to the after party",
	]
})