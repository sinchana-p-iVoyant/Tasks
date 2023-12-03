// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

// Syntax:
// var newLength = array.unshift(element1, element2, ...);


// 1. **Add Elements to the Beginning of an Array:**
//    - **Challenge**: Write a function that takes an array and one or more elements and adds those elements to the beginning of the array using the `unshift()` method.

     function addToBeginning(arr, ...elements) {
       arr.unshift(...elements);
       return arr;
     }

     // Example usage:
     var originalArray = [3, 4, 5];
     var newArray = addToBeginning(originalArray, 1, 2);
     console.log(newArray); // Output: [1, 2, 3, 4, 5]
     

// 2. **Add Elements and Preserve Original Order:**
  //  - **Challenge**: Write a function that takes an array, one or more elements, and adds those elements to the beginning of the array while preserving the original order of the existing elements.

     function addToBeginningPreserveOrder(arr, ...elements) {
       return [...elements, ...arr];
     }

     // Example usage:
     var originalArray = [3, 4, 5];
     var newArray = addToBeginningPreserveOrder(originalArray, 1, 2);
     console.log(newArray); // Output: [1, 2, 3, 4, 5]
     

// 3. **Add Elements and Limit Array Length:**
  //  - **Challenge**: Write a function that takes an array, one or more elements, and adds those elements to the beginning of the array while ensuring that the array length does not exceed a specified limit.- 

     function addToBeginningWithLimit(arr, limit, ...elements) {
       arr.unshift(...elements);
       arr.splice(limit);
       return arr;
     }

     // Example usage:
     var originalArray = [3, 4, 5];
     var newArray = addToBeginningWithLimit(originalArray, 5, 1, 2);
     console.log(newArray); // Output: [1, 2, 3, 4, 5]
     

// These challenges showcase different use cases of the `unshift()` method, including adding elements to the beginning of an array, preserving the original order, and limiting the array length. 