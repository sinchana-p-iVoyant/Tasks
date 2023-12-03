// filter(): Creates a new array with all elements that pass the test implemented by the provided function.

// Syntax:
// var newArray = array.filter(callback(element, index, array), thisArg);

// 1. **Filtering Even Numbers:**
//    - **Challenge**: Write a function that takes an array of numbers and returns a new array containing only the even numbers using the `filter()` method.
 
     function filterEvenNumbers(numbers) {
       return numbers.filter((number) => number % 2 === 0);
     }

     var originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     var evenNumbers = filterEvenNumbers(originalArray);
     console.log(evenNumbers); // Output: [2, 4, 6, 8]
  

// 2. **Filtering Words by Length:**
//    - **Challenge**: Write a function that takes an array of words and a minimum length, and returns a new array containing only words with lengths greater than or equal to the specified minimum using the `filter()` method.
 
     function filterWordsByLength(words, minLength) {
       return words.filter((word) => word.length >= minLength);
     }

     var wordArray = ["apple", "banana", "kiwi", "orange", "grape"];
     var filteredWords = filterWordsByLength(wordArray, 5);
     console.log(filteredWords); // Output: ["banana", "orange"]
  

// 3. **Filtering Objects by Property Value:**
//    - **Challenge**: Write a function that takes an array of objects and a property name, and returns a new array containing only objects where the specified property has a certain value using the `filter()` method.
 
     function filterObjectsByProperty(objects, propertyName, targetValue) {
       return objects.filter((obj) => obj[propertyName] === targetValue);
     }

     var userArray = [
       { name: "Alice", age: 25 },
       { name: "Bob", age: 30 },
       { name: "Charlie", age: 25 },
       { name: "David", age: 35 }
     ];

     var filteredUsers = filterObjectsByProperty(userArray, "age", 25);
     console.log(filteredUsers); // Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }]
  

// These challenges are designed to explore different use cases of the `filter()` method, including filtering numbers, filtering words based on length, and filtering objects based on property values. 