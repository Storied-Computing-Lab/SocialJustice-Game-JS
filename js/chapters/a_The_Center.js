monogatari.script ({
    'a_The_Center': [
        // intro
        "clear",
        "centered You walk into the Center for Chamoru Rights and look out the window.",
        "centered The green fronds of palm trees sway lazily in the wind.",
        "centered An innoncence and beauty that frustrates you",
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
                "onChose": function () {
                    const s_y_g = monogatari.storage('s_y_g');
                    monogatari.storage({
                        s_y_g: s_y_g + 10,
                    });
                },
                "Do": "jump flexible",
              
                

            },

            "Perspective": {
                "Text": "They'd need to adjust to a new perspective",
                "onChosen": function() {
                    const c_n = monogatari.storage('s_y_g');
                    monogatari.storage({
                        c_n: c_n + 10,
                    });
                },
                "Do": "jump perspective",
                
            }
            
        }},
        
    ],

    // flexible label if player chooses first choice

    'flexible': [
        "n I don't know Clara. I know you're smart, but the guys...",
        "n ....",
        "n They just really... ACT like guys, you know",
        "c I said I can handle it. Trust me.",
        "c And you've got my back, right Niko?",
        "n --",
        "n ----",
        "n yeah of course Cuz",
        "Niko's hesitation was kind of weird. So you try another angle",
        'jump together',
    ],


    // perspective label if player chooses second choice

    "perspective": [
        "c well as far as fitting in,",
        "c I acutally think THEY would need to do work to adjust and welecome a Chamoru, female perspective!",
        "n oh-- Do some work to adjust--? Adjust to you?",
        "c We each have to do the work so that we all 'fit in' together.",
        'jump together',
    ],

    "together": [
        "hide c",
        "show character c pointer_closed with fadeIn",
        "c and plus, right now YOU're the only Chamoru in the group!",
        "hide n",
        "show character n neutral with fadeIn",
        "hide c",
        "show character c neutral_open with fadeIn",
        "n So?",
        {"Choice": {
            "Text": "n So?",
            
            "two": {
                "Text": "With me that would make TWO Chamorus in the group!",
                "onChosen": function () {
                    const s_y_g = monogatari.storage('s_y_g');
                    monogatari.storage({
                        s_y_g: s_y_g + 10,
                    });
                },
                "Do": "jump two",
              
                

            },

            "new": {
                "Text": "Maybe we should form a brand new hacker group of Chamorus!",
                "onChosen": function() {
                    const roi = monogatari.storage('r_o_i');
                    monogatari.storage({
                        r_o_i: roi + 10,
                    });
                },
                "Do": "jump new",
                
            }
            
        }},
    ],

    'two': [
        "c Soooo! Niko with me that would make TWO Chamorus in the group!",
        "n Hm. Maybe you're right that would improve things...",
        "n They do sometimes look at me weird whenever I question their jokes about poor Chamoru communities in Dededo",
        "n Hm. Yeah. But I don't think the hacker boys are 'racist'...",
        'jump cond',
    ],

    "new": [
        "c Maybe you and I could form a brand new Chamoru hacker group Niko",
        "c It could focus on Chamoru specific issues. What do you think?",
        "n That actually might be cool",
        'jump cond',
    ]




})