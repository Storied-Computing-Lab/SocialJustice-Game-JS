import {Virus} from "./virus.js";
//Tip: Check out the virus.js file to see what this type of virus can do.
var niko_virus = new Virus();

/* I also tried importing using:
var niko_virus = require("./virus.js");
*/

function main () {
    /*
    Welcome to your first hack!
    All you have to do is this:
    Change "Niko wuz here" to a new message & view your modification in the console

    All this text is a comment. Computers do not read between the """ """
    Press command + s to save changes here.
    Press shift + o inside the game to view the console in the game anytime.
    */

    // * figure out how to grab output in js
    // console.log("Niko wuz here");


    //What does this command do?
    //Hint: try putting eliminate_virus() right after this line. What happens?
    return niko_virus.invade();

    //This is also a comment
    //BONUS: Can you print another message below the first?
}

function eliminateVirus() {
    niko_virus.changeMessage("Virus eliminated");
}
