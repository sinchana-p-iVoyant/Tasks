// values(): Returns a new Array Iterator object that contains the values for each index in the array.

// Syntax:
// var iterator = array.values();


// 1. **Get Values from an Object:**
//    - **Challenge**: Write a function that takes an object and returns an array containing the values of the object using the `values()` method.
  
     function getObjectValues(obj) {
       return Array.from(Object.values(obj));
     }

     // Example usage:
     var person = { name: "John", age: 30, city: "New York" };
     var valuesArray = getObjectValues(person);
     console.log(valuesArray); // Output: ["John", 30, "New York"]
    

// 2. **Sum Numeric Values in an Object:**
//    - **Challenge**: Write a function that takes an object with numeric values and returns the sum of those values using the `values()` method.
  
     function sumObjectValues(obj) {
       var numericValues = Array.from(Object.values(obj)).filter(value => typeof value === 'number');
       return numericValues.reduce((sum, value) => sum + value, 0);
     }

     // Example usage:
     var scores = { math: 90, science: 85, english: 92 };
     var totalScore = sumObjectValues(scores);
     console.log(totalScore); // Output: 267
    

// 3. **Check for Empty Object:**
//    - **Challenge**: Write a function that takes an object and returns `true` if it has no values (empty), using the `values()` method.
  
     function isEmptyObject(obj) {
       return Array.from(Object.values(obj)).length === 0;
     }

     // Example usage:
     var emptyObject = {};
     var nonEmptyObject = { key: "value" };
     console.log(isEmptyObject(emptyObject)); // Output: true
     console.log(isEmptyObject(nonEmptyObject)); // Output: false
    

// These challenges demonstrate different use cases of the `values()` method, including extracting values from objects, summing numeric values, and checking for empty objects. Keep in mind that `Object.values()` returns an iterable, and `Array.from()` is used to convert it to an array for further processing.