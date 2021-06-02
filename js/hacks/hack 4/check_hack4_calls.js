//import { iterate } from "../hacks/hack 4/hack_4_function.js;
function check_hack4_calls () {
    console.log('hack_4')
    //while (True) {
    //reload(hack_4_function) //maybe take out
    //var value_of_main = iterate()
    // console.log(value_of_main)
    // change the below line to make it greater than or equal to, equal to or less than or equal to a certain number
    if (iterate() == 5) {
         monogatari.storage({
                    hack_4: true,
         });
    }
   // }

}
// check hack_1.js on how you can call this function to test your hack 4 function in the game

monogatari.script({
    'calls': [
        "show scene the_center",
        'c need to complete hack4 still',
        check_hack4_calls,//note funccount doesn't set back to 0 when you rerun this function
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