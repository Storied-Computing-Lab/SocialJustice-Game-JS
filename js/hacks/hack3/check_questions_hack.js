
/*
This is an example of a dictionary that maps NFL teams to their cities.
Notice that each key is followed by a colon ( : ) and each mapping is followed
by a comma. Every key must be unique:

var teams = {
    "Las Vegas" : "Raiders",
    "San Francisco" : "49ers",
    "Seattle" : "Seahawks",
    "Atlanta" : "Falcons",
};
--------------------------------
The dictionary above maps Strings (text) to other strings. 
However, we can map any type to any type. Here's an example
of a String to Integer mapping:

var roman_numerals = {
    "I" : 1,
    "II" : 2,
    "III" : 3,
    "IV : 4,
    "V" : 5,
};

You don't have to do it here, but you can access these elements using square brackets:
>>> var iv = roman_numerals["IV"];

You can also set the elements after you create the dictionary using the same square brackets
>>> roman_numerals["IV"] = 190;

*/

function hack3_main() {
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
        "Clara": "Why are you doing this to our land?"
    };

    return Object.keys(dictionary).length;
}


