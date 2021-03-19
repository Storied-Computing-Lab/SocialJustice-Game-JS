// initialize virus object

niko_virus = new Virus();

function eliminate_virus() {

    // change this message to fix the hack!
    niko_virus.change_message("Virus eliminated")
}

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


    //This is also a comment
    //BONUS: Can you print another message below the first?
    return niko_virus.check_message();


}