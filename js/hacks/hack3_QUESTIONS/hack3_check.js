function check_hack3 () {
    // check if hack3_questions has enough questions

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
        "jump hack3_storyAfter",
    ]
});
