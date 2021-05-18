//import { hack_4_function } from "../hacks/hack 4/hack_4_function.js;
// This code checks your Hack 4 if your outputting a certain string
function check_hack4_string_hack () {
    console.log('hack_4')

    if (hack_4_function() == "test") {
        monogatari.storage({
            hack_4: true,
        });
    }

    return
}
monogatari.script({
    'string': [
        "show scene the_center",
        'c need to complete hack4 still',
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