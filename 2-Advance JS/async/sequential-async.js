
// Write a function that performs a series of asynchronous operations sequentially using async/await. For instance, fetch data from one API endpoint, process the result, and then use that result to fetch additional data.

console.log("---- Challenge 3: Sequential Async Operation ----")

var url1 = "https://jsonplaceholder.typicode.com/todos/1"    
var url2 = "https://jsonplaceholder.typicode.com/todos/2"    

async function sequentialAsyncOperations(apiEndpoint1, apiEndpoint2) {
  try {
    const response1 = await fetch(apiEndpoint1);
    const result1 = await response1.json();

    // Process result1 if needed.

    const response2 = await fetch(apiEndpoint2 + result1.id);
    const result2 = await response2.json();

    console.log('Result from API 1:', result1);
    console.log('Result from API 2:', result2);

    // Perform additional actions with the results.
  } catch (error) {
    console.error('Error in sequentialAsyncOperations:', error);
  }
}

// Example usage:
sequentialAsyncOperations(url1, url2);
