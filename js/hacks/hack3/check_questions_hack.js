function hack3_main(){
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

    var questions = {
        "Clara": "Why are you doing this to our land?",
        "Clarda": "Why are you doing this to our land?",
        "Clarfa": "Why are you doing this to our land?",
        "Claara": "Why are you doing this to our land?",
        "Cladera": "Why are you doing this to our land?",
        "Claswra": "Why are you doing this to our land?"
    };

    return Object.keys(questions).length;
}


