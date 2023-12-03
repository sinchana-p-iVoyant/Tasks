// reverse(): Reverses the elements of an array in place.

// Syntax
// array.reverse();


// 1. **Reverse an Array:**
//    - **Challenge**: Write a function that takes an array and returns a new array with the elements reversed using the `reverse()` method.
 
     function reverseArray(arr) {
      
       return arr.slice().reverse(); // Output: [5, 4, 3, 2, 1]
      //  return arr.reverse();      // Output: [5, 4, 3, 2, 1]
     }

     var originalArray = [1, 2, 3, 4, 5];
     var reversedArray = reverseArray(originalArray);
     console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
     
// 2. **Reverse a String:**
//    - **Challenge**: Write a function that takes a string and returns a new string with its characters reversed using the `split()`, `reverse()`, and `join()` methods.
 
     function reverseString(str) {
       return str.split("").reverse().join("");
     }

     var originalString = "Hello, world!";
     var reversedString = reverseString(originalString);
     console.log(reversedString); // Output: "!dlrow ,olleH"
     

// 3. **Reverse Words in a Sentence:**
//    - **Challenge**: Write a function that takes a sentence and returns a new sentence with the words reversed using the `split()`, `reverse()`, and `join()` methods.
 
     function reverseWords(sentence) {
       return sentence.split(" ").reverse().join(" ");
     }

     var originalSentence = "Coding is fun!";
     var reversedSentence = reverseWords(originalSentence);
     console.log(reversedSentence); // Output: "fun! is Coding"
     

// These challenges demonstrate different use cases of the `reverse()` method, including reversing arrays, strings, and words in a sentence.