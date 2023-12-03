// keys(): Returns a new Array Iterator object that contains the keys for each index in the array.

// Syntax:
// var iterator = array.keys();

// The Object.keys() method is a built-in JavaScript method that returns an array of a given object's own enumerable property names, in the same order as they appear in the object. 
// In other words, it extracts the keys from an object and returns them as an array.



//  the `Object.keys()` method in JavaScript, which is used to extract the keys of an object.

// 1. **Extracting Object Keys:**
//    - **Challenge**: Write a function that takes an object and returns an array containing its keys using the `Object.keys()` method.
  
     function getObjectKeys(obj) {
       return Object.keys(obj);
     }

     var sampleObject = { a: 1, b: 2, c: 3 };
     var keysArray = getObjectKeys(sampleObject);
     console.log(keysArray); // Output: ["a", "b", "c"]
     

// 2. **Filtering Object Keys by Type:**
//    - **Challenge**: Write a function that takes an object and a data type, and returns an array containing keys of the specified type using the `Object.keys()` method.
  
     function filterKeysByType(obj, dataType) {
       return Object.keys(obj).filter((key) => typeof obj[key] === dataType);
     }

     var sampleObject = { a: 1, b: "two", c: true, d: [1, 2, 3] };
     var keysOfTypeString = filterKeysByType(sampleObject, "string");
     console.log(keysOfTypeString); // Output: ["b"]
     

// 3. **Checking for Key Existence:**
//    - **Challenge**: Write a function that takes an object and a key, and returns `true` if the key exists in the object using the `Object.keys()` method.
  
     function keyExists(obj, key) {
       return Object.keys(obj).includes(key);
     }

     var sampleObject = { a: 1, b: 2, c: 3 };
     var keyToCheck = "b";
     var exists = keyExists(sampleObject, keyToCheck);
     console.log(exists); // Output: true
     

// These challenges demonstrate different use cases of the `Object.keys()` method, including extracting keys from an object, filtering keys based on data type, and checking for the existence of a specific key.