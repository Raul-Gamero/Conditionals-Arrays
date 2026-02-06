
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

/**
 * Exercise 4 – Use Conditional Logic with If Statements
 * Write a function checkAge(age) that:
 * 
 * prints "Minor" if the age is less than 18
 * prints "Adult" otherwise
*/

function checkAge(age) {

    if (age < 18) {
        console.log("Minor");
    } else {
        console.log("Adult");
    }
}

checkAge(21);
checkAge(17);

/**
 * Exercise 5 – Logical Order in If Else Statements
 *Write a function gradeScore(score) that:
 *
 *returns "Excellent" if score >= 90
 *returns "Good" if score >= 70
 *returns "Average" if score >= 50
 *returns "Fail" otherwise
 *⚠️ Be careful with the order of conditions.
*/

function gradeScore(score) {

    if (score >= 90) {
        console.log("Excellent");
    } else if (score >= 70) {
        console.log("Good");
    } else if (score >= 50) {
        console.log("Average");
    } else {
        console.log("Fail");
    }
}

gradeScore(52);
gradeScore(73);
gradeScore(95);
gradeScore(47);

/**
 * Exercise 6 – Chaining If Else Statements
 * Create a function weatherMessage(temperature) that:
 * 
 * returns "Very cold" if temperature < 0
 * returns "Cold" if temperature is between 0 and 15
 * returns "Warm" if temperature is between 16 and 25
 * returns "Hot" if temperature > 25
*/

function weatherMessage(temperature) {

    if (temperature > 25) {
        console.log("Hot");
    } else if (temperature >= 16) {
        console.log("Warm");
    } else if (temperature >= 0) {
        console.log("Cold");
    } else {
        console.log("Very cold");
    }
}

weatherMessage(27);
weatherMessage(20);
weatherMessage(15);
weatherMessage(-3);

/**
 * Exercise 7 – Logical Operators (&&, ||)
 * Write a function canAccess(age, hasPermission) that:
 * 
 * returns "Access granted" if age >= 18 AND hasPermission === true
 * returns "Access denied" otherwise
*/

function canAccess(age, hasPermission) {

    let access;

    if (age >= 18 && hasPermission === true) {
        access = "Access granted";
    } else {
        access = "Access denied"
    }

    return access;
}

console.log(canAccess(15, true));
console.log(canAccess(19, false));
console.log(canAccess(18, true));
console.log(canAccess(25, true));

/**
 * 📦 Part 2 – Arrays
 * Exercise 8 – Store Multiple Values in One Variable
 * Create an array called menuItems containing:
 * 
 * "beef_kebab"
 * "roast_chicken"
 * "rice"
 * "salad"
 * Print the array to the console.
*/

const menuItems = ["beef_kebab", "roast_chicken", "rice", "salad"];

console.log(menuItems);

/**
 * Exercise 9 – Nest One Array Within Another Array
 * Create an array restaurantMenu containing:
 * 
 * an array of main dishes
 * an array of desserts
*/

const restaurantMenu = [
    ["beef_steak", "grilled_salmon", "vegetable_lasagna", "fish_tacos"],
    ["chocolate_cake", "apple_pie", "ice_cream", "cheesecake"]
];