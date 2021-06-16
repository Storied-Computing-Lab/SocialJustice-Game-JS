//import { hack_4_function } from "../hacks/hack 4/hack_4_function.js;
// This code checks your Hack 4 Function
function check_hack4_string_hack () {
    console.log('hack_4')
    player_answer = hack_4_function()
    correct_answer = 0.75
    if (player_answer >= 0.75) {
        monogatari.storage({
            hack_4: true,
        });
    }

    return
}
monogatari.script({
    'check': [
        "show scene the_center",
        'c need to complete the method to post my findings!!!! Complete the hack on hack 4',
        check_hack4_string_hack,
        {'Conditional': {
            'Condition': () => {
                return  monogatari.storage('hack_4');
            },
            'True': 'jump fixed',
            'False': 'jump string',
        }},
    ],


    'fixed': [
        'c Congratulations you finished Hack4!',
    ],


})