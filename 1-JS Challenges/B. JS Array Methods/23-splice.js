// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// Syntax:
// array.splice(start, deleteCount, item1, item2, ...);

// 1. **Remove Elements from an Array:**
//    - **Challenge**: Write a function that takes an array, a start index, and the number of elements to remove, and returns a new array with those elements removed using the `splice()` method.

     function removeElements(arr, startIndex, count) {
       arr.splice(startIndex, count);
       return arr;
     }

     var originalArray = [1, 2, 3, 4, 5];
     var newArray = removeElements(originalArray, 1, 2);
     console.log(newArray); // Output: [1, 4, 5]
   

// 2. **Insert Elements into an Array:**
//    - **Challenge**: Write a function that takes an array, a start index, and elements to insert, and returns a new array with those elements inserted at the specified index using the `splice()` method.

     function insertElements(arr, startIndex, ...elements) {
       arr.splice(startIndex, 0, ...elements);
       return arr;
     }

     var originalArray = [1, 2, 3, 4, 5];
     var newArray = insertElements(originalArray, 2, 6, 7);
     console.log(newArray); // Output: [1, 2, 6, 7, 3, 4, 5]
   

// 3. **Replace Elements in an Array:**
//    - **Challenge**: Write a function that takes an array, a start index, the number of elements to replace, and new elements, and returns a new array with the specified elements replaced using the `splice()` method.

     function replaceElements(arr, startIndex, count, ...newElements) {
       arr.splice(startIndex, count, ...newElements);
       return arr;
     }

     var originalArray = [1, 2, 3, 4, 5];
     var newArray = replaceElements(originalArray, 1, 2, 6, 7);
     console.log(newArray); // Output: [1, 6, 7, 4, 5]
   

// These challenges showcase different use cases of the `splice()` method, including removing elements from arrays, inserting elements at specific positions, and replacing elements within an array. 