// push(): Adds one or more elements to the end of an array and returns the new length of the array.

// Syntax:
// var newLength = array.push(element1, element2, ...);

// 1. **Appending Elements to an Array:**
//    - **Challenge**: Write a function that takes an array and an element, and appends the element to the end of the array using the `push()` method.

     function appendElement(arr, element) {
       arr.push(element);
       return arr;
     }

     var originalArray = [1, 2, 3, 4];
     var newArray = appendElement(originalArray, 5);
     console.log(newArray); // Output: [1, 2, 3, 4, 5]
     

// 2. **Combine Two Arrays:**
//    - **Challenge**: Write a function that takes two arrays and combines them into a single array using the `push()` method.

     function combineArrays(arr1, arr2) {
       for (let element of arr2) {
         arr1.push(element);
       }
       return arr1;
     }

     var array1 = [1, 2, 3];
     var array2 = [4, 5, 6];
     var combinedArray = combineArrays(array1, array2);
     console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
     

// 3. **Implement a Queue:**
//    - **Challenge**: Implement a simple queue using an array and provide functions for enqueuing and dequeuing elements.

     function Queue() {
       this.queueArray = [];

       this.enqueue = function (element) {
         this.queueArray.push(element);
       };

       this.dequeue = function () {
         return this.queueArray.shift();
       };

       this.isEmpty = function () {
         return this.queueArray.length === 0;
       };
     }

     var queue = new Queue();
     queue.enqueue(1);
     queue.enqueue(2);
     queue.enqueue(3);

     console.log(queue.dequeue()); // Output: 1
     console.log(queue.dequeue()); // Output: 2
     

// These challenges showcase different use cases of the `push()` method, including appending elements to arrays, combining arrays, and implementing a simple queue data structure. 