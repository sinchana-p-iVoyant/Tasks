// shift(): Removes the first element from an array and returns that element.

// Syntax
// var firstElement = array.shift();

// 1. **Remove First Element from an Array:**
//    - **Challenge**: Write a function that takes an array and removes the first element using the `shift()` method.

     function removeFirstElement(arr) {
       arr.shift();
       return arr;
     }

     var originalArray = [1, 2, 3, 4, 5];
     var newArray = removeFirstElement(originalArray);
     console.log(newArray); // Output: [2, 3, 4, 5]
     

// 2. **Extract and Remove First Character from a String:**
//    - **Challenge**: Write a function that takes a string and removes the first character, returning the modified string using the `split()`, `shift()`, and `join()` methods.

     function removeFirstCharacter(str) {
       var charArray = str.split("");
       charArray.shift();
       return charArray.join("");
     }

     var originalString = "Hello, world!";
     var newString = removeFirstCharacter(originalString);
     console.log(newString); // Output: "ello, world!"
     

// 3. **Implement a Queue:**
//    - **Challenge**: Implement a simple queue using an array and provide functions for enqueuing and dequeuing elements using the `shift()` method.

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
     

// These challenges showcase different use cases of the `shift()` method, including removing elements from the beginning of arrays, modifying strings, and implementing a simple queue data structure. 