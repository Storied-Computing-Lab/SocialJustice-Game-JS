// import hack3_main from '../hacks/hack3/hack_add_questions.js';

function check_hack3 () {
    // check if hack_add_questions has enough questions

    console.log('hack_3');
    var hack_3_result = hack3_main();
    console.log(hack_3_result);
    const hack_3_resultkeys = Object.keys(hack_3_result);
    if(Object.keys(hack_3_result).length >= 5) {
        monogatari.storage({hack_3: true,
            q1: hack_3_result[hack_3_resultkeys[0]],
            q2: hack_3_result[hack_3_resultkeys[1]],
            q3: hack_3_result[hack_3_resultkeys[2]],
            q4: hack_3_result[hack_3_resultkeys[3]],
            q5: hack_3_result[hack_3_resultkeys[4]]});
    } else {
        monogatari.storage({hack_3: false});
    }


    
    return
}

monogatari.script ({
    'a_The_Base': [
        // intro 
        "show scene the_frontgate",
        "e Clara, we have a problem!",
        "c Oh no, what's wrong Esperansa?",
        "e The navy is trying to poison the soil.",
        "c What do you mean?",
        "e The navy wants to turn our land into firing ranges which is known to poison the soil",
        "e This will cause all of our crops and food to die, along with the surrounding fish. They said they'll 'move the fish', whatever that means",
        "c That's terrible! They really don't think we're smart. Is there anything we can do to stop them?",
        "e The best thing we can do stall them",
        "c How?",
        "e Under the National Environmental Policy Act, the navy is required to tell us about this stuff",
        "e So, we have the right to petition and ask a lot of questions",
        "e The only problem is, we need a lot of questions and they need to come from real people",
        "c Hmm, if everyone were to get at least five questions from different people, would that be enough?",
        "e Yes, I think it would be!",

        "show scene the_center with fadeIn",
        "show character c neutral_open at left with fadeIn",
        "show character n neutral at right with fadeIn",
        "c Niko, I need your help! The navy are trying to poison our soil.",
        "n Uh oh, but how would I help?",
        "c If everyone comes up with at least 5 questions, we can stall them for a while",
        "n I see, I have an idea for what we can do.",

        "n We can use something called a dictionary which allows us to store key, value pairs",
        "c So we could store the name and the question?",
        "n Exactly! Look for hack_add_questions.js for more instructions!",

        "jump cond_hack3"
        
     
    ]
})


monogatari.script({
    'cond_hack3': [
        'c I need at least 5 questions I currently have less than 5! That\'s not enough!',
        check_hack3,
        {'Conditional': {
            'Condition': () => {
                return monogatari.storage('hack_3');                
            },
            'True': 'jump fixed_hack3',
            'False': 'jump cond_hack3' 
        }},        
    ],

    'fixed_hack3': [
        "hide character c neutral_open",
        "hide character n neutral_open",
        "show scene the_frontgate",
        "e Good job Clara! That should stall them for a long time!",
        'jump ac_The_Meeting',
        "end",
    ],

    'ac_Post_Meeting': [
        "We did it! We used our voices!",
        "We collectively delayed the military plans!",
        "How did feel?",
        "What did you learn?",
        "How will you take further action in your community?",
    ]
})

