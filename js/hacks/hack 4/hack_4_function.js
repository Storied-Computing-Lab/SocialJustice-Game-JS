 /*
    This file is where you are going to define your function/ code for this hack.
 */
 var funcCount = 0;
 function hack_4_function(){
    // uncomment the line below if you design your hack 4 to need to keep track of how many times the function is called
    funcCount++;
    return "test";
 }


function iterate (){
   for (var i = 0; i < 5; i++){
        hack_4_function();
        console.log(funcCount);
    }
    return funcCount;
}