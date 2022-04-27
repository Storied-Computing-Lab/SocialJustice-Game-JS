monogatari.action ('Message').messages ({
    'challenging_norms': {
        title: '+10% challenging norms!',
        body: '+10% challenging norms!',
    },
});

monogatari.action ('Message').messages ({
    'stand_your_ground': {
        title: '+10% Stand your ground!',
        body: '+10% Stand your ground!',
    },
});

monogatari.action ('Message').messages ({
    'reclaim_our_imagination': {
        title: '+10% Reclaim our imagination',
        body: '+10% Reclaim our imagination',
    },
});

monogatari.action ('Message').messages ({
    'CRITIQUE_ABILITY': {
        title: 'NEW ABILITY!',
        body: 'CRITIQUE: offer a new perspective using critical thinking.',
    },
});


monogatari.script ({
    'hack1_storyBefore': [
        // intro
        "clear",
        "centered You walk into the Center for Chamoru Rights and look out the window.",
        "centered The green fronds of palm trees sway lazily in the wind.",
        "centered An innocence and beauty that frustrates you",
        "centered Because you don't know how to protect it.",
        "centered You shut your eyes for a moment to hold the picture in your mind.",
        "c The U.S. military buildup and bombing is set to steal and destroy even more of our ancestral homeland",
        "c What can my people do to stop this?",

        // niko and clara first scene

        "show scene the_center",
        "You turn from the window to see your cousin Niko, dressed like a White kid.",
        "Again.",
        "A little more formal, a little less Chamoru. His style draws attention away from his olive skin and stout islander features.",
        "Your mind turns to the matter at hand.",

        "show character c neutral_open at left with fadeIn",
        "show character n slight_smile at right with fadeIn",

        "c Hey cousin",
        "n Hey Clara.",
        "c So how's it going with the Hacker Boyz",
        "hide character n",
        "show character n neutral right with fadeIn",
        "n It's fine why are you so interested?",
        "hide character c",
        "show character c pointer_open left with fadeIn",
        "c I've told ya before I've been working on my hacking and I wanna join too",
        "hide character n",
        "show character n worried right with fadeIn",
        "n and I've told YOU before that it might be weird if you're the only girl...",
        "hide character c",
        "show character c neutral_closed left with fadeIn",
        "c C'mon Niko!",
        "n sorry...",
        "hide character c",
        "show character c neutral_open left with fadeIn",
        "c Wouldn't it be better for everyone if the Hacker Boyz had a new perspective on the team?",
        "n I guess. I'm just worried about how you'd fit in with the guys",

        // first choice interaction
        // *need to implement floating text to indicate stat increase

        // fix choice storage variables
        {"Choice": {
            "Text": "n I guess. I'm just worried about how you'd fit in with the guys",
            "Flexible": {
                "Text": "I'm pretty flexible",
                "onChosen": function (){
                        //Access the s_y_g variable from storage, put into a new const with the same name
                        const s_y_g = monogatari.storage('s_y_g');
                        //Update the s_y_g variable by adding 10 and putting it back in storage
                        monogatari.storage({
                            s_y_g: s_y_g + 10, //actually do the action of +10 stand your ground
                        });
                    },
                "onRevert": function (){
                        const s_y_g = monogatari.storage('s_y_g');
                        monogatari.storage({
                            s_y_g: s_y_g - 10,
                        });
                    },
                "Do": "jump flexible",
            },
            "Perspective": {
                "Text": "They'd need to adjust to a new perspective",
                "onChosen": function () {
                    const c_n = monogatari.storage('s_y_g');
                    monogatari.storage({
                        c_n: c_n + 10, //actually do the action of +10 challenge norms
                    });
                },
                "onRevert": function() {
                    const c_n = monogatari.storage('s_y_g');
                    monogatari.storage({
                        c_n: c_n - 10,
                    });
                },
                "Do": "jump perspective",
            }
        }},
    ],
    'flexible' : [
        'show message stand_your_ground',
        //$stand_s += .10
        "c Well, I'm pretty flexible",
        "n I don't know Clara. I know you're smart, but the guys...They just really... ACT like guys, you know?",
        "c I said I can handle it. Trust me. And you've got my back, right Niko?",
        "n --",
        "n ----",
        "n yeah of course Cuz",
        "Niko's hesitation was kind of weird. So you try another angle",
        "jump hack1_secondChoice",
    ],
    'perspective' : [
        'show message challenging_norms',
        //$norms_s += .10
        "c Well as far as fitting in, I acutally think THEY would need to do work to adjust and welcome a Chamoru, female perspective!",
        "n oh-- Do some work to adjust--? Adjust to you?",
        "c We each have to do the work so that we all 'fit in' together.",
        "jump hack1_secondChoice",
    ],

    /*

    HERE IS WHERE WE JUMP FOR SECOND CHOICE

    */
    'hack1_secondChoice': [
        "c and plus, right now YOU're the only Chamoru in the group!",
        "n So?",

        {"Choice": {
            "Text": "n So?",
            "Two_In_Group": {
                "Text": "With me that would make TWO Chamorus in the group!",
                "onChosen": function (){
                    const s_y_g = monogatari.storage('s_y_g');
                    monogatari.storage({
                        s_y_g: s_y_g + 10,
                    });
                    monogatari.storage({
                        only_Chamoru: "with me that makes two",
                    });
                },
                    "Do": "jump two",
            },
            "New_Group": {
                "Text": "Maybe we should form a brand new hacker group of Chamorus!",
                "onChosen": function () {
                    const c_n = monogatari.storage('s_y_g');
                    monogatari.storage({
                        c_n: c_n + 10,
                    });
                    monogatari.storage({
                        only_Chamoru: "with us as Chamoru hackers",
                    });
                },
                    "Do": "jump new_group",
            }
         }},
    ],
    'two': [
        'show message stand_your_ground',
        "c Soooo! Niko with me that would make TWO Chamorus in the group!",
        "n Hm. Maybe you're right that would improve things...They do sometimes look at me weird whenever I question their jokes about poor Chamoru communities in Dededo",
        "jump hack1_LastChoice",
    ],
    'new_group': [
        'show message reclaim_our_imagination',
        "c Maybe you and I could form a brand new Chamoru hacker group Niko. It could focus on Chamoru specific issues. What do you think?",
        "n That actually might be cool",
        "jump hack1_LastChoice",
    ],

    /*

    HERE IS WHERE WE JUMP FOR LAST CHOICE

    */
    'hack1_LastChoice': [
        "n Hm. Yeah. But I don't think the hacker boys are 'racist'...",

        {"Choice": {
            "Text": "n Hm. Yeah. But I don't think the hacker boys are 'racist'...",
            "Two_In_Group": {
                "Text": "Why do you say they're not racist?",
                "onChosen": function (){
                    const s_y_g = monogatari.storage('s_y_g');
                    monogatari.storage({
                        s_y_g: s_y_g + 10,
                    });
                    monogatari.storage({
                        are_hacker_boyz_racist: "the shit they say about poorer folks in Dededo",
                    });
                },
                "Do": "jump critique",
            },
            "New_Group": {
                "Text": "Do they encourage your Chamoru side?",
                "onChosen": function () {
                    const c_n = monogatari.storage('s_y_g');
                    monogatari.storage({
                        c_n: c_n + 10,
                    });
                    monogatari.storage({
                        are_hacker_boyz_racist: "experiencing discrimination",
                    });
                },
                "Do": "jump encourage",
            }
        }},
    ],
    'critique': [
        'show message CRITIQUE_ABILITY',
        "c Why do you say they aren't racist?",
        "n They don't say racist things or discriminate against me for being Chamoru",
        "n I mean, it does piss me off when they say shit about the poorer parts of town. ..and those parts of town have a lot more Chamorus...",
        "n but they never say anything to me.",
        "jump open_him_up_WITH_CONDITIONAL",
    ],
    'encourage': [
        'show message reclaim_our_imagination',
        "c Do you think they encourage your Chamoru side? Or do they only encourage your ideas that make them comfortable?",
        "Niko shifts his weight from left to right.",
        "So you try to open him up one more time",
        "jump open_him_up_WITH_CONDITIONAL",
    ],
    'open_him_up_WITH_CONDITIONAL': [
        "c Do you experience any other type of discrimination?",
        {'Conditional': {
            'Condition': function () {
                return this.storage ('only_Chamoru') == "with me that makes two";
            },
            'True': 'jump with_us_two',
            'False': 'jump hacker_group',
        }},
    ],
    'with_us_two':[
        "n Well I was thinking about having two Chamorus in the group, like you said. Would that really be enough to combat discrimination?",
        "c We could look out for each other. What if Chamoru hackers really did a different type of hacking?",
        "jump prologue",
    ],
    'hacker_group':[
        "n Well I was thinking about the Chamoru hacker group you mentioned.",
        "n What if Chamoru hackers really did a different type of hacking?",
        "jump prologue",
    ],
    /*

    HERE IS PROLOGUE TO HACK

    */
    'prologue':[
        "hide character n",
        "hide character c",
        "A few days go by. Clara explores a little and comes back to the Center for Chamoru Rights",

        "show character n slight_smile at right with fadeIn",
        "show character c neutral_closed at left with fadeIn",

        "n Hey Clara",
        "show character c neutral_open at left with fadeIn",
        "hide character c neutral_closed",

        "c Hey Niko",
        "n I've been thinking about what you said, and I looked at your last hacker application. They should have let you in",
        "c Really?!? Why'd they reject me",

        "show character n neutral at right",
        "hide character n slight_smile",
        "n Maybe discrimination is harder to see than we thought?",

        "A moment of quiet",
        "c What should we do?",  
        
        "hide character n",
        "show character n slight_smile at right with fadeIn",
        
        "n I've got a new hacker challenge for you to try.",

        "hide character n",
        "hide character c",
        "clear",
        "show image textbox center",

        "centered In this game you will have to hack your way to justice.",
        "centered Try to fix niko's hack to continue on in the game.",
        "centered You'll need those skills later",

        "hide image textbox",
        "show scene the_center",

        "show character c pointer_open at left with fadeIn",
        "show character n neutral at right width fadeIn",

        "c Well I'm glad you said something! I can do it today!",

        "show character n slight_smile at right",
        "hide character n neutral",

        "n Well guess what? You're locked out of your computer!",

        "c what???",

        "show character c pointer_closed at left",
        "hide character c pointer_open",

        "c Oh my gosh. *Only you* would think of a hack like this Niko ya jerk!",
        'jump hack1_exercise',
    ],

    /*

    HERE IS WHERE WE JUMP AFTER HACK1 IS COMPLETED

    */
    'hack1_storyAfter': [
        "show scene the_center",

        "show character n slight_smile at right with fadeIn",
        "show character c neutral_closed at left with fadeIn",

        "n Nice one Clara! That was a pretty tough problem.",
        "n It took me way longer to finish when I did it.",
        "n I have to say, the Hacker Boyz are definitely going to reconsider your application",

        "hide character c",
        "show character c neutral_open left with fadeIn",
        "c Yeah, or again, you and me, starting our own club!",

        "n Great work again, Clara.",
        "n And I was thinking about what you said, about the Hacker Boyz and {{are_hacker_boyz_racist}}.",
        "n You know who you should talk to about this kind of stuff?",

        "hide character c",
        "show character c neutral_open left with fadeIn",
        "c Who?",


        "show character n neutral at right with fadeIn",
        "n Esperansa. She's really into the whole social justice thing.",

        "hide character c",
        "show character c neutral_open left with fadeIn",
        "c Oh yeah?",


        "show character n neutral at right with fadeIn",
        "n Yeah, I always see her at the town center in Dededo. Giving out food to homeless people",

        "hide character c",
        "show character c neutral_open left with fadeIn",
        "c Oh, wow!",


        "show character n slight_smile at right with fadeIn",
        "n I'm heading out, but let's talk more later",
        "n I underestimated you cousin!",
        "hide character n",

        "You're so excited about your first hack, you just want to keep nerding out with Niko.",
        "But you're still concerned with the way the Hacker Boyz exclude girls.",

        "hide character c",
        "show character c neutral_open center with fadeIn",
        "c Maybe I should meet Esperansa. I could use someone to talk to about this.",
        'jump hack2_storyBefore',
    ]
})