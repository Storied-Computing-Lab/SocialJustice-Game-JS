monogatari.script ({
    'a_Hack4': [
        // Hack4 Skeleton code
        // Educational and Industrial Priviledge - specially how social and economic status impacts your education and career for the rest of your life
        "clear",
        "centered Welcome to the game of life! Where nothing is fair and you just get what you get sucks huh",
        "centered You are playing as Clara a POC woman who is struggling to find her footing the tech industry as a bright and young student",
        "centered She is from a lower social economic class and struggles to find the nessecary connections needed in order to land her first internship",
        "centered Her college is not very prestigous and although she is extremely capable, job searching is not her strong suit",
        "centered You are at an internship fair right now",

        // type your own centered code here
        "c Hi!!!! I love the work that you do at your company, may I ask if you are looking to hire a summer intern?",
        "n Yes we are! May I ask what grade you are in and what school you go to?",
        // type your own code to say something from Clara's perspective
       "show scene the_center",
       "c Yes! I am a rising junior and I go to guam university ",
       "n Oh sorry I just checked and we are all out of summer internship opportunities ",
       // type your own code to get a background image to show up.
        "centered You then see a snobby ivy league kid walk up and leave with a million pamphlets and a long chat",
        "centered You wonder what could have went wrong",
        "c OMG I cannot believe he just blatantly turned me away due to the college that I went to, he didnt even ask me about my passions or projects?",
        "c Im kind of angry should I...",
        "hide character c",
        "hide character n",
        // Type your own code to get Niko and Clara's charecters back on the screen
        {"Choice": {
                    "Text": "What should Clara do?",

                    "Flexible": {
                        "Text": "This option is connected to stand your ground points",
                        "Do": () => {
                            const s_y_g = monogatari.storage('s_y_g');
                            monogatari.storage({
                                s_y_g: s_y_g + 10,
                            });

                        }

                    },

                    "Perspective": {
                        "Text": "This option is connected to challenging norms points",
                        "Do": () => {
                            const c_n = monogatari.storage('s_y_g');
                            monogatari.storage({
                                c_n: c_n + 10,
                            });
                        }
                    }

                }},
        "centered WRONG CHOICE you decide to stand your ground and challenge norms",
        // Type your own code to create your own choice menu

        "centered Clara goes home to research why this experience happened, and during her research she discovers a shocking correlation",
         // continue your Hack 4 script
        //In this hack you will design a coding problem that needs to be fixed in the hack_4_function file
        // In order to check that your players completed the hack correctly use check_hack_4.js
        //once you are ready to check your function use the below line
        'jump check',

    ]
})