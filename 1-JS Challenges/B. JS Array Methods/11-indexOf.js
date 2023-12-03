// indexOf(): Returns the first index at which a given element can be found in the array.

// Syntax
// var index = array.indexOf(element, fromIndex);


// 1. **Finding the Index of an Element:**
//    - **Challenge**: Write a function that takes an array of numbers and a target number, and returns the index of the target number using the `indexOf()` method. If the target number is not in the array, return -1.
   
     function findIndex(arr, target) {
       return arr.indexOf(target);
     }

     var numberArray = [1, 2, 3, 4, 5];
     var targetNumber = 3;
     var result = findIndex(numberArray, targetNumber);
     console.log(result); // Output: 2
     

// 2. **Finding the First Occurrence of a String:**
//    - **Challenge**: Write a function that takes an array of strings and a target string, and returns the index of the first occurrence of the target string using the `indexOf()` method.
   
     function findStringIndex(strings, targetString) {
       return strings.indexOf(targetString);
     }

     var stringArray = ["apple", "banana", "kiwi", "banana", "orange"];
     var target = "banana";
     var result = findStringIndex(stringArray, target);
     console.log(result); // Output: 1
     

// 3. **Checking for the Presence of an Object in an Array:**
//    - **Challenge**: Write a function that takes an array of objects and a target object, and returns the index of the target object using the `indexOf()` method.
   
     function findObjectIndex(objects, targetObject) {
       return objects.indexOf(targetObject);
     }

     var userArray = [
       { name: "Alice", age: 25 },
       { name: "Bob", age: 30 },
       { name: "Charlie" }
     ];

     var targetUser = { name: "Bob", age: 30 };
     var result = findObjectIndex(userArray, targetUser);
     console.log(result); // Output: 1
     

// These challenges demonstrate different use cases of the `indexOf()` method, including finding the index of a target element, finding the first occurrence of a string, and checking for the presence of an object in an array.