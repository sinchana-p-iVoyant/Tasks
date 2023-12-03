// entries(): Returns a new "Array" Iterator object that contains the key/value pairs for each index in the array.

// Syntax: var iterator = array.entries();

// 1. Accessing Key-Value Pairs with Entries:

// Challenge: Utilize the entries() method to iterate over key-value pairs in an object and perform a specific operation.

function processEntries(obj) {
    // Using entries() to iterate over key-value pairs
    for (let [key, value] of Object.entries(obj)) {
      // Your code here - perform operations on key and value
      console.log(`Key: ${key}, Value: ${value}`);
    }
  }
  
var sampleObject = { a: 1, b: 2, c: 3 };
processEntries(sampleObject);
  
// 2. Filtering Key-Value Pairs Based on a Condition:

// Challenge: Use entries() to filter key-value pairs based on a condition and create a new object.
// It uses Object.entries(obj) to get an "array" of key-value pairs, filters the entries based on the provided condition, and then constructs a new object from the filtered entries using Object.fromEntries().

function filterEntries(obj, condition) {
    // Using entries() to iterate over key-value pairs
    const filteredEntries = Object.entries(obj).filter(([key, value]) => condition(key, value));
  
    // Constructing a new object from filtered entries
    const filteredObject = Object.fromEntries(filteredEntries);
  
    return filteredObject;
  }
  
  var sampleObject = { a: 1, b: 2, c: 3, d: 4 };
  var filteredObject = filterEntries(sampleObject, (key, value) => value % 2 === 0);
  
  console.log(filteredObject);
  

var sampleObject = { a: 1, b: 2, c: 3, d: 4 };
var filteredObject = filterEntries(sampleObject, (key, value) => value % 2 === 0);
console.log(filteredObject)

// Participants are challenged to implement filterEntries to create a new object containing only key-value pairs that meet a specified condition.


// 3. Creating an Array of Key-Value Pairs from an Object:

// Challenge: Convert an object into an array of key-value pairs using the entries() method.

function objectToArray(obj) {
    // Using entries() to convert the object into an array of key-value pairs
    const keyValueArray = Object.entries(obj).map(([key, value]) => ({ key, value }));
    return keyValueArray;
  }
  
  var sampleObject = { x: 10, y: 20, z: 30 };
  var keyValueArray = objectToArray(sampleObject);
  
  console.log(keyValueArray);
  

//  The challenge is to implement objectToArray to convert the object into an array of key-value pairs using entries().
