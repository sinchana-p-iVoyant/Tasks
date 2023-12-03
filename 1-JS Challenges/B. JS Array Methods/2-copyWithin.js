// Syntax: array.copyWithin(target, start, end);

// 1. Negative Indices and Overlapping Ranges:

// Challenge: Understanding how negative indices work and handling overlapping ranges.

var array = [1, 2, 3, 4, 5];
var a = array.copyWithin(-2, 1, 4);

console.log("Edited Array:")
console.log(array)
console.log(a)

// The challenge here is to predict the result of this operation and understand how negative indices and overlapping ranges are handled.

// 2. Using with Arrays of Objects:

// Challenge: Applying copyWithin() to an array of objects and understanding the implications.

var arrayOfObjects = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];
arrayOfObjects.copyWithin(1, 0, 2);
console.log(arrayOfObjects)

// When working with arrays of objects, the challenge is to understand how object references are copied within the array and how it may impact the original and copied objects.

// 3. Dynamic Target and Range Calculation:

// Challenge: Dynamically calculating the target and range indices based on certain conditions.


function dynamicCopyWithin(array, startIndex, endIndex, targetIndex) {
  return array.copyWithin(targetIndex, startIndex, endIndex)
}


var numbers = [1, 2, 3, 4, 5];
var b = dynamicCopyWithin(numbers, 1, 4, 0);
console.log(b)

// The challenge here is to implement a function that performs a copy within an array based on dynamic calculations for the target and range indices.