monogatari.storage ({
	pchoice: ""
});

monogatari.script ({
	'hack2_storyBefore': [
		"clear",
		"After a few hours, you decide to head to the town center",
		"show scene beach_city",
	
		"You come to the table that says 'Food Not Bombs'. People are serving food to anyone who walks by, for free.",
		"Not a huge crowd. You see the girl with the braids, and she greets you with a welcoming smile.",

		"show character c neutral_open at left with fadeIn",
		"show character e neutral_neutral at right with fadeIn",
		
		"e Hi! I'm Esperansa.",

		//"show character c neutral_closed at left",
		"hide character c neutral_open",

		"c Hi! I'm Clara.", 

		"hide character c", //a bit weird between these two; but hide character c neutral_closed is faulty.
		"show character c pointer_open at left",

		"c Niko mentioned you're involved in social justice movements here on our islands?",
		"hide character c",
		"show character c neutral_open at left",
		"e That's right! I'm really passionate about social justice in all areas of life.",
		
		"hide character e",
		"show character e closed_pursed_crossed at right",
		"e So, Clara..What's your background with social justice issues?",
		"hide character e", //esperenza's eyes closed starting here. 
		"show character e neutral_neutral at right",
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
		"e No worries! I'm glad you're curious about social justice. There's a lot of ways to help out, and help is always needed.",
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
		"c Sure!",
		"hide character t",
		"hide character c",
		"hide character e",
		//"show character t neutral at center",

		"jump walk",

	],

	"walk" : [
		"show image TheDisastersComic1.png", 
		"wait",

		"jump back",
	],

	"back" : [
		'hide image TheDisastersComic1.png',
		"You return to the FNB table as Tita finishes speaking.",
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
				/*"func": () => {
					monogatari.storage('pchoice') = "res";
				},*/
				'onChosen': function () {
					monogatari.storage().pchoice = "for the resistance"; //the phrasing of this text is used elsewhere in Dialouge
				},
				"Do": "jump res",

			},

			"Evacuate": {
				"Text": "We should evacuate. (Tita's approach)",
				/*"func": () => {
					monogatari.storage('pchoice') = "eva";
				},*/
				'onChosen': function () {
					monogatari.storage().pchoice = "for the evacuation"; //the phrasing of this text is used elsewhere in Dialouge
				},
				"Do": "jump eva",
			},
			
		}},
	],

	"res" : [
		//'show image resist.png center with fadeIn', 
		"c I think we should resist!",
		"e We have to demand an end to the military buildup!",

		"e Clara, we are gathering people to start protests and even striking.",
		"hide character t",
		"show character t neutral at center",
		"t Yes, and the Tinian Evacuation Task force is contributing to a strike fund in solidarity with the Land Protectors. Let's discuss the strike fund later, Esperansa?",
		"e Sounds good.",
		"t I'll be back in a few. Ayu'os Clara",
		"c Ayu'os Auntie Tita!",
		"hide character t",
		"Esperansa and you start discussing resistance and anti-colonialism as Tita returns to the Task Force building.",
		"e We are gathering together from all over the Northern Marianas Islands to protest against the buildup.",
		"e We are trying to get the word out with digital and printed posters sent through unofficial channels.",
		"e However, the city has been witholding technical support for local libraries because they know we do a lot of our agitation and organizing in free spaces like community centers and libraries.",
		"e Do you have any experience hacking source code? There may be a way to send 100 posters automatically through a secure channel.",
		"c I do actually! Niko suggested that you all needed help with digital communications. And I do have experience hacking past an artificial block Niko put on my own machine.",
		"e Your skills are exactly what we need to get these posters out Clara! We have to light a fire in people's hearts. Our language, our land, and our lives depend on it.",
		"c Let me have a look at the remote printer's source code. I'll get those communications out as soon as possible.",
		"e We need to print 100 posters but the printer has a bug and only prints 2. If you can get this working, we can really start a movement!",
		"hide character e",
		"jump get_ready",
	],
	"eva" : [
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
		"t We need to print 100 posters but the printer has a bug and only prints 2. Do you have experience hacking source code? There may be a way to fix the printer's source code so it prints 100 instead of only 2.",
		"c I do actually! Niko suggested that you all needed help with digital communications, and I do have experience hacking past an artificial block Niko put on my own machine.",
		"c Let me have a look at the printer's source code. I'll try to get 100 posters printing!",
		"hide character t",
		"jump get_ready",
	],
	
	"get_ready": [
		"show scene the_center",
		"You walk to the Center for Chamoru Rights and you find the printer and plug in your laptop. You are able to extract the source code from the printer.",
		"c Alright, time to get this working!",
		'Looks like Niko has been working on the printer before you got here. He left you a hint',
		'n Here is a short coding exercise that might help you when you reprogram the printer. Try it first?',
		"jump hack_2",
	],

	'hack2_storyAfter': [
		{'Conditional': {
			'Condition': () => {
				return  monogatari.storage('pchoice') == "for the resistance";
			},
			'True': 'hide image resist.png center with fadeIn',
			'False': 'hide image evacuate.png center with fadeIn',
		}},
		"jump hack3_storyBefore",
	]
})