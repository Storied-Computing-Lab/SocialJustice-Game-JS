//import { hack_4_function } from "../hacks/hack 4/hack_4_function.js;
// This code checks your Hack 4 Function
var player_answer = hack_4_function();

function check_hack4_string_hack (player_answer) {
    console.log('hack_4');
    if (player_answer != "the_center") {
        monogatari.storage({
            hack_4: true,
            player_answer: player_answer,
        });
    }

    return
}
monogatari.script({
    'check': [
        "show scene the_center",
        'c need to complete hack4 still',
        check_hack4_string_hack(player_answer),
        {'Conditional': {
            'Condition': () => {
                return  monogatari.storage('hack_4');
            },
            'True': 'jump fixed',
            'False': 'jump string',
        }},
    ],

    //Note the player may have entered a random string that is NOT
    //a valid scene name, in which case the game will throw an error
    //That the player has to deal with!
    'fixed': [
        'show scene {{player_answer}}',
        'c Congratulations you finished Hack4!',
    ],


})
