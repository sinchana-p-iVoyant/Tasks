// includes(): Determines whether an array includes a certain element.

// Syntax
// var isPresent = array.includes(element, fromIndex);

// 1. **Checking for Presence of an Element:**
//    - **Challenge**: Write a function that takes an array of numbers and a target number, and returns `true` if the target number is present in the array using the `includes()` method.
  
     function includesNumber(arr, target) {
       return arr.includes(target);
     }

     var numberArray = [1, 2, 3, 4, 5];
     var targetNumber = 3;
     var result = includesNumber(numberArray, targetNumber);
     console.log(result); // Output: true
     

// 2. **Checking for Substring Presence:**
//    - **Challenge**: Write a function that takes a string and a substring, and returns `true` if the substring is present in the string using the `includes()` method.
  
     function includesSubstring(str, substring) {
       return str.includes(substring);
     }

     var sampleString = "Hello, world!";
     var substringToCheck = "world";
     var result = includesSubstring(sampleString, substringToCheck);
     console.log(result); // Output: true
     

// 3. **Checking for Object Property Presence:**
//    - **Challenge**: Write a function that takes an array of objects and a property name, and returns `true` if any object in the array has the specified property using the `includes()` method.
 
     function includesProperty(objects, propertyName) {
       return objects.some((obj) => Object.keys(obj).includes(propertyName));
     }

     var userArray = [
       { name: "Alice", age: 25 },
       { name: "Bob", age: 30 },
       { name: "Charlie" }
     ];

     var propertyToCheck = "age";
     var result = includesProperty(userArray, propertyToCheck);
     console.log(result); // Output: true
    
     
// These challenges showcase different use cases of the `includes()` method, including checking for the presence of elements in arrays, substrings in strings, and specific properties in objects. 

