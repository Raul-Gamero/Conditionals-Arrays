
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