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
        'jump check',
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
                "Do": () => {
                    const s_y_g = monogatari.storage('s_y_g');
                    monogatari.storage({
                        s_y_g: s_y_g + 10,
                    });

                }

            },

            "Perspective": {
                "Text": "They'd need to adjust to a new perspective",
                "Do": () => {
                    const c_n = monogatari.storage('s_y_g');
                    monogatari.storage({
                        c_n: c_n + 10,
                    });
                }
            }

        }},

        'jump cond',
    ]
})
