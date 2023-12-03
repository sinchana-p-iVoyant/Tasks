// Challenge 1: Fetch and Display Data
// Write a function that fetches data from a given API endpoint using async and await. Once the data is fetched, display it in the console or on a webpage.

console.log("---- Challenge 1: Fetch and Display Data ----")

var url = "https://jsonplaceholder.typicode.com/todos/1"    


async function fetchData(apiEndpoint) {
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}
  
  
  // Example usage:
fetchData(url);
  