/*

    Assignment 1

    We know we can use `+` in JavaScript to concatenate 2 strings together

    For example, "Hello " + "you!" = "Hello you!"

    Using this knowledge, and the knowledge of FOR loops, with the following FUNCTION:

    RETURN a single string with the string "Hello " repeated 10 times (including space).

    The result should look like:

    "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello "

*/

function assignment1() {
    let string = "";

    for(let a = 0; a < 10; a += 1) {
        string += "Hello ";
    }

    return string;
}

/*

    Assignment 2

    Following on from the previous example, with the following FUNCTION:

    RETURN a single string with the string "Hamburg " repeated 5 times (including space).

    The result should look like:

    "Hamburg Hamburg Hamburg Hamburg Hamburg "

*/

function assignment2() {
}

/*

    Assignment 3

    Following on from the previous example, with the following FUNCTION:

    Use a FOR loop to replicate the string "love" 6 times

    RETURN the result of the loop above along with the word "I" at the start

    and "Hamburg" at the end.

    The result should look like:

    "I love love love love love love love Hamburg"

*/

function assignment3() {
}

/*

    Assignment 4

    With the following FUNCTION:

    Use a FOR loop and RETURN the numbers 0 1 2 3 4 5 6 7 8 9 10 as a string,

    with a space in between each number.

    Hint: We can concatenate a number with a string, and JavaScript will convert the

    number into a string. For example:

    "I am " + 5 + " years old." = "I am 5 years old."

    The result should look like:

    "0 1 2 3 4 5 6 7 8 9 10 "

*/

function assignment4() {
}

/*

    Assignment 5

    With the following FUNCTION:

    Use a FOR loop and RETURN the result of adding the numbers 0 - 1000

    For example, to find the result of adding the numbers 0 - 5

    0 + 1 + 2 + 3 + 4 + 5 = 15

*/

function assignment5() {
}

/*

    Assignment 6

    With the following FUNCTION:

    Use a FOR loop and RETURN the numbers 5 10 15 20 25 30 35 40 45 50 as a string,

    with a space in between each number.

    Hint: We don't have to increase the value in our loop by 1, we can use other values

    The result should look like:

    "5 10 15 20 25 30 35 40 45 50 "

*/

function assignment6() {
}

/*

    Assignment 7

    With the following FUNCTION:

    Access index 2 from the following array, and RETURN the result.

    The result should look like:

    "Blue"

*/

function assignment7() {
    const array = ["Red", "Green", "Blue"];
}

/*

    Assignment 8

    With the following FUNCTION:

    Use a FOR loop to loop through the string contents of the array.

    HINT: For the upper value, we can use the array property "length"

    For example, using the "length" property we can find the length of an array

    NOTE: The last index of an array is always 1 value lower than the total length

    This is because Arrays start with 0 as their first index

    For example:

    const array = ["hello", "hi"];

    array.length returns 2

    However "hello" has index 0, "hi" has index 1

    Using this knowledge join (concatenate) each string into 1 single string, adding a space in between each string

    RETURN the single string you created in the previous step

    The result should look like:

    "I hate JavaScript ! "

*/

function assignment8() {
    const array = ["I", "hate", "JavaScript", "!"];
}

/*

    Assignment 9

    With the following FUNCTION:

    Just like in the previous assignment,

    use a FOR loop to loop through the string contents of the array.

    Create a new string with the contents of the array,

    but replacing the word "hate" with the word "love"

    The result should look like:

    "I love JavaScript ! "

*/

function assignment9() {
    const array = ["I", "hate", "JavaScript", "!"];
}

/*

    Assignment 10

    With the following FUNCTION:

    Use a FOR loop to loop through the string contents of the array.

    RETURN the total number of times the string "banana" is found

    The result should look like:

    3

*/

function assignment10() {
    const array = [
        "banana",
        "orange",
        "banana",
        "banana",
        "apple",
        "pear",
        "apricot",
        "orange"
    ];
}

/*

    Assignment 11

    With the following FUNCTION:

    Use a FOR loop to loop through the contents of the array.

    The array has content of many different datatypes.

    RETURN the total number of items which are of the datatype "number"

    The result should look like:

    5

*/

function assignment11() {
    const array = [12, "hello", "forty-five", 1, true, 5, 7, 8];
}

/*

    Assignment 12

    With the following FUNCTION:

    Use a FOR loop to loop through the numbers of the array.

    RETURN the total number of prime numbers which can be found in the array

    A prime number is a number which can only be divided with itself and the number 1

    For example:

    5 is a prime number. It can only be divided with itself and the number 1

    We can use the modulus operator (%) to determine if a number divides with a remainder or not

    For example:

    5 % 5 = 0 // 5 divide by 5 = (0) no remainder

    5 % 1 = 0 // 5 divide by 1 = (0) no remainder

    5 % 4 = 1 // 5 divider by 4 = (1) 1 remainder (5 = 4 + 1)

    The result should look like:

    9

*/

function assignment12() {
    const array = [5, 54, 3, 312, 5, 6, 8, 100, 37];
}

/*

    DO NOT EDIT THE CODE BELOW THIS LINE!

*/

const colors = require("colors");

const results = [
    { result: assignment1(), expected: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello" },
    { result: assignment2(), expected: "Hamburg Hamburg Hamburg Hamburg Hamburg" },
    { result: assignment3(), expected: "I love love love love love love love Hamburg" },
    { result: assignment4(), expected: "0 1 2 3 4 5 6 7 8 9 10" },
    { result: assignment5(), expected: 500500 },
    { result: assignment6(), expected: "5 10 15 20 25 30 35 40 45 50" },
    { result: assignment7(), expected: "Blue" },
    { result: assignment8(), expected: "I hate JavaScript !" },
    { result: assignment9(), expected: "I love JavaScript !" },
    { result: assignment10(), expected: 3 },
    { result: assignment11(), expected: 5 },
    { result: assignment12(), expected: 9 }
];

for(let assignmentIndex = 0; assignmentIndex < results.length; assignmentIndex += 1) {
    const assignment = results[assignmentIndex];

    console.log(`\nAssignment ${assignmentIndex + 1}`)
    console.log("\n\tResult: ", `<${assignment.result}>`);

    if(typeof assignment.result === 'string') {
        assignment.result = assignment.result.trim();
    }

    if(assignment.result === assignment.expected) {
        console.log("\n\tComplete! ".green, "Congratulations!!".rainbow);
    } else {
        console.log("\n\tIncomplete".underline.red, "Expected:", assignment.expected);
    }
}
