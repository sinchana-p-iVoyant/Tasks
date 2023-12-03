// Syntax: var newArray = array1.concat(array2, array3, ...);

// The `concat()` method in JavaScript is generally straightforward and is used for combining arrays. However, here are three challenges related to using the `concat()` method:

// 1. **Nested Arrays**:
//    - **Challenge**: Concatenating arrays that are nested within another array.
//    
     var array1 = [1, 2, [3, 4]];
     var array2 = [5, 6];
     var newArray = array1.concat(array2);
     console.log("NewArray:")
     console.log(newArray)

    //  The challenge here is that the `concat()` method does a shallow copy, so it appends the reference to the nested array instead of flattening it.

// 2. **Merging Arrays with Undefined or Null Values**:
//    - **Challenge**: Dealing with arrays that might contain `undefined` or `null` values.

     var array1 = [1, 2, 3];
     var array2 = [4, null, undefined];
     var newArray = array1.concat(...array2);
     console.log("NewArray:")
     console.log(newArray)

    //  The `concat()` method doesn't filter out `undefined` or `null` values. They are included in the resulting array, which might not be the desired behavior.

// 3. **Concatenating Non-Array Objects**:
//    - **Challenge**: Concatenating objects that are not arrays.
   

     var array1 = [1, 2, 3];
     var nonArray = { key: 'value', age: 25 };
     var newArray = array1.concat(nonArray);
     console.log("NewArray:")
     console.log(newArray)

    //  When trying to concatenate a non-array object, the `concat()` method treats it as a single element, resulting in an array with the object as one of its elements.
