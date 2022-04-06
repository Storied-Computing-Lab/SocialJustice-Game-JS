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
    ],
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
        "n And I was thinking about what you said, about the Hacker Boyz and [hacker_boys_racist].",
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
    ]
})