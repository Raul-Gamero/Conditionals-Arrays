//PART #1 

// #1

function compareWithEquality(a, b) {
    if (a == b) {
        return "Equal";
    } else {
    return "Not equal";}
}
console.log (' ');
console.log (compareWithEquality(5, "5"));
console.log (compareWithEquality(10, 10));
console.log (compareWithEquality(3, 7));
console.log(" ");

// #2

function compareWithStrictEquality(a, b) {
    if (a === b) {
        return "Strictly equal";
    } else {
    return "Not strictly equal";}   
}

console.log (compareWithStrictEquality(5, "5"));
console.log (compareWithStrictEquality(5, 5));
console.log(" ");
// #3

function compareNumbers(a, b) {
    if (a > b) {
        return  a + " is grater than " + b;
    } else if (a < b) {
    return  a + " is less than " + b;}
    else {
        return a + " is equal to " + b;
    }
}

console.log(compareNumbers(1, 2));
console.log(compareNumbers(4, 3));
console.log(compareNumbers(5, 5));
console.log(" ");

// #4

function checkAge(age){
    if (age < 18){
        return "Minor";
    } else {
        return "Aduly";
    }
}

// #5

function gradeScore(score) {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 70) {
        return "Good";
    } else if (score >= 50) {
        return "Average";
    } else {
        return "Fail";
    }
}

// #6

function weatherMessage(temperature){
if (temperature < 0) {
        return "Very Cold";
    } else if (temperature > 0 && temperature < 15) {
        return "Cold";
    } else if (temperature > 16 && temperature < 25) {
        return "Warm";
    } else if (temperature > 25) {
        return "Hot";
    }
}

// #7 

function canAccess(age, hasPermission){
    if (age >= 18 && hasPermission === true) {
        return "Access granted";
    } else {
        return "Access denied";
    }
}

// PART 2

// #8

let menuItems = ['beef_kebab', 'roast_chicken', 'rice', 'salad'];
console.log (menuItems);
console.log (' ');

let menuItems2 = menuItems;

// #9 

let restaurantMenu = [['Sushi', 'Pizza', 'Burger', 'Pasta'], ['Cupcake', 'Lemon Pie', 'Brownie', 'Ice Cream']];

// #10

console.log (restaurantMenu[0][0]);
console.log (restaurantMenu[1][3] + '\n');

// #11
menuItems.push('soup')
console.log (menuItems);
console.log (' ');

// #12
menuItems.pop();
menuItems.pop();
console.log (menuItems);
console.log (' ');

// Other Way with Slice

menuItems2.slice(-2);
console.log (menuItems2);
console.log (' ');

// #13

menuItems.shift();
console.log (menuItems);
console.log (' ');

// #14

menuItems.unshift('bread');
console.log(menuItems);
console.log (' ');

// BONUS

// With While Loop

let i=0;
let j=0;

while (i < restaurantMenu.length) {
    while (j < restaurantMenu[i].length){
    console.log(restaurantMenu[i][j]);
    j++;
    }
    i++;
    j=0;
}
console.log (' ');

// With For Loop

for (let i = 0; i < restaurantMenu.length; i++){
    for (let j = 0; j < restaurantMenu[i].length; j++){
        console.log(restaurantMenu[i][j]);
    }
}
console.log (' ');