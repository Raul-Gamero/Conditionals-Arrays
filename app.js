// ============================================================
// PART 1 – CONDITIONALS
// ============================================================

// Exercise 1: Comparison with the Equality Operator (==)
// The == operator converts types before comparing (type coercion)
// Example: 5 == "5" is true because "5" is converted to number 5
function compareWithEquality(a, b) {
  if (a == b) {
    return "Equal";
  } else {
    return "Not equal";
  }
}

// Test cases
console.log("=== Exercise 1 ===");
console.log(compareWithEquality(5, "5")); // "Equal" - string "5" converts to number
console.log(compareWithEquality(10, 10)); // "Equal"
console.log(compareWithEquality(3, 7)); // "Not equal"
console.log("");

// -----------------------------------------------------------

// Exercise 2: Comparison with the Strict Equality Operator (===)
// The === operator checks both value AND type (no type coercion)
// Example: 5 === "5" is false because one is number, other is string
function compareWithStrictEquality(a, b) {
  if (a === b) {
    return "Strictly equal";
  } else {
    return "Not strictly equal";
  }
}

// Test cases
console.log("=== Exercise 2 ===");
console.log(compareWithStrictEquality(5, "5")); // "Not strictly equal" - different types
console.log(compareWithStrictEquality(5, 5)); // "Strictly equal"
console.log("");

// -----------------------------------------------------------

// Exercise 3: Practice Comparing Different Values
// Using comparison operators: >, <, ===
function compareNumbers(a, b) {
  if (a > b) {
    return "a is greater than b";
  } else if (a < b) {
    return "a is less than b";
  } else {
    return "a is equal to b";
  }
}

// Test cases
console.log("=== Exercise 3 ===");
console.log(compareNumbers(10, 5)); // "a is greater than b"
console.log(compareNumbers(3, 8)); // "a is less than b"
console.log(compareNumbers(7, 7)); // "a is equal to b"
console.log("");

// -----------------------------------------------------------

// Exercise 4: Use Conditional Logic with If Statements
// Simple if/else checking if person is minor or adult
function checkAge(age) {
  if (age < 18) {
    console.log("Minor");
  } else {
    console.log("Adult");
  }
}

// Test cases
console.log("=== Exercise 4 ===");
checkAge(15); // "Minor"
checkAge(18); // "Adult"
checkAge(25); // "Adult"
console.log("");

// -----------------------------------------------------------

// Exercise 5: Logical Order in If Else Statements
// Order matters! Starting with highest condition first
// If we check >= 50 first, scores of 90 would return "Average"
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

// Test cases
console.log("=== Exercise 5 ===");
console.log(gradeScore(95)); // "Excellent"
console.log(gradeScore(75)); // "Good"
console.log(gradeScore(55)); // "Average"
console.log(gradeScore(40)); // "Fail"
console.log("");

// -----------------------------------------------------------

// Exercise 6: Chaining If Else Statements
// Multiple conditions creating temperature ranges
function weatherMessage(temperature) {
  if (temperature < 0) {
    return "Very cold";
  } else if (temperature >= 0 && temperature <= 15) {
    return "Cold";
  } else if (temperature >= 16 && temperature <= 25) {
    return "Warm";
  } else {
    // temperature > 25
    return "Hot";
  }
}

// Test cases
console.log("=== Exercise 6 ===");
console.log(weatherMessage(-5)); // "Very cold"
console.log(weatherMessage(10)); // "Cold"
console.log(weatherMessage(20)); // "Warm"
console.log(weatherMessage(30)); // "Hot"
console.log("");

// -----------------------------------------------------------

// Exercise 7: Logical Operators (&&, ||)
// && (AND) - Both conditions must be true
// || (OR) - At least one condition must be true
function canAccess(age, hasPermission) {
  if (age >= 18 && hasPermission === true) {
    return "Access granted";
  } else {
    return "Access denied";
  }
}

// Test cases
console.log("=== Exercise 7 ===");
console.log(canAccess(20, true)); // "Access granted" - both conditions met
console.log(canAccess(20, false)); // "Access denied" - no permission
console.log(canAccess(16, true)); // "Access denied" - too young
console.log(canAccess(16, false)); // "Access denied" - neither condition met
console.log("");

// ============================================================
// PART 2 – ARRAYS
// ============================================================

// Exercise 8: Store Multiple Values in One Variable
// Arrays use square brackets [] and can hold multiple values
let menuItems = ["beef_kebab", "roast_chicken", "rice", "salad"];

console.log("=== Exercise 8 ===");
console.log("Menu Items:", menuItems);
console.log("");

// -----------------------------------------------------------

// Exercise 9: Nest One Array Within Another Array
// Multi-dimensional array (array containing arrays)
let restaurantMenu = [
  ["beef_kebab", "roast_chicken", "rice", "salad"], // Main dishes
  ["ice_cream", "cake", "fruit_salad", "tiramisu"], // Desserts
];

console.log("=== Exercise 9 ===");
console.log("Restaurant Menu:", restaurantMenu);
console.log("");

// -----------------------------------------------------------

// Exercise 10: Access Multi-Dimensional Arrays With Indexes
// Array indexing: [row][column] - indexes start at 0!
// restaurantMenu[0] = first array (main dishes)
// restaurantMenu[0][0] = first item in first array

console.log("=== Exercise 10 ===");

// First main dish (first array, first element)
console.log("First main dish:", restaurantMenu[0][0]); // "beef_kebab"

// Last dessert (second array, last element)
// restaurantMenu[1] = desserts array
// restaurantMenu[1].length = 4, so last index is 3 (length - 1)
// Length property returns the number of elements in an array
let dessertsArray = restaurantMenu[1];
let lastDessert = dessertsArray[dessertsArray.length - 1];
console.log("Last dessert:", lastDessert); // "tiramisu"

// Shorter version:
console.log(
  "Last dessert (short):",
  restaurantMenu[1][restaurantMenu[1].length - 1],
);
console.log("");

// -----------------------------------------------------------

// Exercise 11: Manipulate Arrays With push()
// push() adds element(s) to the END of array and returns new length
console.log("=== Exercise 11 ===");
console.log("Before push:", menuItems);
menuItems.push("soup");
console.log("After push:", menuItems); // ["beef_kebab", "roast_chicken", "rice", "salad", "soup"]
console.log("");

// -----------------------------------------------------------

// Exercise 12: Manipulate Arrays With pop()
// pop() removes the LAST element and returns it
console.log("=== Exercise 12 ===");
console.log("Before pop:", menuItems);
let removedItem = menuItems.pop();
console.log("Removed item:", removedItem); // "soup"
console.log("After pop:", menuItems); // ["beef_kebab", "roast_chicken", "rice", "salad"]
console.log("");

// -----------------------------------------------------------

// Exercise 13: Manipulate Arrays With shift()
// shift() removes the FIRST element and returns it
console.log("=== Exercise 13 ===");
console.log("Before shift:", menuItems);
let firstItem = menuItems.shift();
console.log("Removed first item:", firstItem); // "beef_kebab"
console.log("After shift:", menuItems); // ["roast_chicken", "rice", "salad"]
console.log("");

// -----------------------------------------------------------

// Exercise 14: Manipulate Arrays With unshift()
// unshift() adds element(s) to the BEGINNING of array
console.log("=== Exercise 14 ===");
console.log("Before unshift:", menuItems);
menuItems.unshift("bread");
console.log("After unshift:", menuItems); // ["bread", "roast_chicken", "rice", "salad"]
console.log("");

// ============================================================
// BONUS EXERCISES
// ============================================================

// Bonus 1: Loop Through Array and Print Each Item
console.log("=== Bonus 1: Loop Through Array ===");

function printMenuItems(items) {
  console.log("Menu items:");
  for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1}. ${items[i]}`);
  }
}

printMenuItems(menuItems);
console.log("");

// Alternative with forEach:
function printMenuItemsForEach(items) {
  console.log("Menu items (forEach):");
  items.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

printMenuItemsForEach(menuItems);
console.log("");

// -----------------------------------------------------------

// Bonus 2: Combine Arrays + Conditionals
console.log("=== Bonus 2: Check if Dish Exists ===");

function dishExists(menu, dishName) {
  // Convert dish name to lowercase for case-insensitive search
  let searchDish = dishName.toLowerCase();

  // Check if dish exists in the menu
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].toLowerCase() === searchDish) {
      return `Yes, "${dishName}" is available!`;
    }
  }

  return `Sorry, "${dishName}" is not on the menu.`;
}

// Test cases
console.log(dishExists(menuItems, "rice")); // Available
console.log(dishExists(menuItems, "pizza")); // Not available
console.log(dishExists(menuItems, "BREAD")); // Available (case-insensitive)
console.log("");

// Alternative using includes() method (modern approach)
function dishExistsSimple(menu, dishName) {
  if (menu.includes(dishName)) {
    return `Yes, "${dishName}" is available!`;
  } else {
    return `Sorry, "${dishName}" is not on the menu.`;
  }
}

console.log("=== Using includes() method ===");
console.log(dishExistsSimple(menuItems, "bread"));
console.log(dishExistsSimple(menuItems, "pasta"));
console.log("");

// -----------------------------------------------------------

// EXTRA BONUS: Advanced Array + Conditional Example
console.log("=== Extra Bonus: Filter Menu by Category ===");

// Recreate full menu for this example
let fullMenu = [
  { name: "beef_kebab", category: "main", price: 12 },
  { name: "roast_chicken", category: "main", price: 15 },
  { name: "rice", category: "side", price: 5 },
  { name: "salad", category: "side", price: 6 },
  { name: "ice_cream", category: "dessert", price: 4 },
  { name: "cake", category: "dessert", price: 5 },
];

function filterByCategory(menu, category) {
  let result = [];

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].category === category) {
      result.push(menu[i].name);
    }
  }

  return result;
}

console.log("Main dishes:", filterByCategory(fullMenu, "main"));
console.log("Desserts:", filterByCategory(fullMenu, "dessert"));
console.log("Sides:", filterByCategory(fullMenu, "side"));

console.log("");
console.log("✅ All exercises completed!");
