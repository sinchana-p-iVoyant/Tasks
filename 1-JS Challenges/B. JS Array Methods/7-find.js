// find(): Returns the first element in the array that satisfies the provided testing function.

// Syntax:
// var result = array.find(callback(element, index, array), thisArg);


// 1. **Finding the First Even Number:**
//    - **Challenge**: Write a function that takes an array of numbers and returns the first even number found using the `find()` method.
   
     function findFirstEvenNumber(numbers) {
       return numbers.find((number) => number % 2 === 0);
     }

     var numberArray = [1, 3, 5, 2, 8, 7, 6];
     var firstEvenNumber = findFirstEvenNumber(numberArray);
     console.log(firstEvenNumber); // Output: 2
     

// 2. **Finding a User by Name:**
//    - **Challenge**: Write a function that takes an array of user objects and a name, and returns the first user with the specified name using the `find()` method.
   
     function findUserByName(users, targetName) {
       return users.find((user) => user.name === targetName);
     }

     var userArray = [
       { id: 1, name: "Alice" },
       { id: 2, name: "Bob" },
       { id: 3, name: "Charlie" }
     ];

     var foundUser = findUserByName(userArray, "Bob");
     console.log(foundUser); // Output: { id: 2, name: "Bob" }
    

// 3. **Finding a Specific Object Property:**
//    - **Challenge**: Write a function that takes an array of objects and a property name, and returns the first object where the specified property has a certain value using the `find()` method.

     function findObjectByProperty(objects, propertyName, targetValue) {
       return objects.find((obj) => obj[propertyName] === targetValue);
     }

     var fruitArray = [
       { name: "apple", color: "red" },
       { name: "banana", color: "yellow" },
       { name: "kiwi", color: "brown" }
     ];

     var foundFruit = findObjectByProperty(fruitArray, "color", "yellow");
     console.log(foundFruit); // Output: { name: "banana", color: "yellow" }
     

// These challenges are designed to explore different use cases of the `find()` method, including finding specific numbers, finding objects based on property values, and searching for users by name. 

