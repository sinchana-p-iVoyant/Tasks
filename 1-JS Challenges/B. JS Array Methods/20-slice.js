// slice(): Returns a shallow copy of a portion of an array into a new array object.

// Syntax:
// var newArray = array.slice(start, end);


// 1. **Extract a Subarray:**
//    - **Challenge**: Write a function that takes an array and two indices and returns a new array containing the elements between those indices using the `slice()` method.

     function extractSubarray(arr, startIndex, endIndex) {
       return arr.slice(startIndex, endIndex + 1);
     }

     var originalArray = [1, 2, 3, 4, 5];
     var subarray = extractSubarray(originalArray, 1, 3);
     console.log(subarray); // Output: [2, 3, 4]
   

// 2. **Clone an Array:**
//    - **Challenge**: Write a function that takes an array and returns a new array with the same elements using the `slice()` method.

     function cloneArray(arr) {
       return arr.slice();
     }

     var originalArray = [1, 2, 3, 4, 5];
     var clonedArray = cloneArray(originalArray);
     console.log(clonedArray); // Output: [1, 2, 3, 4, 5]
   

// 3. **Extract First N Elements:**
//    - **Challenge**: Write a function that takes an array and a number `n` and returns a new array containing the first `n` elements using the `slice()` method.

     function extractFirstNElements(arr, n) {
       return arr.slice(0, n);
     }

     var originalArray = [1, 2, 3, 4, 5];
     var firstThreeElements = extractFirstNElements(originalArray, 3);
     console.log(firstThreeElements); // Output: [1, 2, 3]
   

// These challenges demonstrate different use cases of the `slice()` method, including extracting subarrays, cloning arrays, and extracting a specified number of elements from the beginning of an array. 