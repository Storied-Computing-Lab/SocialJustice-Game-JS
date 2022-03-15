// import { main } from "../hacks/niko_wuz_here.js";

function check_nikos_hack () {
    // check if nikos hack was fixed
    console.log('hack_1')

    if (main() != "Niko wuz here") {
        monogatari.storage({
            hack_1: true,
        });
    }
    
    return
}

monogatari.script({
    'cond': [
        "show scene the_center",
        'c I am still locked out of my computer',
        {"Choice": {
            'Player': {
                "Text": "Hint!",
                "Do": "Exit the game and check the source code!",
            }
        }},
        check_nikos_hack,
        {'Conditional': {
            'Condition': () => {
                return  monogatari.storage('hack_1');
            },
            'True': 'jump fixed',
            'False': 'jump cond',
        }},
    ],
    // 'not_fixed': [
    //     'c I am still locked out of my computer',
    //     'jump cond',
    // ],

    'fixed': [
        'c You got in your computer!'
    ],


})