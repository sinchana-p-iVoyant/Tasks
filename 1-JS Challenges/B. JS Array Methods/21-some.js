// some(): Tests whether at least one element in the array passes the provided function.

// Syntax:
// var result = array.some(callback(element, index, array), thisArg);


// 1. **Check for Even Numbers:**
//    - **Challenge**: Write a function that takes an array of numbers and returns `true` if at least one element is an even number using the `some()` method.

     function hasEvenNumber(numbers) {
       return numbers.some((number) => number % 2 === 0);
     }

     var numberArray = [1, 3, 5, 6, 7];
     var hasEven = hasEvenNumber(numberArray);
     console.log(hasEven); // Output: true
     

// 2. **Check for Strings with a Specific Length:**
  //  - **Challenge**: Write a function that takes an array of strings and a length, and returns `true` if at least one string has the specified length using the `some()` method.

     function hasStringWithLength(strings, length) {
       return strings.some((str) => str.length === length);
     }

     var stringArray = ["apple", "banana", "kiwi"];
     var hasStringOfLengthThree = hasStringWithLength(stringArray, 4);
     console.log(hasStringOfLengthThree); // Output: true
     

// 3. **Check for Object Property Presence:**
  //  - **Challenge**: Write a function that takes an array of objects and a property name, and returns `true` if at least one object has the specified property using the `some()` method.

     function hasObjectWithProperty(objects, propertyName) {
       return objects.some((obj) => Object.keys(obj).includes(propertyName));
     }

     var userArray = [
       { name: "Alice", age: 25 },
       { name: "Bob", age: 30 },
       { name: "Charlie" }
     ];

     var hasAgeProperty = hasObjectWithProperty(userArray, "age");
     console.log(hasAgeProperty); // Output: true
     

// These challenges demonstrate different use cases of the `some()` method, including checking for the presence of even numbers, strings of a specific length, and objects with a specified property. 