// fill(): Fills all the elements of an array with a static value.

// Syntax:
// array.fill(value, start, end);

// 1. **Array Initialization with a Default Value:**
//    - **Challenge**: Write a function that takes an array and a value, and returns a new array where all elements are initialized with the provided value using the `fill()` method.
  
     function initializeArray(length, value) {
       return new Array(length).fill(value);
     }

     var newArray = initializeArray(5, 0);
     console.log(newArray); // Output: [0, 0, 0, 0, 0]
     

// 2. **Replace Elements in a Subarray:**
//    - **Challenge**: Write a function that replaces a specified range of elements in an array with a new value using the `fill()` method.
  
     function replaceElements(array, start, end, newValue) {
       return array.fill(newValue, start, end + 1);
     }

     var originalArray = [1, 2, 3, 4, 5];
     var modifiedArray = replaceElements(originalArray, 1, 3, 0);
     console.log(modifiedArray); // Output: [1, 0, 0, 0, 5]
     

// 3. **Creating a Sequence of Numbers:**
//    - **Challenge**: Write a function that generates an array containing a sequence of numbers starting from a specified value up to a specified length using the `fill()` method.
  
     function generateSequence(startValue, length) {
       return new Array(length).fill().map((_, index) => startValue + index);
     }

     var sequence = generateSequence(3, 5);
     console.log(sequence); // Output: [3, 4, 5, 6, 7]
     

// These challenges are designed to explore different use cases of the `fill()` method, including array initialization, replacing elements in a subarray, and generating sequences of numbers.