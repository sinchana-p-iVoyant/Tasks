// reduce(): Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// Syntax:
// var result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);

// 1. **Sum of Array Elements:**
//    - **Challenge**: Write a function that takes an array of numbers and returns the sum of all elements using the `reduce()` method.
 
     function sumArrayElements(numbers) {
       return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
     }

     var numberArray = [1, 2, 3, 4, 5];
     var sum = sumArrayElements(numberArray);
     console.log(sum); // Output: 15
    

// 2. **Calculate Average of Array Elements:**
//    - **Challenge**: Write a function that takes an array of numbers and returns the average using the `reduce()` method.
 
     function calculateAverage(numbers) {
       var sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
       return sum / numbers.length;
     }

     var numberArray = [10, 20, 30, 40, 50];
     var average = calculateAverage(numberArray);
     console.log(average); // Output: 30
    

// 3. **Flatten an Array of Arrays:**
//    - **Challenge**: Write a function that takes an array of arrays and flattens it into a single array using the `reduce()` method.
 
     function flattenArrays(arrays) {
       return arrays.reduce((accumulator, currentArray) => accumulator.concat(currentArray), []);
     }

     var arrayofArrays = [[1, 2, 3], [4, 5], [6, 7, 8]];
     var flattenedArray = flattenArrays(arrayofArrays);
     console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
    

// These challenges demonstrate different use cases of the `reduce()` method, including calculating sums and averages of array elements and flattening arrays of arrays.