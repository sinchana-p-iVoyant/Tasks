// Parallel Async Operations
// Create a function that performs multiple asynchronous operations in parallel using Promise.all and async/await. For example, fetch data from two different API endpoints concurrently and log the results once both requests are complete.

// javascript
console.log("---- Challenge 2: Parallel Async Operation ----")

var url1 = "https://jsonplaceholder.typicode.com/todos/1"    
var url2 = "https://jsonplaceholder.typicode.com/todos/2"    

async function parallelAsyncOperations(apiEndpoint1, apiEndpoint2) {
  try {
    const [result1, result2] = await Promise.all([
      fetch(apiEndpoint1).then(response => response.json()),
      fetch(apiEndpoint2).then(response => response.json())
    ]);

    console.log('Result from API 1:', result1);
    console.log('Result from API 2:', result2);

    // Perform additional actions with the results.
  } catch (error) {
    console.error('Error in parallelAsyncOperations:', error);
  }
}

// Example usage:
parallelAsyncOperations(url1, url2);
