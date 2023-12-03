// every(): Tests whether all elements in the array pass the provided function.

// Syntax:
// array.every(callback(element, index, array), thisArg);

// 1. Checking if All Elements Satisfy a Condition:

// Challenge: Use the every() method to check if all elements in an array satisfy a specific condition.

function areAllPositive(numbers) {
    return numbers.every((number) => number > 0);
}

var positiveNumbers = [2, 4, 6, 8, 10];
var allPositive = areAllPositive(positiveNumbers);
console.log(allPositive); // Output: true
  

// The challenge here is to implement the areAllPositive function using the every() method to check if all numbers in the array are positive.

// 2. Validating an Array of Strings:

// Challenge: Use the every() method to validate that all strings in an array meet certain criteria (e.g., have a minimum length).

function areAllStringsValid(strings, minLength) {
    return strings.every((str) => str.length >= minLength);
}

var words = ["apple", "banana", "cherry"];
var minLength = 5;
var isValid = areAllStringsValid(words, minLength);
console.log(isValid); // Output: false
  

// The challenge is to implement the areAllStringsValid function using the every() method to validate that all strings have a length greater than or equal to the specified minLength.

// 3. Checking Object Properties:

// Challenge: Use the every() method to check if a specific property exists in all objects of an array.

function doAllObjectsHaveProperty(objects, propertyName) {
    return objects.every((obj) => obj.hasOwnProperty(propertyName));
}

var users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie" }
];

var propertyExists = doAllObjectsHaveProperty(users, "age");
console.log(propertyExists); // Output: false

// The challenge is to implement the doAllObjectsHaveProperty function using the every() method to check if all objects in the array have the specified propertyName.