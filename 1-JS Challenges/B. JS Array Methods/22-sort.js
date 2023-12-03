// sort(): Sorts the elements of an array in place.

// Syntax:
// array.sort(compareFunction);


// 1. **Sort Numbers in Ascending Order:**
//    - **Challenge**: Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order using the `sort()` method.

     function sortNumbersAscending(numbers) {
      return numbers.slice().sort();
      //  return numbers.slice().sort((a, b) =>  a - b);
     }

     var numberArray = [5, 2, 8, 1, 3];
     var sortedArray = sortNumbersAscending(numberArray);
     console.log(sortedArray); // Output: [1, 2, 3, 5, 8]
    

// 2. **Sort Strings in Alphabetical Order:**
//    - **Challenge**: Write a function that takes an array of strings and returns a new array with the strings sorted in alphabetical order using the `sort()` method.

     function sortStringsAlphabetically(strings) {
       return strings.slice().sort();
     }

     var stringArray = ["banana", "kiwi", "apple", "orange"];
     var sortedArray = sortStringsAlphabetically(stringArray);
     console.log(sortedArray); // Output: ["apple", "banana", "kiwi", "orange"]
    

// 3. **Sort Objects by Property:**
  //  - **Challenge**: Write a function that takes an array of objects and a property name, and returns a new array with the objects sorted based on that property using the `sort()` method.

     function sortObjectsByProperty(objects, propertyName) {
       return objects.slice().sort((a, b) => a[propertyName] - b[propertyName]);
     }

     var userArray = [
       { name: "Alice", age: 25 },
       { name: "Bob", age: 30 },
       { name: "Charlie", age: 22 }
     ];

     var sortedByAge = sortObjectsByProperty(userArray, "age");
     console.log(sortedByAge);
     // Output: [ { name: 'Charlie', age: 22 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 } ]
    

// These challenges demonstrate different use cases of the `sort()` method, including sorting numbers in ascending order, strings alphabetically, and objects based on a specified property.