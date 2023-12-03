// toString(): Returns a string representing the array.

// Syntax:
// var stringRepresentation = array.toString();

// The `toString()` method in JavaScript is used to convert an array, object, or value to a string. Here are three coding challenges related to using the `toString()` method, along with their solutions:

// 1. **Convert Array to String:**
//    - **Challenge**: Write a function that takes an array and returns a comma-separated string representation of the array using the `toString()` method.
   
     function arrayToString(arr) {
       return arr.toString();
     }

     // Example usage:
     var numbers = [1, 2, 3, 4, 5];
     var result = arrayToString(numbers);
     console.log(result); // Output: "1,2,3,4,5"
     

// 2. **Convert Object to String:**
//    - **Challenge**: Write a function that takes an object and returns a string representation of the object using the `toString()` method.
   
     function objectToString(obj) {
       return obj.toString();
     }

     // Example usage:
     var person = { name: "John", age: 30, city: "New York" };
     var result = objectToString(person);
     console.log(result); // Output: "[object Object]"
     

// 3. **Convert Number to String:**
//    - **Challenge**: Write a function that takes a number and returns a string representation of the number using the `toString()` method.
   
     function numberToString(num) {
       return num.toString();
     }

     // Example usage:
     var age = 25;
     var result = numberToString(age);
     console.log(result); // Output: "25"
     

// These challenges demonstrate different use cases of the `toString()` method, including converting arrays, objects, and numbers to string representations. Keep in mind that the default `toString()` method may not always provide the desired format for objects, and custom formatting may be necessary for more complex data structures.