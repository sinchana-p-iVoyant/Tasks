// pop(): Removes the last element from an array and returns that element.

// Syntax:
// var lastElement = array.pop();

// 1. **Remove Last Element from an Array:**
//    - **Challenge**: Write a function that takes an array and removes the last element using the `pop()` method.
  
     function removeLastElement(arr) {
       arr.pop();
       return arr;
     }

     var originalArray = [1, 2, 3, 4, 5];
     var newArray = removeLastElement(originalArray);
     console.log(newArray); // Output: [1, 2, 3, 4]
     

// 2. **Extract and Remove Last Character from a String:**
//    - **Challenge**: Write a function that takes a string and removes the last character, returning the modified string using the `pop()` method (for strings converted to arrays).
  
     function removeLastCharacter(str) {
       var charArray = str.split("");
       console.log(charArray) 
      //[
      //   'H', 'e', 'l', 'l',
      //   'o', ',', ' ', 'w',
      //   'o', 'r', 'l', 'd',
      //   '!'
      // ]
       charArray.pop();
       return charArray.join("");
     }

     var originalString = "Hello, world!";
     var newString = removeLastCharacter(originalString);
     console.log(newString); // Output: "Hello, world"
     

// 3. **Simulate a Stack:**
//    - **Challenge**: Implement a simple stack using an array and provide functions for pushing and popping elements.
  
     function Stack() {
       this.stackArray = [];

       this.push = function (element) {
         this.stackArray.push(element);
       };

       this.pop = function () {
         return this.stackArray.pop();
       };

       this.isEmpty = function () { 
         return this.stackArray.length === 0;
       };
    }

     var stack = new Stack();
     stack.push(1);
     stack.push(2);
     stack.push(3);

     console.log(stack.pop()); // Output: 3
     console.log(stack.pop()); // Output: 2  
     console.log(stack.pop()); // Output: 1   
     console.log(stack.isEmpty()); // Output: 2


// These challenges demonstrate different use cases of the `pop()` method, including removing elements from arrays, modifying strings, and implementing a simple stack data structure. 