
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

    var questions = {
      "Clara": "Why are you doing this to our land?",
      "Clar": "Why are you doing this to our land?",
      "Claa": "Why are you doing this to our land?",
      "Clra": "Why are you doing this to our land?",
      "Cara": "Why are you doing this to our land?",
      "lara": "Why are you doing this to our land?",
    };

    return Object.keys(questions).length;
}
