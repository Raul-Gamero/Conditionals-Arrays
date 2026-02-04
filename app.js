
/**
 * Exercise 1 – Comparison with the Equality Operator (==)
 * Write a function compareWithEquality(a, b) that:
 * 
 * returns "Equal" if a == b
 * returns "Not equal" otherwise
 * 👉 Test your function with:
 * 
 * compareWithEquality(5, "5")
 * compareWithEquality(10, 10)
 * compareWithEquality(3, 7)
 */
function compareWithEquality(a, b) {

    let comparison;

    if (a == b) {
        comparison = 'Equal';
    } else {
        comparison = 'Not equal';
    }

    return comparison;
}

console.log(compareWithEquality(5, "5"));
console.log(compareWithEquality(10, 10));
console.log(compareWithEquality(3, 7));

/**
 * Exercise 2 – Comparison with the Strict Equality Operator (===)
 * Write a function compareWithStrictEquality(a, b) that:
 * 
 * returns "Strictly equal" if a === b
 * returns "Not strictly equal" otherwise
 * 👉 Test with:
 * 
 * compareWithStrictEquality(5, "5")
 * compareWithStrictEquality(5, 5)
 */
function compareWithStrictEquality(a, b) {

    let comparison;

    if (a === b) {
        comparison = 'Strictly equal';
    } else {
        comparison = 'Not strictly equal';
    }

    return comparison;
}

console.log(compareWithStrictEquality(5, "5"));
console.log(compareWithStrictEquality(5, 5));

/**
 * Exercise 3 – Practice Comparing Different Values
 * Create a function compareNumbers(a, b) that:
 * 
 * returns "a is greater than b" if a > b
 * returns "a is less than b" if a < b
 * returns "a is equal to b" if a === b
 */
function compareNumbers(a, b) {

    let comparison;

    if (a > b) {
        comparison = 'a is greater than b';
    } else if (a < b) {
        comparison = 'a is less than b';
    } else if (a === b) {
        comparison = 'a is equal to b';
    }

    return comparison;
}

console.log(compareNumbers(7, 5));
console.log(compareNumbers(3, 6));
console.log(compareNumbers(4, 4));
console.log(compareNumbers("5", "5"));