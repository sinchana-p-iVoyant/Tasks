// findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.

// Syntax:
// var index = array.findIndex(callback(element, index, array), thisArg);

// 1. **Finding the Index of the First Negative Number:**
//    - **Challenge**: Write a function that takes an array of numbers and returns the index of the first negative number using the `findIndex()` method.
   
     function findIndexFirstNegativeNumber(numbers) {
       return numbers.findIndex((number) => number < 0);
     }

     var numberArray = [1, 3, -5, 2, -8, 7, 6];
     var indexFirstNegative = findIndexFirstNegativeNumber(numberArray);
     console.log(indexFirstNegative); // Output: 2
    

// 2. **Finding the Index of a User by Name:**
//    - **Challenge**: Write a function that takes an array of user objects and a name, and returns the index of the first user with the specified name using the `findIndex()` method.
   
     function findIndexUserByName(users, targetName) {
       return users.findIndex((user) => user.name === targetName);
     }

     var userArray = [
       { id: 1, name: "Alice" },
       { id: 2, name: "Bob" },
       { id: 3, name: "Charlie" }
     ];

     var indexUserBob = findIndexUserByName(userArray, "Bob");
     console.log(indexUserBob); // Output: 1
    

// 3. **Finding the Index of a Specific Object Property:**
//    - **Challenge**: Write a function that takes an array of objects and a property name, and returns the index of the first object where the specified property has a certain value using the `findIndex()` method.
   
     function findIndexObjectByProperty(objects, propertyName, targetValue) {
       return objects.findIndex((obj) => obj[propertyName] === targetValue);
     }

     var fruitArray = [
       { name: "apple", color: "red" },
       { name: "banana", color: "yellow" },
       { name: "kiwi", color: "brown" }
     ];

     var indexYellowFruit = findIndexObjectByProperty(fruitArray, "color", "yellow");
     console.log(indexYellowFruit); // Output: 1
    

// These challenges are designed to explore different use cases of the `findIndex()` method, including finding the index of specific numbers, finding the index of users by name, and locating the index of objects based on property values. Feel free to run the solutions and experiment with the code.

