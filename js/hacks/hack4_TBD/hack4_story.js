monogatari.script ({
    'hack4_storyBefore': [
        // Hack4 Skeleton code
        "clear",
        "centered Welcome to Hack 4!",
        "centered Go into the source code file game/chapters/a_Hack4.js to edit the script",
        "centered Can you figure out what makes this text centered, type your own code below that is centered",
        // type your own centered code here
        "c Can you figure out in the code how to day something from Clara's perspective?",
        // type your own code to say something from Clara's perspective
       "show scene the_center",
       "centered can you figure out how we got this image as a background?",
       "clear",
       "centered can you show the background image again?",
       // type your own code to get a background image to show up.
        "show character c neutral_open at left with fadeIn",
        "show character n slight_smile at right with fadeIn",
        "c Notice how we know have the characters of Clara and Niko appear on the screen",
        "hide character c",
        "hide character n",
        "centered Can you now figure out how to show Clara and Niko's charecters again?",
        // Type your own code to get Niko and Clara's charecters back on the screen
        {"Choice": {
                    "Text": "Can you figure out how we created this choice menu?",

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
        "centered Now create your own choice menu",
        // Type your own code to create your own choice menu

        "centered Congratulations on finishing this mini lesson! Now its time to use the tools you learned to create your Hack 4 script",
        "centered for different variations of what you just learned checkout hack 1 - 3 script files. ",
         // continue your Hack 4 script
        //In this hack you will design a coding problem that needs to be fixed in the hack_4_function file
        // In order to check that your players completed the hack correctly use check_hack_4.js
        //once you are ready to check your function use the below line
        'jump hack4_check',
    ],
    
    'hack4_storyAfter': [
        'This is the end of your Hack4 story. Or is it??',
        'Customize your hack now!',
    ]
})