/*

    Assignment 1

    Update the function below to:

    1. Accept an argument "text"

    2. Set "text" to lowercase using the toLowerCase() method

    3. RETURN the result

*/

function assignment1() {
}

/*

    Assignment 2

    Update the function below to:

    1. Accept an argument "text"

    2. Set "text" to uppercase using the toUpperCase() method

    3. RETURN the result

*/

function assignment2() {
}

/*

    Assignment 3

    Update the function below to:

    1. Accept an argument "text"

    2. Remove (trim) all whitespace using the trim() method

    3. RETURN the result

*/

function assignment3() {
}

/*

    Assignment 4

    Update the function below to:

    1. Accept an argument "text"

    2. Check that the argument "text" is of typeof "string"

    3. IF argument "text" is not of typeof "string", return undefined

    4. IF argument "text" is of typeof "string":

        - trim "text"

        - set "text" to lower case

        - RETURN the result

*/

function assignment4() {
}

/*

    Assignment 5

    Update the function below to:

    1. Accept an argument "text"

    2. Search within the "text" argument for the word "piano" and

        REPLACE it with the word "guitar" using the replace() method
        
        For example:

        "I like playing the piano"

        Should be come:

        "I like playing the guitar"

    3. RETURN the result

*/

function assignment5() {
}

/*

    Assignment 6

    Update the function below to:

    1. Accept an argument "array"

    2. Loop through the array and:

        - check if each item is equal to typeof "string"

    3. For each item that is equal to typeof "string":

        - concatenate (join) the strings together, separating them with a space " "

        For example, assume the following is our array:

        ["red", 33, "green", "blue"]

        We could concatenate (join) the words "red", "green", "blue" together, ignoring

        the number 33

        In this case the result would be:

        "red green blue"

    5. Trim the result

    4. RETURN the result

*/

function assignment6() {
}

/*

    Assignment 7

    Update the function below to:

    1. Accept an argument "array"

    2. Loop through the array and:

        - check if each item is equal to typeof "number"

    3. For each item that is equal to typeof "number":

        - add these numbers together
        
        For example, assume the following is our array:

        ["red", 33, "green", 9, 6 ]

        We could add the numbers 33, 9 and 6

        In this case the result would be:

        48

    4. RETURN the result

*/

function assignment7() {
}

/*

    Assignment 8

    Update the function below to:

    1. Accept an argument "array"

    2. Loop through the array and:

        - check if each item is equal to typeof "boolean"

    3. For each item that is equal to typeof "boolean":

        - check if the value is equal to true

        - count the number of booleans equal to true
        
        For example, assume the following is our array:

        [ true, false, true, true, false ]

        The number of booleans equal to true is 3

        In this case the result would be:

        3

    4. RETURN the result

*/

function assignment8() {
}

/*

    Assignment 9

    Update the function below to:

    1. Accept an argument "array"

    2. Loop through the array and:

        - keep a count "strings" of how many items are equal to typeof "string"

        - keep a count "numbers" of how many items are equal to typeof "number"

        - keep a count "booleans" of how many items are equal to typeof "boolean"

    3. Store these counts in an object

        For example, this array:

        [ 23, 45, "hello", "hallo", true, false ]

        Will return this object:

        {
            numbers: 2,
            strings: 2,
            booleans: 2
        }

    4. RETURN the object

*/

function assignment9() {
}

/*

    DO NOT EDIT THE CODE BELOW THIS LINE!

*/

const colors = require("colors");

const functions = [
    { result: assignment1("BADEN"), validate: (result) => result === "baden" },
    { result: assignment2("powell"), validate: (result) => result === "POWELL" },
    { result: assignment3(" Baden Powell "), validate: (result) => result === "Baden Powell" },
    { result: assignment4(" Baden Powell "), validate: (result) => result === "baden powell" },
    { result: assignment5("I have a piano"), validate: (result) => result === "I have a guitar"},
    { result: assignment6(["guitar", 82, "piano"]), validate: (result) => result === "guitar piano"},
    { result: assignment7([22, 3, 5, "ukulele"]), validate: (result) => result === 30 },
    { result: assignment8([true, false, true, 4]), validate: (result) => result === 2 },
    { result: assignment9([ 23, 45, "hallo", true, false, true ]), validate: (result) => typeof result === "object" && result.booleans === 3 && result.numbers === 2 && result.strings === 1 },
];

for(let assignmentIndex = 0; assignmentIndex < functions.length; assignmentIndex += 1) {
    const assignment = functions[assignmentIndex];

    console.log(`\nAssignment ${assignmentIndex + 1}`)
    console.log("\n\tResult: ", `<${JSON.stringify(assignment.result)}>`);

    if(assignment.validate(assignment.result)) {
        console.log("\n\tComplete! ".green, "Congratulations!!".rainbow);
    } else {
        console.log("\n\tIncomplete".underline.red);
    }
}
