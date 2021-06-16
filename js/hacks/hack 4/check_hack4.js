//import { hack_4_function } from "../hacks/hack 4/hack_4_function.js;
// This code checks your Hack 4 Function
function check_hack4_string_hack () {
    console.log('hack_4')
    player_answer = hack_4_function()
    correct_answer ="enter correct answer"
    if ("enter your conditional statement") {
        monogatari.storage({
            hack_4: true,
        });
    }

    return
}
monogatari.script({
    'check': [
        "show scene the_center",
        'c need to complete hack4 still',
        check_hack4_string_hack,
        {'Conditional': {
            'Condition': () => {
                return  monogatari.storage('hack_4');
            },
            'True': 'jump fixed',
            'False': 'jump checj',
        }},
    ],


    'fixed': [
        'c Congratulations you finished Hack4!',
    ],


})