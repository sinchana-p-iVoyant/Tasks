// join(): Joins all elements of an array into a string.

// Syntax:
// var joinedString = array.join(separator);

// 1. **Joining Array Elements into a String:**
//    - **Challenge**: Write a function that takes an array of strings and joins them into a single string using the `join()` method.

     function joinStrings(strings, separator) {
       return strings.join(separator);
     }

     var stringArray = ["apple", "banana", "kiwi"];
     var separator = ", ";
     var result = joinStrings(stringArray, separator);
     console.log(result); // Output: "apple, banana, kiwi"
     
                                                       
// 2. **Joining Object Properties into a String:**
//    - **Challenge**: Write a function that takes an array of objects and joins a specific property of each object into a single string using the `join()` method.

     function joinObjectProperties(objects, propertyName, separator) {
       return objects.map((obj) => obj[propertyName]).join(separator);
     } 

     var userArray = [
       { name: "Alice", age: 25 },
       { name: "Bob", age: 30 },
       { name: "Charlie", age: 22 }
     ];

     var separator = " | ";
     var result = joinObjectProperties(userArray, "name", separator);
     console.log(result); // Output: "Alice | Bob | Charlie"
     

// 3. **Joining Numbers into a CSV String:**
//    - **Challenge**: Write a function that takes an array of numbers and joins them into a CSV (Comma-Separated Values) string using the `join()` method.

     function joinNumbersToCSV(numbers) {
       return numbers.join(",");
     }
     
     var numberArray = [1, 2, 3, 4, 5];
     var result = joinNumbersToCSV(numberArray);
     console.log(result); // Output: "1,2,3,4,5"
     

// These challenges demonstrate different use cases of the `join()` method, including joining strings with a custom separator, joining specific object properties, and creating a CSV string from an array of numbers. 