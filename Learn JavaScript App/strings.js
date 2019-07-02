//strings

/*
Skip first character
Complete the function skipFirstCharacter such that it returns all the characters except the first one of the name it receives.
*/

/**
 * @param {string} name
 */
function skipFirstCharacter(name){
    return name.substring(1);
    console.log(name.substring(1));
}

//sample usage
console.log(skipFirstCharacter("Iamsterdam"));



//App Solution
function skipFirstCharacter(name){
    return name.substring(1);
}


/*
Tests (2 / 2)
returns a string
returns everything but the first character
Console
amsterdam
*/