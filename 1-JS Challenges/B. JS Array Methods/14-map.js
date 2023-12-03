// map(): Creates a new array with the results of calling a provided function on every element in the array.

// Syntax:
// var newArray = array.map(callback(element, index, array), thisArg);

// 1. **Squaring Array Elements:**
//    - **Challenge**: Write a function that takes an array of numbers and returns a new array where each element is squared using the `map()` method.
   
     function squareArrayElements(numbers) {
       return numbers.map((number) => number * number);
     }

     var originalArray = [1, 2, 3, 4, 5];
     var squaredArray = squareArrayElements(originalArray);
     console.log(squaredArray); // Output: [1, 4, 9, 16, 25]

// 2. **Converting Fahrenheit to Celsius:**
//    - **Challenge**: Write a function that takes an array of temperatures in Fahrenheit and returns a new array where each temperature is converted to Celsius using the `map()` method.
   
     function fahrenheitToCelsius(temperaturesF) {
       return temperaturesF.map((tempF) => ((tempF - 32) * 5) / 9);
     }

     var temperaturesFahrenheit = [32, 68, 104, 212];
     var temperaturesCelsius = fahrenheitToCelsius(temperaturesFahrenheit);
     console.log(temperaturesCelsius); // Output: [0, 20, 40, 100]
     

// 3. **Extracting Object Properties:**
//    - **Challenge**: Write a function that takes an array of objects and a property name, and returns a new array containing values of the specified property using the `map()` method.
   
     function extractPropertyValues(objects, propertyName) {
       return objects.map((obj) => obj[propertyName]);
     }

     var userArray = [
       { name: "Alice", age: 25 },
       { name: "Bob", age: 30 },
       { name: "Charlie", age: 22 }
     ];

     var agesArray = extractPropertyValues(userArray, "age");
     console.log(agesArray); // Output: [25, 30, 22]
     

// These challenges demonstrate different use cases of the `map()` method, including transforming array elements, converting units, and extracting specific object properties. 