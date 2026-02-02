// PART 1 - CONDITIONALS

// Exercise 1 – Comparison with the Equality Operator (==)
function compareWithEquality(a, b) {
  if (a == b) {
    return "Equal";
  } else {
    return "Not Equal";
  }
}

console.log(compareWithEquality(5, "5")); // Output: Equal
console.log(compareWithEquality(10, 10)); // Output: Equal
console.log(compareWithEquality(3, 7)); // Output: Not Equal

// Exercise 2 – Comparison with the Strict Equality Operator (===)
function compareWithStrictEquality(a, b) {
  if (a === b) {
    return "Strictly Equal";
  } else {
    return "Not Strictly Equal";
  }
}

console.log(compareWithStrictEquality(5, "5")); // Output: Not Strictly Equal
console.log(compareWithStrictEquality(5, 5)); // Output: Strictly Equal

// Exercise 3 – Practice Comparing Different Values
function compareNumbers(a, b) {
  if (a > b) {
    return "a is greater than b";
  } else if (a < b) {
    return "a is less than b";
  } else if (a === b) {
    return "a is equal to b";
  } else {
    return "Incomparable values";
  }
}

// Exercise 4 – Use Conditional Logic with If Statements
function checkAge(age) {
  if (age < 18) {
    return "Minor";
  } else {
    return "Adult";
  }
}

// Exercise 5 – Logical Order in If Else Statements
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

// Exercise 6 – Chaining If Else Statements
function weatherMessage(temperature) {
  if (temperature < 0) {
    return "Very cold";
  } else if (0 < temperature < 15) {
    return "Cold";
  } else if (16 < temperature < 25) {
    return "Warm";
  } else if (temperature > 25) {
    return "Hot";
  }
}

// Exercise 7 – Logical Operators (&&, ||)
function canAccess(age, hasPermission) {
  if (age >= 18 && hasPermission === true) {
    return "Access granted";
  } else {
    return "Access denied";
  }
}

//PART 2 - ARRAYS

// Exercise 8 – Store Multiple Values in One Variable
const menuItems = ["beef_kebab", "roast_chicken", "rice", "salad"];
console.log(menuItems); // Output: ["beef_kebab", "roast_chicken", "rice", "salad"]

//Exercise 9 – Nest One Array Within Another Array
const restaurantMenu = [
  menuItems,
  ["ice_vream", "chocolate_cookie", "berry_tart"],
];
console.log(restaurantMenu); // Output: Nested array structure

// Exercise 10 – Access Multi-Dimensional Arrays With Indexes
console.log(restaurantMenu[0][0]); // Output: beef_kebab
console.log(restaurantMenu[1][2]); // Output: berry_tart

// Exercise 11 – Manipulate Arrays With push()
menuItems.push("soup");

// Exercise 12 – Manipulate Arrays With pop()
const lastArrayElement = menuItems.pop();
console.log(lastArrayElement);

// Exercise 13 – Manipulate Arrays With shift()
const firstArrayElement = menuItems.shift();
console.log(menuItems); // Output: ["roast_chicken", "rice", "salad"]

// Exercise 14 – Manipulate Arrays With unshift()
menuItems.unshift("bread");
console.log(menuItems); // Output: ["bread", "roast_chicken", "rice", "salad"]

// Bonus (Optional)
const dishes = [
  "beef_kebab",
  "roast_chicken",
  "rice",
  "salad",
  "ice_cream",
  "chocolate_cookie",
  "berry_tart",
];
function menuCheck(menu, dishToFind) {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i] === dishToFind) {
      console.log("Dish exists in the menu");
      return;
    }
  }
  console.log("Dish does NOT exist in the menu");
}
menuCheck(dishes, "rice"); // Output: Dish exists in the menu
menuCheck(dishes, "pizza"); // Output: Dish does NOT exist in the menu
