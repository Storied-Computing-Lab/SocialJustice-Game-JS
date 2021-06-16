 /*
    This file is where you are going to define your function/ code for this hack.
 */

 function hack_4_function(){


   //prestige dict shows the school to how prestigous the school is
   //interview offer dict shows what percent of the time a student from that particular school recieves an internship offer
   //you want to calculate and show that the prestige of a school affects the rate of interview offers given by this formula
   //the average of (offer rate/prestige of school)

   var presitge_dict = {"Harvard": 0.8, "Stanford": 1, "Berkeley": 0.7, "Guam": 0.2, "Tulane": 0.5}
   var interview_offer_dict = {
      "Harvard": 0.9,
      "Stanford": 1,
      "Berkeley": 0.8,
      "Tulane": 0.4,
      "Guam": 0.1
    }

    //think of how to use a loop to gain access to each school in prestige_dict and how to access that school's interview rate in interview_offer_dict
    //hint for loop and you can access a dictionary's value with a key!
   
   



    return "average correlation between prestige and interview offer rate";
 }
