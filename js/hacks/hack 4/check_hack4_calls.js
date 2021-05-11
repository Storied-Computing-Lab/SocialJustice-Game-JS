//import { hack_4_function } from "../hacks/hack 4/hack_4_function.js;
function check_hack4_calls () {
    console.log('check_hack4_string')
    while (True) {
    reload(hack_4_function) //maybe take out
    if (funcCount < "replace this with the number of times the call needs to be greater than") {
        //fill this with what you want to alert the user
    } else {
        break
    }
    }

    return
}
// check hack_1.js on how you can call this function to test your hack 4 function in the game

monogatari.script({
    'calls': [
        "show scene the_center",
        'c need to complete hack4 still',
        check_hack4_string_hack,
        {'Conditional': {
            'Condition': () => {
                return  monogatari.storage('hack_4');
            },
            'True': 'jump fixed',
            'False': 'jump calls',
        }},
    ],


    'fixed': [
        'c Congratulations you finished Hack4!',
    ],


})