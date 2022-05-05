monogatari.script ({
    'hack3_storyBefore': [
        // intro 
        "show scene the_frontgate",
        "The posters you printed helped spread the word. Hundreds of people reached out expressing their desire to help....and help would be needed very soon....",
        "A few days later, Esperansa meets you again with some concerning news",
        "show character e fierce_neutral at left with fadeIn",
        "show character c neutral_open at right with fadeIn",
        "e Clara, we have a problem!",
        "c Oh no, what's wrong Esperansa?",
        
        "hide character e",
        "show character e angry_crossed at left with fadeIn",
        "e The navy is trying to poison the soil.",

        "hide character c",
        "show character c neutral_closed at right",

        "c What do you mean?",

        "hide character c",
        "show character c neutral_open at right",

        "e The navy wants to turn our land into firing ranges which is known to poison the soil. This will cause all of our crops and food to die, along with the surrounding fish. They said they'll 'move the fish', whatever that means.",

        "hide character c",
        "show character c neutral_closed at right with fadeIn",

        "c That's terrible! They really don't think we're smart. Is there anything we can do to stop them?",

        "hide character c",
        "show character c neutral_open at right with fadeIn",

        "hide character e",
        "show character e neutral_crossed at left with fadeIn",

        "e Our strategy now is to stall them. Under the National Environmental Policy Act, the navy is required to tell us about this stuff. So, we have the right to petition and ask a lot of questions.",
        "e The only problem is, we need a lot of questions and they need to come from real people",

        "hide character c",
        "show character c pointer_open at right with fadeIn",

        "c Hmm, if everyone were to get at least five questions from different people, would that be enough?",

        "hide character e",
        "show character e neutral_neutral at left with fadeIn",

        "e Yes, I think it would be!",

        "show scene the_center with fadeIn",
        "show character c neutral_open at left with fadeIn",
        "show character n neutral at right with fadeIn",
        "c Niko, I need your help! The navy are trying to poison our soil.",
        "n Uh oh, but how would I help?",
        "c If everyone comes up with at least 5 questions, we can stall them for a while",
        "n I see, I have an idea for what we can do.",

        "n We can use something called a dictionary which allows us to store key, value pairs",
        "c So we could store the name and the question?",
        "n Exactly! Look for hack3_questions.js for more instructions!",

        "jump cond_hack3"
    ], 


    'hack3_storyAfter': [
        "At the meeting, each activist reads out loud their question. We believe this will cause a media stir, so the Navy will have to answer ALL our questions.",
        "We hope to gather over 50,000 more questions, eventually, to  stall their plans even futher. But for now, let's show them what we're made of.",
    
        "In no particular order, the activists begin shouting their questions for all to hear. You notice Niko and Esperansa added additional questions!",
        
        "e How do you realistically and specifically plan to 'move the fish' ?!",
        "n Can we see the military expansion plans in their entirety, as required by law?",

        "The following questions are the questions you generated. Check js/hacks/hack3/hack3_story.js to see how this was done!",
        "{{q1}}",
        "{{q2}}",
        "{{q3}}",
        "{{q4}}",
        "{{q5}}",
        "We did it! We used our voices!",
        "We collectively delayed the military plans!",
        "How did feel?",
        "What did you learn?",
        "How will you take further action in your community?",
        //"jump hack4_story" //Students will implement this part!
        "end" //but it doesn't have to end here!
    ]

});
