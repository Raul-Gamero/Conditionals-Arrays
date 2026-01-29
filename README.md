# JavaScript Homework – Conditionals & Arrays

## 🎯 Objective
The goal of this homework is to practice:
- **Conditional statements** in JavaScript (`if`, `else if`, `else`)
- **Comparison and logical operators**
- **Arrays** and their most common methods

---

## 🧠 Part 1 – Conditionals

### Exercise 1 – Comparison with the Equality Operator (`==`)
Write a function `compareWithEquality(a, b)` that:
- returns `"Equal"` if `a == b`
- returns `"Not equal"` otherwise

👉 Test your function with:
- `compareWithEquality(5, "5")`
- `compareWithEquality(10, 10)`
- `compareWithEquality(3, 7)`

---

### Exercise 2 – Comparison with the Strict Equality Operator (`===`)
Write a function `compareWithStrictEquality(a, b)` that:
- returns `"Strictly equal"` if `a === b`
- returns `"Not strictly equal"` otherwise

👉 Test with:
- `compareWithStrictEquality(5, "5")`
- `compareWithStrictEquality(5, 5)`

---

### Exercise 3 – Practice Comparing Different Values
Create a function `compareNumbers(a, b)` that:
- returns `"a is greater than b"` if `a > b`
- returns `"a is less than b"` if `a < b`
- returns `"a is equal to b"` if `a === b`

---

### Exercise 4 – Use Conditional Logic with If Statements
Write a function `checkAge(age)` that:
- prints `"Minor"` if the age is less than 18
- prints `"Adult"` otherwise

---

### Exercise 5 – Logical Order in If Else Statements
Write a function `gradeScore(score)` that:
- returns `"Excellent"` if `score >= 90`
- returns `"Good"` if `score >= 70`
- returns `"Average"` if `score >= 50`
- returns `"Fail"` otherwise

⚠️ Be careful with the order of conditions.

---

### Exercise 6 – Chaining If Else Statements
Create a function `weatherMessage(temperature)` that:
- returns `"Very cold"` if temperature < 0
- returns `"Cold"` if temperature is between 0 and 15
- returns `"Warm"` if temperature is between 16 and 25
- returns `"Hot"` if temperature > 25

---

### Exercise 7 – Logical Operators (`&&`, `||`)
Write a function `canAccess(age, hasPermission)` that:
- returns `"Access granted"` if `age >= 18` **AND** `hasPermission === true`
- returns `"Access denied"` otherwise

---

## 📦 Part 2 – Arrays

### Exercise 8 – Store Multiple Values in One Variable
Create an array called `menuItems` containing:
- `"beef_kebab"`
- `"roast_chicken"`
- `"rice"`
- `"salad"`

Print the array to the console.

---

### Exercise 9 – Nest One Array Within Another Array
Create an array `restaurantMenu` containing:
- an array of main dishes
- an array of desserts

---

Exercise 10 – Access Multi-Dimensional Arrays With Indexes

From the array above:

print the first main dish

print the last dessert

Exercise 11 – Manipulate Arrays With push()

Add "soup" to the end of the menuItems array.

---

Exercise 12 – Manipulate Arrays With pop()

Remove the last item from menuItems and print it.

---

Exercise 13 – Manipulate Arrays With shift()

Remove the first item from menuItems and print the updated array.

---

Exercise 14 – Manipulate Arrays With unshift()

Add "bread" to the beginning of the menuItems array.

✅ Bonus (Optional)

Create a function that loops through an array and prints each item

Combine arrays + conditionals (example: check if a dish exists in the menu)

---

📌 Instructions

Use JavaScript only

Test your code using node app.js

Comment your code where necessary
