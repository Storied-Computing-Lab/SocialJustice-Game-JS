export class Virus {
    /*
    This class provides methods that can customize the virus.
    There are a number of ways to solve this hack!
    */

    constructor(){
        /*
        Sets the default message for the Virus
        */
        this.message = "Niko wuz here";
    }

    function changeMessage(message){
        /*
        Change what the default message says.
        How to use: niko_virus.changeMessage("Your message here")
        */
        this.message = message;
    }

    function invade() {
        /*
        Print out the Virus message
        How to use: niko_virus.invade()
        */
        console.log(this.message),
    }
}
/* I tried exporting using:
module.exports = Virus;
*/
