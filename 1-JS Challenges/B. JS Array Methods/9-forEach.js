// forEach(): Executes a provided function once for each array element.

// Syntax
// array.forEach(callback(element, index, array), thisArg);

// 1. **Summing Array Elements:**
//    - **Challenge**: Write a function that takes an array of numbers and uses `forEach()` to calculate the sum of all elements.
   
     function sumArrayElements(numbers) {
       let sum = 0;
       numbers.forEach((number) => {
         sum += number;
       });
       return sum;
     }

     var numberArray = [1, 2, 3, 4, 5];
     var result = sumArrayElements(numberArray);
     console.log(result); // Output: 15
     

// 2. **Logging Even Numbers:**
//    - **Challenge**: Write a function that takes an array of numbers and uses `forEach()` to log only the even numbers to the console.
   
     function logEvenNumbers(numbers) {
       numbers.forEach((number) => {
         if (number % 2 === 0) {
           console.log(number);
         }
       });
     }

     var numberArray = [1, 2, 3, 4, 5, 6];
     logEvenNumbers(numberArray);
     // Output:
     // 2
     // 4
     // 6
    

// 3. **Updating Object Properties:**
//    - **Challenge**: Write a function that takes an array of objects representing users and uses `forEach()` to update a specific property for each user.
   
     function updateAge(users, yearsToAdd) {
       users.forEach((user) => {
         user.age += yearsToAdd;
       });
     }

     var userArray = [
       { name: "Alice", age: 25 },
       { name: "Bob", age: 30 },
       { name: "Charlie", age: 35 }
     ];

     updateAge(userArray, 2);
     console.log(userArray);
     /* Output:
        [
          { name: "Alice", age: 27 },
          { name: "Bob", age: 32 },
          { name: "Charlie", age: 37 }
        ]
     */
    

// These challenges demonstrate various applications of the `forEach()` method, including summing array elements, logging specific elements, and updating object properties. Feel free to run the solutions and experiment with the code.