 /*
    This file is where you are going to define your function/ code for this hack.
 */

 var funcCount = 0;
 function hack4(){
     funcCount++;
     //return funcCount if want calls
     return "test";
 }
 function hack_4_function(){
    //add a for loop if want to use calls version(what in iterate)
     return hack4();
  }

 function iterate (){
    for (var i = 0; i < 5; i++){
         hack_4_function();
         console.log(funcCount);
     }
     return funcCount;
 }