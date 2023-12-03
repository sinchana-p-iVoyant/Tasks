// toLocaleString(): Returns a string representing the array elements using the system's default locale.

// Syntax:
// var localString = array.toLocaleString(locales, options);

// It seems like you may be referring to the `localStorage` object in JavaScript rather than a specific `toLocalStorage()` method. The `localStorage` object is used to store key-value pairs in a web browser with no expiration time.


// 1. **Store Data in Local Storage:**
//    - **Challenge**: Write a function that takes a key-value pair and stores it in the browser's local storage using the `localStorage` object.
 
     function saveToLocalStorage(key, value) {
       localStorage.setItem(key, JSON.stringify(value));
     }

     // Example usage:
     saveToLocalStorage("username", "john_doe");
     

// 2. **Retrieve Data from Local Storage:**
//    - **Challenge**: Write a function that takes a key and retrieves the corresponding value from the local storage.
 
     function getFromLocalStorage(key) {
       const storedValue = localStorage.getItem(key);
       return storedValue ? JSON.parse(storedValue) : null;
     }

     // Example usage:
     const username = getFromLocalStorage("username");
     console.log(username); // Output: "john_doe"
     

// 3. **Remove Data from Local Storage:**
//    - **Challenge**: Write a function that takes a key and removes the corresponding key-value pair from the local storage.
 
     function removeFromLocalStorage(key) {
       localStorage.removeItem(key);
     }

     // Example usage:
     removeFromLocalStorage("username");
     

// These challenges demonstrate basic operations with the `localStorage` object, including storing data, retrieving data, and removing data. Keep in mind that the `localStorage` object is synchronous and has a size limit, typically around 5 MB, so it's important to handle storage appropriately based on your application's requirements.